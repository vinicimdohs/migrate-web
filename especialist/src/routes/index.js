import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Logon from '../pages/Logon';
import Pacient from '../pages/Pacient';
import Hospital from '../pages/Hospital';
import DoctorList from '../pages/DoctorList';
import Page404 from '../pages/Page404';

export default function Routes() {
    return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/logon' component={Logon} />
                <Route exact path='/cliente' component={Pacient} />
                <Route exact path='/doctorlist' component={DoctorList} />
                <Route exact path='/hospital' component={Hospital} />
                <Route path='*' component={Page404} />
            </Switch>
    );
};