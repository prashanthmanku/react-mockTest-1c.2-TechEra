import {NotFoundCard, WidthCard, Img, Heading, Description} from './styled'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <NotFoundCard>
      <WidthCard>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
        <Heading>Page Not Found</Heading>
        <Description>
          We are sorry, the page you requested could not be found
        </Description>
      </WidthCard>
    </NotFoundCard>
  </>
)

export default NotFound
