import { useAppSelector } from "@ReduxHooks"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { user } = useAppSelector((state) => state.auth)

  return user ? <Component {...props} /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
