import wxio from 'wxio'

export default function mixin () {
  // cache
  let stack = 0

  function loading () {
    loading.show()
    return loading.hide
  }
  loading.show = function show () {
    wxio.showNavigationBarLoading()
    ++stack
  }
  loading.hide = function hide () {
    if (--stack > 0) {
      return
    }
    wxio.hideNavigationBarLoading()
  }
  loading.isLoading = function isLoading () {
    return stack > 0
  }
  function setup () {
    this.$loading = loading
  }
  return {
    beforeLoad: setup,
    created: setup,
  }
}
