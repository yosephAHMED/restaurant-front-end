import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  MenuPageContainer,
  FoodPageContainer,
  ErrorPageContainer,
  OrderPageContainer,
} from "../containers";

const RoutesView = () => {
    return (
        <Switch>
            {/**Setting up the landing (home) page route */}
            <Route exact path="/" component={HomePageContainer} />
            {/**Setting up the menu page route */}
            <Route exact path="/menu" component={MenuPageContainer} />
            {/**Setting up the food page route */}
            <Route exact path="/menu/:id" component={FoodPageContainer} />
            {/**Setting up the order page route */}
            <Route exact path="/order" component={OrderPageContainer} />
            {/**Setting up the error page route */}
            <Route component={ErrorPageContainer} />
        </Switch>
    );
};

export default RoutesView;