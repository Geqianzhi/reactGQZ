import React,{Suspense} from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Layout from './index'
export default function BasicRoute() {
    return (
        <BrowserRouter>
                <Switch>
                  <Suspense fallback={<div>loading</div>}>
                      <Route exact path="/" component={Layout}/>
                  </Suspense>
                </Switch>
        </BrowserRouter>
    )
}
