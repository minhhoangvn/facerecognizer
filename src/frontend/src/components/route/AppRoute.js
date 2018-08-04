import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const Routers = props => {
  const appRoute = props.appRoute;
  const navigationComponent = props.navigationComponent();
  const appRouteElements = appRoute.map(function(item, index) {
    return (
      <AppRoute
        key={index}
        exact={item.isExact}
        component={item.component}
        layout={item.layout}
        path={item.path}
      />
    );
  });
  return (
    <BrowserRouter>
      <div>
        {navigationComponent}
        <hr />
        {appRouteElements}
      </div>
    </BrowserRouter>
  );
};

export { AppRoute, Routers };
