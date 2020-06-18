import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.overrideThemeStyles = () => ({
  'a': {
    color: `white`,
  },
  'h1': {
    color: `white`
  }
})
const typography = new Typography(kirkhamTheme)

export const { scale, rhythm, options } = typography
export default typography
