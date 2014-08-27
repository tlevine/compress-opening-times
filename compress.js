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
    return String.fromCharCode(x + 33)
  } else if (x <= firstBlock + secondBlock) {
    return String.fromCharCode(x + 161)
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

function to2Char (x) {
  return toChar(Math.floor(x / 189)) + toChar(x % 189)
}

function from2Char (x) {
  return fromChar(x[0]) * 189 + fromChar(x[1])
}

// All arguments must be integers.
// 1 <= repeats <= 7
// openingMinutes >= 0
// closingMinutes >= 0
function serializeDay(repeats, openingMinutes, closingMinutes) {
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
    return to2Char(0) + '(' + [repeats,openingMinutes,closingMinutes].join(',') + ')'
  } else {
    var a = repeats * (71 * 71)
    var b = opening71 * 71
    var c = closing71 * 1
    return to2Char(a + b + c)
  }

  function round(x) {
    if (x == null) {
      return null
    } else {
      return Math.round(x)
    }
  }
}

function parseDay(serialized) {
  if (serialized.substring(0,2) == to2Char(0)) {
    var args = serialized.match(/!!\(([0-9]+),([0-9]+),([0-9]+)\)/)
    var repeats = 1 * args[1]
    var openingMinutes = 1 * args[2]
    var closingMinutes = 1 * args[3]
  } else {
    var x = from2Char(serialized)
    console.log(x)

    var c = x % 71
    x -= c
    console.log(x)

    var b = x % (71 * 71)
    x -= b
    console.log(x)

    var a = x % (71 * 71 * 71)
    x -= a
    console.log(x)

    console.log(a, b, c)

  }
  return [repeats, openingMinutes, closingMinutes]
}

function check(command) {
  console.log(command, '->', eval(command))
}
check('compressTime(1500)')
check('compressTime(60 * 24 + 1)')
check('compressTime(60 * 24)')
check('decompressTime(33)')
check('toChar(42)')
check('fromChar("K")')
check('toChar(62)')
check('fromChar("_")')
check('toChar(182)')
check('fromChar("ŗ")')
check('toChar(0)')
check('to2Char(0)')
check('to2Char(23422)')
check('from2Char("ĜŐ")')
check('serializeDay(2, 7.5 * 60, 19 * 60)')
check('serializeDay(2, 450, 1140)')
check('parseDay("Wď")')
check('serializeDay(1, 450, 1140)')
