
import './App.css';
import StartPage from './components/Start/Start'
import NotFoundPage from './components/NotFound/NotFound'
import TrainingPage from './components/training/Training';
import AdminPage from './components/admin/Admin';

import { 
  BrowserRouter, 
  Switch, 
  Route, 
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/training" exact component={TrainingPage}/>
          <Route path="/admin" exact component={AdminPage}/>
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
