import React, {useState, Component} from 'react';
import './App.scss';
import Requests from './components/Requests'
import Request from './components/Request'
import Home from './components/Home'
import NewRequest from './components/NewRequest'
import {useFetch} from './hooks'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  useParams
} from "react-router-dom";

const apiURL = 'http://localhost:3030'

const Appointment = () => {
  const {id, ts} = useParams()
  let [requests, loading] = useFetch(
    `${apiURL}/${id}.json`
  );

  if(loading) return <div>loading...</div>

  const active = requests?.requests.find(d => d.createdAt == ts)
  return (
    <React.Fragment>
      <Requests active={active} data={requests} />
      {active && <Request data={active} />}
    </React.Fragment>
  )
}

const RequestList = ({activeIndex}) => {
  const {id, ts} = useParams()
  let [requests, loading] = useFetch(
    `${apiURL}/${id}.json`
  );
  if(loading) return <div>loading rn</div>
  return (
    <Requests active={requests.requests[0]} data={requests} />
  )
}

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/:id/new">
          <RequestList />
          <NewRequest appointmentURI={apiURL} />
        </Route>
        <Route path="/:id/:ts">
          <Appointment />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App;
