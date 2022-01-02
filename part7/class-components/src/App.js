import { Switch , Link , Route} from 'react-router-dom'
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/class">Class Component</Link>
        </li>
        <li>
          <Link to="/function">Functional Component</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/class">
          <ClassComponent/>
        </Route>
        <Route path="/function">
          <FunctionalComponent/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
