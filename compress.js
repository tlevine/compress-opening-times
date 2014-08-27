function showTime(rawMinutes) {
  var hours = Math.floor(rawMinutes / 60)
  var minutes = rawMinutes % 60
  var stringHours = (hours >= 10 ? '' : ' ') + hours
  var stringMinutes = (minutes >= 10 ? '' : '0') + minutes
  return stringHours + ':' + stringMinutes
}

function contains(member, container) {
  return container.indexOf(member) != -1
}
function left(pair) {
  return pair[0]
}
function right(pair) {
  return pair[1]
}
function matches(side, value) {
  return function(pair) {
    return side(pair) == value
  }
}

function compress6 (minutes) {
  if (!contains(minutes, compression6Map.map(left))) {
    return null
  } else {
    return right(compression6Map.filter(matches(left, minutes))[0])
  }
}

function decompress6 (compressed) {
  if (!contains(compressed, compression6Map.map(righft))) {
    return null
  } else {
    return left(compression6Map.filter(matches(right, compressed))[0])
  }
}

// 6-bit compression mapping
compression6Map = [
  [ 360, 0],
  [ 390, 1],
  [ 420, 2],
  [ 450, 3],
  [ 480, 4],
  [ 510, 5],
  [ 540, 6],
  [ 570, 7],
  [ 600, 8],
  [ 630, 9],
  [ 660,10],
  [ 690,11],
  [ 720,12],
  [ 750,13],
  [ 780,14],
  [ 960,15],
  [ 990,16],
  [1020,17],
  [1050,18],
  [1080,19],
  [1110,20],
  [1140,21],
  [1170,22],
  [1200,23],
  [1230,24],
  [1260,25],
  [1290,26],
  [1320,27],
  [1350,28],
  [1380,29],
  [1410,30],
  [1440,31],
  [1470,32],
  [1500,33],
  [1530,34],
  [1560,35]
] 
