import {Component} from 'react'
import Header from '../Header'
import LodingView from '../LodingView'
import FailureView from '../FailureView'

import {
  BgCard,
  WidthCard,
  CourseCard,
  Img,
  ContentCard,
  Name,
  Description,
} from './styledComponet'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseDetailsRoute extends Component {
  state = {
    CourseData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`

    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({
        CourseData: data.course_details,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }

    console.log(data)
  }

  retryFunction = () => {
    this.getCourseData()
  }

  renderSuccesView = () => {
    const {CourseData} = this.state
    return (
      <WidthCard>
        <CourseCard>
          <Img src={CourseData.image_url} alt={CourseData.name} />
          <ContentCard>
            <Name>{CourseData.name}</Name>
            <Description>{CourseData.description}</Description>
          </ContentCard>
        </CourseCard>
      </WidthCard>
    )
  }

  renderCourseDetailsRouteView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LodingView />
      case apiStatusConstants.success:
        return this.renderSuccesView()
      case apiStatusConstants.failure:
        return <FailureView retryFunction={this.retryFunction} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <BgCard>{this.renderCourseDetailsRouteView()}</BgCard>
      </>
    )
  }
}

export default CourseDetailsRoute
