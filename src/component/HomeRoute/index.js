import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import LodingView from '../LodingView'
import FailureView from '../FailureView'

import {
  HomeCard,
  WidthCard,
  Heading,
  CoursesList,
  CourseItem,
  NavigationLink,
  Img,
  CourseName,
} from './styledComponet'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {coursesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCoursesData()
  }

  getCoursesData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/te/courses'

    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      this.setState({
        coursesList: data.courses,
        apiStatus: apiStatusConstants.success,
      })
      console.log(data.courses)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryFunction = () => {
    this.getCoursesData()
  }

  renderSuccesView = () => {
    const {coursesList} = this.state
    return (
      <WidthCard>
        <Heading>Courses</Heading>
        <CoursesList>
          {coursesList.map(each => (
            <CourseItem key={each.id}>
              <NavigationLink as={Link} to={`/courses/${each.id}`}>
                <Img src={each.logo_url} alt={each.name} />
                <CourseName>{each.name}</CourseName>
              </NavigationLink>
            </CourseItem>
          ))}
        </CoursesList>
      </WidthCard>
    )
  }

  renderHomeRouteView = () => {
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
        <HomeCard>{this.renderHomeRouteView()}</HomeCard>
      </>
    )
  }
}
export default HomeRoute
