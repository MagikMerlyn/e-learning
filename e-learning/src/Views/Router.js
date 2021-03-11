import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import mainview from './student_view/mainview';
import Login from './userManagementViews/Login';
import Register from './userManagementViews/Register'

 function Router() {
    return (

        <BrowserRouter>
                <Switch>
                    <Route path='/' component={Login} exact />
                    <Route path='/main' component={mainview} exact />
                    <Route path='/register' component={Register} />
                </Switch>
        </BrowserRouter>    
    )
}
export default Router;
