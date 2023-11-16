import { FC } from "react"
import { Calendar, CurrentDate, Header, Vacancy } from "@Components"
import { Stack } from "@mui/material"

import styles from "./MainLayout.module.scss"
const MainLayout: FC = () => {
  return (
    <div className={styles.MainLayout}>
      <Header />

      <main className={styles.Main}>
        <section className={styles.LeftBox}>
          <Vacancy />
        </section>

        <section className={styles.RightBox}>
          <Stack>
            <CurrentDate />
            <Calendar />
          </Stack>
        </section>
      </main>
    </div>
  )
}

export default MainLayout
