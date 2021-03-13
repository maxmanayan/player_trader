
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './components/About';
import Articles from './components/Articles';
import Homepage from './components/Homepage';
import Jobs from './components/Jobs';
import Job from './components/Job';
import Team from './components/Team';
import Teams from './components/Teams';
import Navbar from './components/Navbar'
import Players from './components/Players';
import NewPlayerForm from './components/NewPlayerForm';
import EditTeamForm from './components/EditTeamForm';
import EditPlayerForm from './components/EditPlayerForm';
import EditJobForm from './components/EditJobForm';

import NewTeamForm from './components/NewTeamForm';
import NewArticlesForm from './components/NewArticlesForm';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path = '/' component={Homepage} />
      <Route exact path = '/teams' component={Teams} />
      <Route exact path = '/teams/new' component={NewTeamForm} />
      <Route exact path = '/teams/:id/edit' component={EditTeamForm} />
      <Route exact path = '/teams/:id' component={Team} />
      <Route exact path = '/teams/:team_id/players/new' component={NewPlayerForm} />
      <Route exact path = '/teams/:team_id/players/:id/edit' component={EditPlayerForm} />
      <Route exact path = '/about' component={About} />
      <Route exact path = '/jobs' component={Jobs} />
      <Route exact path = '/jobs/:id/edit' component={EditJobForm}/> 
      <Route exact path = '/jobs/:id' component={Jobs}/>
      <Route exact path = '/job/:id' component={Job} />
      <Route exact path = '/articles' component={Articles} />
      <Route exact path = '/articles/new' component={NewArticlesForm} />
      <Route exact path = '/players' component={Players} />
    </Switch>
    </>
  );
}

export default App;
