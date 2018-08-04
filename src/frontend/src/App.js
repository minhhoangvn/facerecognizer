import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { AppRoute, Routers } from './components/route/AppRoute';
import { RegistrationComponent as Register } from './containers/register/Register';
import { HeaderComponent } from './containers/header/Header';
import { FooterComponent } from './containers/footer/Footer';
import { Layout } from 'antd';
const { Content } = Layout;
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const MainLayout = props => {
  return (
    <div className="main-layout">
      <div className="content">{props.children}</div>
    </div>
  );
};

const NavigationComponent = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
};
const RouterElementList = [
  { isExact: true, component: Home, layout: MainLayout, path: '/' },
  { isExact: false, component: About, layout: MainLayout, path: '/about' },
  { isExact: false, component: Topics, layout: MainLayout, path: '/topics' },
  { isExact: false, component: Register, layout: MainLayout, path: '/register' }
];

class App extends Component {
  render() {
    return (
      <Layout>
        <HeaderComponent menu={NavigationComponent} />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routers
            appRoute={RouterElementList}
            navigationComponent={NavigationComponent}
          />
        </Content>
        <FooterComponent />
      </Layout>
    );
  }
}

export default App;
