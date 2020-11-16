import React,{Suspense} from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Routes from '../../router'
export default function BasicRoute() {
    return (
        <BrowserRouter>
                <Switch>
                  <Suspense fallback={<div>loading</div>}>
                      <Route exact path="/" component={Routes[0].component}/>
                  </Suspense>
                </Switch>
        </BrowserRouter>
    )
}
