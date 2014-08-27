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

function compressTime (minutes) {
  if (contains(minutes, timeMap.map(left))) {
    return right(timeMap.filter(matches(left, minutes))[0])
  } else {
    return 0
  }
}

function decompressTime (compressed) {
  if (compressed == 0) {
    return 0
  } else {
    return left(timeMap.filter(matches(right, compressed))[0])
  }
}

// 71-valued compression mapping
var timeMap = [
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

function toChar(x) {
  var firstBlock = 1 + 126 - 33
  var secondBlock = 1 + 255 - 161

  if (x <= firstBlock) {
    return String.fromCharChode(x + 33)
  } else if (x <= firstBlock + secondBlock) {
    return String.fromCharChode(x + 161)
  }
}

function fromChar(x) {
  var code = x.charCodeAt(0)

  if (code >= 161) {
    return code - 161
  } else {
    return code - 33
  }
}

// All arguments must be integers.
// 1 <= repeats <= 7
// openingMinutes >= 0
// closingMinutes >= 0
function serialize(repeats, openingMinutes, closingMinutes) {
  if (!(round(repeats) == repeats && round(openingMinutes) == openingMinutes) && round(closingMinutes) == closingMinutes) {
    throw('All arguments must be integers.')
  } else if (!(1 <= repeats && repeats <= 7)) {
    throw('"repeats" must be between 1 and 7.')
  } else if (openingMinutes < 0 || closingMinutes < 0) {
    throw('Minutes must be at least zero.')
  }

  var opening71 = compressTime(openingMinutes)
  var closing71 = compressTime(closingMinutes)

  if (opening71 == 0 || closing71 == 0) {
    return 
  }
  

  function round(x) {
    if (x == null) {
      return null
    } else {
      return Math.round(x)
    }
  }
}

function check(command) {
  console.log(command, '->', eval(command))
}
check('compress6(1500)')
check('compress6(60 * 24 + 1)')
check('compress6(60 * 24)')
check('decompress6(33)')
