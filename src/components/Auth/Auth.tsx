import styles from "./Auth.module.scss"
import Login from "./Login/Login"

function Auth() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Карьерный трекер</h1>
        <Login />
      </div>
    </section>
  )
}

export default Auth
