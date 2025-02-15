import './style/App.css';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Test from './Test'
import DetailPage from './DetailPage';
import Admin from './Admin';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/test">
            <Test />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/detail/:id">
            <DetailPage />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route exact path="/">
            <Home /> 
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
