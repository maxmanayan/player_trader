
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './components/About';
import Articles from './components/Articles';
import Homepage from './components/Homepage';
import Jobs from './components/Jobs';
import Team from './components/Team';
import Teams from './components/Teams';
import Navbar from './components/Navbar'
import Players from './components/Players';
import NewPlayerForm from './components/NewPlayerForm';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path = '/' component={Homepage} />
      <Route exact path = '/teams' component={Teams} />
      <Route exact path = '/teams/:id' component={Team} />
      <Route exact path = '/teams/:team_id/players/new' component={NewPlayerForm} />
      <Route exact path = '/about' component={About} />
      <Route exact path = '/jobs' component={Jobs} />
      <Route exact path = '/articles' component={Articles} />
      <Route exact path = '/players' component={Players} />
    </Switch>
    </>
  );
}

export default App;
