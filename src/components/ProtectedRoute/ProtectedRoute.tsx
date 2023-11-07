import { useAppSelector } from "@ReduxHooks"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ element: Component, ...props }: any) => {
  // const { user } = useAppSelector((state) => state.auth)
  const user = true

  return user ? <Component {...props} /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
