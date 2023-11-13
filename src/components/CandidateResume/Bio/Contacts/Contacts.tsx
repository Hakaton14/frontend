import { Typography } from "@mui/material"
import {
  Behance,
  Email,
  FaceBook,
  Linkedin,
  Phone,
  Telegram,
  VK,
} from "@IconResume"
import { Resume } from "../../MokeData"
import styles from ".././../CandidateResume.module.scss"
import { useAppSelector } from "@ReduxHooks"

const styleSx = {
  contacts: {
    fontfamily: "YS Text",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "left",
    margin: "0 0 14px 0",
    color: "#1A1B22",
  },
  contactsValue: {
    fontFamily: "YS Text",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "left",
    color: "#1A1B22",
  },
}

export const Contacts = () => {
  const { studentProfile } = useAppSelector((state) => state.student)

  return (
    <div className={styles.Contacts}>
      <Typography variant="h2" sx={styleSx.contacts}>
        Контакты:
      </Typography>
      <div className={styles.ContactLink}>
        <a className={styles.Link} href={`tel:${studentProfile?.phone}`}>
          <img
            src={Phone}
            alt="Иконка мобильного телефона"
            className={styles.iconContact}
          />
          <Typography variant="body2" sx={styleSx.contactsValue}>
            {studentProfile?.phone}
          </Typography>
        </a>

        <a className={styles.Link} href={`mailto:${studentProfile?.email}`}>
          <img
            src={Email}
            alt="Иконка электонной почты"
            className={styles.iconContact}
          />
          <Typography variant="body2" sx={styleSx.contactsValue}>
            {studentProfile?.email}
          </Typography>
        </a>

        <div className={styles.SocialBar}>
          {studentProfile?.link_vk && (
            <a
              className={styles.Link}
              href={studentProfile?.link_vk}
              target="_blank"
            >
              <img
                src={VK}
                alt="Иконка вконтакте"
                className={styles.iconContact}
              />
            </a>
          )}

          {studentProfile?.link_tg && (
            <a
              className={styles.Link}
              href={studentProfile?.link_tg}
              target="_blank"
            >
              <img
                src={Telegram}
                alt="Иконка телеграм"
                className={styles.iconContact}
              />
            </a>
          )}

          {studentProfile?.link_fb && (
            <a
              className={styles.Link}
              href={studentProfile?.link_fb}
              target="_blank"
            >
              <img
                src={FaceBook}
                alt="Иконка facebook"
                className={styles.iconContact}
              />
            </a>
          )}

          {studentProfile?.link_be && (
            <a
              className={styles.Link}
              href={studentProfile?.link_be}
              target="_blank"
            >
              <img
                src={Behance}
                alt="Иконка facebook"
                className={styles.iconContact}
              />
            </a>
          )}

          {studentProfile?.link_in && (
            <a
              className={styles.Link}
              href={studentProfile?.link_in}
              target="_blank"
            >
              <img
                src={Linkedin}
                alt="Иконка linkedin"
                className={styles.iconContact}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
