import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const { file, fileName, saveFile, uploadFile, loginUser, loggedIn, cookie } = useApplicationData();

  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Logsign onLogin={loginUser} cookie={cookie} />
        </Route>
        <Route exact path="/upload">
          <Uploader saveFile={saveFile} onUpload={uploadFile} cookie={cookie} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
