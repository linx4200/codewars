// https://www.codewars.com/kata/51646de80fd67f442c000013

function stripUrlParams(url, paramsToStrip){
  if (url.search(/\?/) >= 0) {
    let params= url.split('?')[1]
    const keys2remove = paramsToStrip || []
    return params.split('&').reduce((prev, curr) => {
      const kv = curr.split('=')
      if (keys2remove.includes(kv[0])) return prev

      keys2remove.push(kv[0])
      prev += (curr + '&')
      return prev
    }, url.split('?')[0] + '?').slice(0, -1)
  }
  return url
}


// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'