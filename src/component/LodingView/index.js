import Loader from 'react-loader-spinner'
import LoaderCard from './styledComponents'

const LoadingView = () => (
  <LoaderCard data-testid="loader">
    <Loader type="ThreeDots" color="  #1e293b" height={50} width={50} />
  </LoaderCard>
)
export default LoadingView
