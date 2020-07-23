import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./App.js"
import ImageView from "./imageView/imageView.js"

//arrow function
const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/image/:id" component={ImageView} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter