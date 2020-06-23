import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  HomePageContainer,
  MenuPageContainer,
  FoodPageContainer,
  ErrorPageContainer,
  LoginPageContainer,
  OrderPageContainer,
  EmployeeLoginContainer
} from "../containers";
import AuthApi from "../../app/AuthApi"

const RoutesView = () => {

    const Auth = React.useContext(AuthApi);
    console.log(Auth.auth);
    return (
        <Switch>
            {/* <AuthApi.Provider value ="THIS IS A CHECKKKKKK"> */}
            {/**Setting up the landing (home) page route */}
            <Route exact path="/" component={HomePageContainer} />
            {/**Setting up the menu page route */}
            <Route exact path="/menu" component={MenuPageContainer} />
            {/**Setting up the food page route */}
            <Route exact path="/menu/:id" component={FoodPageContainer} />
            {/**Setting up the order page route */}
            <Route exact path="/order" component={OrderPageContainer} />
            {/**Setting up the error page route */}
            <ProtectedLogin exact path="/login" auth={Auth.auth} component={LoginPageContainer} />
            <ProtectedRoute exact path="/employee" auth={Auth.auth} component={EmployeeLoginContainer} />
            {/**Setting up the error page route */}
            {/* <Route component={ErrorPageContainer} /> */}
            {/* </AuthApi.Provider> */}

        </Switch>
    );
};

const ProtectedRoute = ({auth,component:Component,...rest}) =>{
    return(<Route
        {...rest}
        render={ () => auth ? ( <Component/> ) : (<Redirect to ="/login"/> )}
        />
    )
}
const ProtectedLogin = ({auth,component:Component,...rest}) =>{
    return(<Route
        {...rest}
        render={ () => !auth ? ( <Component/> ) : (<Redirect to ="/employee"/> )}
        />
    )
}

export default RoutesView;