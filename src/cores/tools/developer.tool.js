export const getReduxDevTool = function () {
  if (!window.devToolsExtension) {
    return f => f
  }
  return window.devToolsExtension()
}
