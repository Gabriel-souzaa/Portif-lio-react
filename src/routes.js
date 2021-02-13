import React from 'react'
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contact from './pages/Contact'
import Technologies from './pages/Technologies'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/technologies" component={Technologies}/>
            </Switch>
        </BrowserRouter>
    )
}