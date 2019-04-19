import { constantRoutes } from '@/router'

export default {
  SET_ROUTES: (state, routes) => {
    state.permission.addRoutes = routes
    state.permission.routes = constantRoutes.concat(routes)
  }
}
