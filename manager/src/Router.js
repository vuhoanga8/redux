import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import CreateEmployee from './component/CreateEmployee';
import EditEmployee from './component/EditEmployee';

const RouterComponent = () => {
    return (    
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login!" />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.createEmployee()} 
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employee List" 
                        initial
                    />
                    <Scene key="createEmployee" component={CreateEmployee} title="Create Employee" />
                    <Scene key="editEmployee" component={EditEmployee} title="Edit Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
