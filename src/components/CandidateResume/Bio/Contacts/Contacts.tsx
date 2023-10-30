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
  return (
    <div className={styles.Contacts}>
      <Typography variant="h2" sx={styleSx.contacts}>
        Контакты:
      </Typography>
      <div className={styles.ContactLink}>
        <a className={styles.Link} href={`tel:${Resume.contacts.phone}`}>
          <img
            src={Phone}
            alt="Иконка мобильного телефона"
            className={styles.iconContact}
          />
          <Typography variant="body2" sx={styleSx.contactsValue}>
            {Resume.contacts.phone}
          </Typography>
        </a>

        <a className={styles.Link} href={`mailto:${Resume.contacts.mail}`}>
          <img
            src={Email}
            alt="Иконка электонной почты"
            className={styles.iconContact}
          />
          <Typography variant="body2" sx={styleSx.contactsValue}>
            {Resume.contacts.mail}
          </Typography>
        </a>

        <div className={styles.SocialBar}>
          {Resume.contacts.vk && (
            <a
              className={styles.Link}
              href={Resume.contacts.vk}
              target="_blank"
            >
              <img
                src={VK}
                alt="Иконка вконтакте"
                className={styles.iconContact}
              />
            </a>
          )}

          {Resume.contacts.telegram && (
            <a
              className={styles.Link}
              href={Resume.contacts.telegram}
              target="_blank"
            >
              <img
                src={Telegram}
                alt="Иконка телеграм"
                className={styles.iconContact}
              />
            </a>
          )}

          {Resume.contacts.facebook && (
            <a
              className={styles.Link}
              href={Resume.contacts.facebook}
              target="_blank"
            >
              <img
                src={FaceBook}
                alt="Иконка facebook"
                className={styles.iconContact}
              />
            </a>
          )}

          {Resume.contacts.behance && (
            <a
              className={styles.Link}
              href={Resume.contacts.behance}
              target="_blank"
            >
              <img
                src={Behance}
                alt="Иконка facebook"
                className={styles.iconContact}
              />
            </a>
          )}

          {Resume.contacts.linkedin && (
            <a
              className={styles.Link}
              href={Resume.contacts.linkedin}
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
