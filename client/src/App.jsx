import './App.css';
import {
  BrowserRouter, //tells the application we can enable routing
  Switch, //allows us to indicate which routes we have and which components should show in specific routes
  Route, //allows us to define the route paths and which components belong to specific route paths
  Link  //just like an a href but it wont reload the page. You can format this as a button using bootstrap
} from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Contributors from './components/Contributors';
import NewContributor from './components/NewContributor';
import AllPets from './components/AllPets'
import PetDetails from './components/PetDetails';

//import Component from path

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          <br/><br/>

          <Switch>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/contributors">
            <Contributors></Contributors>
          </Route>

          <Route exact path="/contributors/new">
            <NewContributor></NewContributor>
          </Route>

          <Route exact path="/pets">
            <AllPets></AllPets>
          </Route>

          <Route exact path="/pet/details/:id">
            <PetDetails/>
          </Route>

        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;
