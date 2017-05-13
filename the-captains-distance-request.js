// https://www.codewars.com/kata/524ada2bdc2121b521000353/

const EARTH_RADIUS = 6378137.0

function getRad(d){
  return d * Math.PI / 180.0
}

function conversion(coord) {
  return coord
          .trim()
          .replace(/(\d{1,2})[°′″]\s?/g, (match, p1, offset) => {
            if (offset === 4) return p1 / 60 + ','
            if (offset === 8) return p1 / 3600 + ','
            return p1 + ','
          })
          .split(',')
          .reduce((prev, curr, idx) => {
            if (idx < 3) return prev + (+curr)
            if (curr === 'S' || curr === 'W') return -prev
            return prev
          }, 0)
}

function getFlatternDistance (lat1,lng1,lat2,lng2){
  var f = getRad((lat1 + lat2)/2)
  var g = getRad((lat1 - lat2)/2)
  var l = getRad((lng1 - lng2)/2)

  var sg = Math.sin(g)
  var sl = Math.sin(l)
  var sf = Math.sin(f)
  
  var s,c,w,r,d,h1,h2
  var a = EARTH_RADIUS
  var fl = 1/298.257
  
  sg = sg*sg
  sl = sl*sl
  sf = sf*sf
  
  s = sg*(1-sl) + (1-sf)*sl
  c = (1-sg)*(1-sl) + sf*sl
  
  w = Math.atan(Math.sqrt(s/c))
  r = Math.sqrt(s*c)/w
  d = 2*w*a
  h1 = (3*r -1)/2/c
  h2 = (3*r +1)/2/s
  
  return d*(1 + fl*(h1*sf*(1-sg) - h2*(1-sf)*sg))
}


function distance(coord1, coord2) {
  const [lat1, lng1] = coord1.split(',').map(conversion)
  const [lat2, lng2] = coord2.split(',').map(conversion)
  const dis = getFlatternDistance(lat1, lng1, lat2, lng2)
  return dis

}

distance('48° 12′ 30″ N, 16° 22′ 23″ E', '23° 33′ 0″ S, 46° 38′ 0″ W')  // Returns 10130
distance('48° 12′ 30″ N, 16° 22′ 23″ E', '48° 12′ 30″ N, 16° 22′ 23″ E') // 0
distance('48° 12′ 30″ N, 16° 22′ 23″ E', '58° 18′ 0″ N, 134° 25′ 0″ W')  // Returns 7870