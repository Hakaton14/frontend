import { FC } from "react"
import { CandidatInfoTable } from "@Components"
import { useAppSelector } from "@ReduxHooks"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  Button,
  Stack,
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import PencilIcon from "../../ui-kit/icons/pencil-1.svg"
import FolderIcon from "../../ui-kit/icons/folder.svg"
import EyeIcon from "../../ui-kit/icons/eye.svg"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/ru"

import styles from "./CandidateTable.module.scss"

const CandidateTable: FC = () => {
  dayjs.extend(relativeTime)

  const vacancies = useAppSelector((state) => state.vacancies.vacancyList)

  return (
    <Stack spacing={1}>
      {vacancies.map((vacancy) => (
        <Accordion sx={{ width: "945px" }} key={vacancy.id}>
          <AccordionSummary
            sx={{
              width: "945px",
              height: "104px",
              padding: "24px 32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            expandIcon={<ExpandMore sx={{ width: "24px", height: "24px" }} />}
            id="panel1a-header"
          >
            <div className={styles.tableWrapper}>
              <div className={styles.professionWrapper}>
                <h2 className={styles.vacantionTitle}>{vacancy.name}</h2>

                <h3 className={styles.progressTitle}>
                  {dayjs(vacancy.pub_datetime).locale("ru").fromNow()}
                </h3>
              </div>

              <div className={styles.progressWrapper}>
                <h3 className={styles.progress}>Статус: 75%</h3>

                <LinearProgress
                  sx={{ width: "132px", height: "8px", borderRadius: "64px" }}
                  variant="determinate"
                  value={75}
                />
              </div>

              {/* TODO: Вынести в подкомпонент  */}
              <div className={styles.buttonWrapper}>
                <Button
                  sx={{
                    padding: "0",
                    paddingRight: "24px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#5A9BFF",
                    textTransform: "none",
                  }}
                >
                  <img
                    className={styles.icon}
                    src={PencilIcon}
                    alt="Иконка карандаша"
                  />
                  Изменить
                </Button>

                <Button
                  sx={{
                    padding: "0",
                    paddingRight: "24px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#5A9BFF",
                    textTransform: "none",
                  }}
                >
                  <img
                    className={styles.icon}
                    src={FolderIcon}
                    alt="Иконка папки"
                  />
                  В архив
                </Button>

                <Button
                  sx={{
                    padding: "0",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#5A9BFF",
                    textTransform: "none",
                  }}
                >
                  <img
                    className={styles.icon}
                    src={EyeIcon}
                    alt="Иконка глаза"
                  />
                  Скрыть
                </Button>
              </div>
            </div>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: "24px 24px" }}>
            <CandidatInfoTable />
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  )
}

export default CandidateTable
