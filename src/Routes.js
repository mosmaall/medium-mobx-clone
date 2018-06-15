import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { inject, observer } from 'mobx-react'

import NavBar from './components/NavBar'

const LOADABLE_CONFIG = { loading: () => null, delay: 2000 }

//Dynamic loading
const Home = {
  home: Loadable({
    ...LOADABLE_CONFIG,
    loader: () =>
      import(/* webpackChunkName: "route.HomePage.HomePage" */ './pages/HomePage'),
  }),
}

const Register = {
  register: Loadable({
    ...LOADABLE_CONFIG,
    loader: () =>
      import(/* webpackChunkName: "route.RegisterPage.RegisterPage" */ './pages/RegisterPage'),
  }),
}

const Routes = () => {
  return (
    <div>
      <Router basename={process.env.REACT_APP_BASE_URL}>
        <div>
          <NavBar />
          <Route exact path="/" component={Home.home} />
          <Route path="/register" component={Register.register} />
        </div>
      </Router>
    </div>
  )
}

export default Routes
