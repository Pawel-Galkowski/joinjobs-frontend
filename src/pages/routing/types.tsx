export interface Auth {
  isAuthenticated: boolean
  loading: boolean
  isAdmin: boolean
}

export interface RouteInterface {
  auth: Auth
  children: JSX.Element
}
