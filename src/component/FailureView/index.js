import {FailureCard, Img, Heading, Description, RetryButton} from './styled'

const FailureView = props => {
  const {retryFunction} = props
  const onClickRetry = () => {
    retryFunction()
  }
  return (
    <FailureCard>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Description>
        We cannot seem to find the page you are looking for.
      </Description>
      <RetryButton type="button" onClick={onClickRetry}>
        Retry
      </RetryButton>
    </FailureCard>
  )
}
export default FailureView
