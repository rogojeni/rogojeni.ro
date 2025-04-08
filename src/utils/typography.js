import Typography from "typography"
import theme from "typography-theme-elk-glen"

theme.overrideThemeStyles = () => ({
  "a": {
    color: `#2C3E2E`,
    textShadow: `none`
  },
  "h1": {
    color: `#2C3E2E`
  }
})

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
