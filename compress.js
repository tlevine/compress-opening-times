function showTime(rawMinutes) {
  var hours = Math.floor(rawMinutes / 60)
  var minutes = rawMinutes % 60
  var stringHours = (hours >= 10 ? '' : ' ') + hours
  var stringMinutes = (minutes >= 10 ? '' : '0') + minutes
  return stringHours + ':' + stringMinutes
}
