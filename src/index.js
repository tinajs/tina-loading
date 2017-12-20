import globals from './globals'

export default function mixin () {
  // cache
  let stack = 0

  function loading () {
    loading.push()
    return loading.pop
  }
  loading.push = function push () {
    wx.showNavigationBarLoading()
    ++stack
  }
  loading.pop = function pop () {
    if (--stack > 0) {
      return
    }
    wx.hideNavigationBarLoading()
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
