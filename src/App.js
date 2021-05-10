import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import LogoutButton from './Components/LogOutButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {


  const { saveFile, uploadFile, loginUser, } = useApplicationData();



  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Logsign onLogin={loginUser}  />
        </Route>
        <Route exact path="/upload">
          <Uploader saveFile={saveFile} onUpload={uploadFile} />
          <LogoutButton  />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
