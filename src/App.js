import './App.css';
import Home from './page/Home';
import Favourite from './page/Favourite';
import Details from './page/Details';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/favs" component={Favourite}/>
      <Route path="/detail/:id" component={Details}/>
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
