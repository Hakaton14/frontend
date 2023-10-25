import { FC } from "react"
import styles from "./Auth.module.scss"
import Login from "./Login/Login"
import Registration from "./Registration/Registration"

enum EPodComponent {
  login,
  registration,
}

type TPodComponent = keyof typeof EPodComponent

interface IAuthProps {
  podComponent: TPodComponent
}

const Auth: FC<IAuthProps> = ({ podComponent = "login" }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Карьерный трекер</h1>
        {podComponent === "login" ? <Login /> : <Registration />}
      </div>
    </section>
  )
}

export default Auth
