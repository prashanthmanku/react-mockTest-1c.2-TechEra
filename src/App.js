import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import CourseDetailsRoute from './component/CourseDetailsRoute'
import HomeRoute from './component/HomeRoute'
import NotFound from './component/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/courses/:id" component={CourseDetailsRoute} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
