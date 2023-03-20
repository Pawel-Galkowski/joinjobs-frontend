export interface Auth {
  isAuthenticated: any
  loading: any
  isAdmin: any
}

export interface RouteInterface {
  element: any
  auth: Auth
  path: any
}
