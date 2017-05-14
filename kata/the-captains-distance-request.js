// https://www.codewars.com/kata/524ada2bdc2121b521000353/

// info:
// https://github.com/pcorey/the-captains-distance-request

// Run test:
// npm-run mocha ../test/the-captains-distance-request.js

function splitOnLatLon (coord) {
  return coord.split(',').map(c => c.trim())
}

function toDecimal(dms) {
  const regex = /(\d+)° (\d+)′ (\d+)″ ([NESW])/
  /* eslint-disable no-unused-vars */
  const [_, degrees, minutes, seconds, o] = regex.exec(dms)
   /* eslint-enable no-unused-vars */
  const decimal = parseInt(degrees) +
                (parseInt(minutes) / 60) +
                (parseInt(seconds) / (60 * 60))
  return +(decimal * (o === 'N' || o === 'E' ? 1 : -1)).toFixed(3)
}

const PI = Math.PI
const R = 6371

// function squared (x) { return x * x }
function toRad (x) { return x * PI / 180.0 }

// https://github.com/njj/haversine/blob/master/haversine.js
function haversine(aLat, aLng, bLat, bLng) {
  var dLat = toRad(bLat- aLat)
  var dLon = toRad(bLng - aLng)
  var lat1 = toRad(aLat)
  var lat2 = toRad(bLat)

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  return R * c
}

function distance(coord1, coord2) {
  const [lat1, lng1] = splitOnLatLon(coord1).map(toDecimal)
  const [lat2, lng2] = splitOnLatLon(coord2).map(toDecimal)
  return Math.floor(haversine(lat1, lng1, lat2, lng2) / 10) * 10
}

exports.distance = distance
exports.splitOnLatLon = splitOnLatLon
exports.toDecimal = toDecimal
exports.haversine = haversine
exports.distance = distance
