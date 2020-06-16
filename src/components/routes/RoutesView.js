import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  MenuPageContainer,
} from "../containers";

const RoutesView = () => {
    return (
        <Switch>
            {/**Setting up the landing (home) page route */}
            <Route exact path="/" component={HomePageContainer} />
            {/**Setting up the menu page route */}
            <Route exact path="/menu" component={MenuPageContainer} />
        </Switch>
    );
};

export default RoutesView;