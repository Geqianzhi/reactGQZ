import React from 'react';
import { Redirect } from "react-router-dom";

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to="/home"/>
        )
    },
    {
        path:'/home',
        component: React.lazy(() => import ('../view/layout')),
        routes:[
            
        ]
    }
]

export default routes;