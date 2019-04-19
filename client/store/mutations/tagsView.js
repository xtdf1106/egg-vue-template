
export default {
  ADD_VISITED_VIEW: (state, view) => {
    if (state.tagsView.visitedViews.some(v => v.path === view.path)) return
    state.tagsView.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  ADD_CACHED_VIEW: (state, view) => {
    if (state.tagsView.cachedViews.includes(view.name)) return
    if (!view.meta.noCache) {
      state.tagsView.cachedViews.push(view.name)
    }
  },

  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.tagsView.visitedViews.entries()) {
      if (v.path === view.path) {
        state.tagsView.visitedViews.splice(i, 1)
        break
      }
    }
  },
  DEL_CACHED_VIEW: (state, view) => {
    for (const i of state.tagsView.cachedViews) {
      if (i === view.name) {
        const index = state.tagsView.cachedViews.indexOf(i)
        state.tagsView.cachedViews.splice(index, 1)
        break
      }
    }
  },

  DEL_OTHERS_VISITED_VIEWS: (state, view) => {
    state.tagsView.visitedViews = state.tagsView.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path
    })
  },
  DEL_OTHERS_CACHED_VIEWS: (state, view) => {
    for (const i of state.tagsView.cachedViews) {
      if (i === view.name) {
        const index = state.tagsView.cachedViews.indexOf(i)
        state.tagsView.cachedViews = state.tagsView.cachedViews.slice(index, index + 1)
        break
      }
    }
  },

  DEL_ALL_VISITED_VIEWS: state => {
    // keep affix tags
    state.tagsView.visitedViews = state.tagsView.visitedViews.filter(tag => tag.meta.affix)
  },
  DEL_ALL_CACHED_VIEWS: state => {
    state.tagsView.cachedViews = []
  },

  UPDATE_VISITED_VIEW: (state, view) => {
    for (let v of state.tagsView.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
    }
  }
}
