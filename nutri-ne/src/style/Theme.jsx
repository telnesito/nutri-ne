import { ThemeProvider } from "@emotion/react"
import { theme } from './paleta'

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default Theme