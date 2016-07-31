// https://www.codewars.com/kata/527d0fbbbb2890fbb900081e

function initNewArr(arr) {
  return arr.map((d) => d.map(() => 0));
}

function outerEdgesOf (arr) {
  var newArr = initNewArr(arr);
  // returns an array with the same dimensions as arr.
  // where the outer edges of the features of arr are highlighted (1)
  for (var i = 0, l = arr.length; i < l; i++) {
    for(var j = 0, ll = arr[i].length; j < ll; j++) {
      if (arr[i][j]) {
        if (arr[i - 1]) {
          if(arr[i - 1][j - 1] || arr[i - 1][j - 1] === 0) newArr[i - 1][j - 1] = 1;
          if(arr[i - 1][j] || arr[i - 1][j] === 0) newArr[i - 1][j] = 1;
          if(arr[i - 1][j + 1] || arr[i - 1][j + 1] === 0) newArr[i - 1][j + 1] = 1;
        }

        if(arr[i][j - 1] || arr[i][j - 1]  === 0) newArr[i][j - 1] = 1;
        if(arr[i][j + 1] || arr[i][j + 1]  === 0) newArr[i][j + 1] = 1;

        if (arr[i + 1]) {
          if(arr[i + 1][j - 1] || arr[i + 1][j - 1] === 0) newArr[i + 1][j - 1] = 1;
          if(arr[i + 1][j] || arr[i + 1][j] === 0) newArr[i + 1][j] = 1;
          if(arr[i + 1][j + 1] || arr[i + 1][j + 1] === 0) newArr[i + 1][j + 1] = 1;
        }
      }
    }
  }
  return newArr.map((d, i) =>
    d.map((dd, j) => {
      return arr[i][j] ? 0 : dd
    })
  );
}

function innerEdgesOf(arr){
  // returns an array with the same dimensions as arr.
  // where the inner edges of the features of arr are highlighted (1)
  var newArr = initNewArr(arr);

  return newArr = newArr.map((d, i) =>
    d.map((dd, j) => (
      arr[i - 1] &&
      arr[i - 1][j - 1] &&
      arr[i - 1][j] &&
      arr[i - 1][j + 1] &&
      arr[i][j - 1] &&
      arr[i][j + 1] &&
      arr[i + 1] &&
      arr[i + 1][j - 1] &&
      arr[i + 1][j] &&
      arr[i + 1][j + 1] ?
        0 : arr[i][j]
    ))
  );
}

function grow(arr){
  // returns an array with the same dimensions as arr.
  // where the the features have grown
  var outerEdges = outerEdgesOf(arr);
  return arr.map((d, i) => d.map((dd, j) => arr[i][j] || outerEdges[i][j]));
}

function shrink(arr){
  // returns an array with the same dimensions as arr.
  // where the the features have shrunk
  var innerEdges = innerEdgesOf(arr);
  return arr.map((d, i) => d.map((dd, j) => arr[i][j] && innerEdges[i][j] === 0 ? 1 : 0));
}
