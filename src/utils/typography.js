import Typography from "typography"
import theme from "typography-theme-elk-glen"

theme.overrideThemeStyles = () => ({
  "a": {
    color: `white`,
    textShadow: `none`
  },
  "h1": {
    color: `white`
  }
})
const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
