function throttle(functime, wait) {
  let Throttleok, savedArgs, saved

  function wrap() {

      if (Throttleok) {
          savedArgs = arguments
          saved = this
          return
      }

      Throttleok = true;
      functime.apply(this, arguments);

      setTimeout(function () {
          Throttleok = false
          if (savedArgs) {
              wrap.apply(saved, savedArgs)
              savedArgs = saved = null
          }
      }, wait)
  }

  return wrap;

};
function opThrottle(functime, wait, options) {
  let timer, savedArgs, saved

  return function () {
      if (timer) {
          saved = this
          savedArgs = arguments
          return
      }

      const timeup = () => {
          if (options?.trailing === true && savedArgs) {
              functime.apply(saved, savedArgs)
              saved = savedArgs = null
              timer = setTimeout(timeup, wait)
          } else {
              timer = null
          }
      }

      if (options?.leading === true) {
          functime.apply(this, arguments)
      } else {
          saved = this
          savedArgs = arguments
      }
      timer = setTimeout(timeup, wait)
  }
}