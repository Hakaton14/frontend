import { useEffect } from "react"

const useChangeTitle = (newTitle: string) => {
  useEffect(() => {
    document.title = newTitle
    return () => {
      document.title = "Карьерный трекер HR"
    }
  }, [newTitle])
}

export default useChangeTitle
