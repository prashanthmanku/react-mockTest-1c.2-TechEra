import {Link} from 'react-router-dom'
import {NavHeader, WidthCard, Img} from './styledComponet'

const Header = () => (
  <NavHeader>
    <WidthCard>
      <Link to="/">
        <Img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </WidthCard>
  </NavHeader>
)
export default Header
