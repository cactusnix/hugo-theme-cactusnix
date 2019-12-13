function secondsToDate(seconds) {
  if (!seconds) {
    return 0
  }
  let time = new Array(0, 0, 0, 0, 0)
  if (seconds >= 365 * 24 * 3600) {
    time[0] = Math.floor(seconds / (365 * 24 * 3600))
    seconds %= 365 * 24 * 3600
  }
  if (seconds >= 24 * 3600) {
    time[1] = Math.floor(seconds / (24 * 3600))
    seconds %= 24 * 3600
  }
  if (seconds >= 3600) {
    time[2] = Math.floor(seconds / 3600)
    seconds %= 3600
  }
  if (seconds >= 60) {
    time[3] = Math.floor(seconds / 60)
    seconds %= 60
  }
  if (seconds >= 1) {
    time[4] = seconds
  }
  return time
}

setInterval(function blogRuntime() {
  let beginTime = new Date('2017-10-07 22:43:25').getTime()
  let nowTime = new Date().getTime()
  let diff = Math.floor((nowTime - beginTime) / 1000)
  let runTime = secondsToDate(diff)
  let blogRuntime = document.getElementById('blogRuntime')
  blogRuntime.innerText =
    runTime[0] +
    '年' +
    runTime[1] +
    '天' +
    runTime[2] +
    '时' +
    runTime[3] +
    '分' + 
    runTime[4] +
    '秒'
}, 1000)
