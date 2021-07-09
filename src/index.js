
import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './style.css'

import Quiz from './Quiz'
import History from './History'
import Main from './Main'

let Page = () => (
    <Fragment>
        <Header />
        <Content />
        <Navbar />
    </Fragment>

)
let Navbar = () => (
    <div className="navbar">
        <a id="btn-m" className="link" href="/main"> Main page </a>
        <a id="btn-q" className="link" href="/quiz"> Quiz </a>
        <a id="btn-h" className="link" href="/history"> History </a>
    </div>

)
let Header = () => (
    <div className="header">

        <div className="title">Quiz Application</div>

    </div>
)

let Content = () => (
    <div className="content">
        <div id="table"></div>
        <Router>
            <Switch>
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/history" component={History} />
                <Route exact path="/main" component={Main} />
            </Switch>
        </Router>

    </div>

)

    
ReactDom.render(<Page />, document.getElementById('root'))