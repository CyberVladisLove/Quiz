
import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './style.css'

import Quiz from './Quiz'
import History from './History'

let Page = () => (
    <Fragment>
        <Header />
        <Content />
        <Navbar />
    </Fragment>

)
let Navbar = () => (
    <div className="navbar">
        <a className="link" href="/quiz"> Quiz </a>
        <a className="link" href="/history"> History </a>
        
    </div>

)
let Header = () => (
    <div className="header">
        Header
    </div>
)

let Content = () => (
    <div className="content">
        <Router>
            <Switch>
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/history" component={History} />
            </Switch>
        </Router>
    </div>
    
)


ReactDom.render(<Page />, document.getElementById('root'))