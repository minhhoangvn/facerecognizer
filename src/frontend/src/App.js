import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { AppRoute } from './components/route/AppRoute';
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

const BasicExample = () => (
  <BrowserRouter>
    <div>
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
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </BrowserRouter>
);
// class MainLayout extends React.Component {
//   render() {
//     const { children } = this.props;
//     return (
//       <div className="main-layout">
//         <div className="content">{children}</div>
//       </div>
//     );
//   }
// }
const MainLayout = props => {
  return (
    <div className="main-layout">
      <div className="content">{props.children}</div>
    </div>
  );
};

// <Router>
// <div>
//   <AppRoute component={Home} layout={MainLayout} path="/" />
//   <AppRoute component={About} layout={MainLayout} />
//   <AppRoute component={Topics} layout={MainLayout} />
// </div>
// </Router>
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <div>
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
            </ul>

            <hr />
            <AppRoute
              exact={true}
              component={Home}
              layout={MainLayout}
              path="/"
            />
            <AppRoute
              exact={false}
              component={About}
              layout={MainLayout}
              path="/about"
            />
            <AppRoute
              exact={false}
              component={Topics}
              layout={MainLayout}
              path="/topics"
            />
          </div>
        </BrowserRouter>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Minh Hoang Test This</p>
        <p>Change in new file</p>
      </div>
    );
  }
}

export default App;
