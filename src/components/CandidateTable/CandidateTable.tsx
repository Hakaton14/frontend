import * as React from "react"
import styles from "./CandidateTable.module.scss"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import LinearProgress from "@mui/material/LinearProgress"
import { Button } from "@mui/material"

import PencilIcon from "../../ui-kit/icons/pencil-1.svg"
import FolderIcon from "../../ui-kit/icons/folder.svg"
import EyeIcon from "../../ui-kit/icons/eye.svg"

function CandidateTable() {
  return (
    <div>
      <Accordion sx={{ width: "945px" }}>
        <AccordionSummary
          sx={{
            width: "945px",
            height: "104px",
            padding: "24px 32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // alignContent: "flex-end",
          }}
          expandIcon={<ExpandMoreIcon sx={{ width: "24px", height: "24px" }} />}
          // aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={styles.tableWrapper}>
            <div className={styles.professionWrapper}>
              <h2 className={styles.vacantionTitle}>Java-разработчик</h2>
              <h3 className={styles.progressTitle}>В работе: 34 дня</h3>
            </div>

            <div className={styles.progressWrapper}>
              <h3 className={styles.progress}>Статус: 75%</h3>
              <LinearProgress
                sx={{ width: "132px", height: "8px", borderRadius: "64px" }}
                variant="determinate"
                value={50}
              />
            </div>

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
                ></img>
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
                ></img>
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
                ></img>
                Скрыть
              </Button>
            </div>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  )
}

export default CandidateTable
