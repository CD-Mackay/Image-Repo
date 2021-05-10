import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState } from 'react';



function App() {


  const { file, fileName, saveFile, uploadFile, loginUser, } = useApplicationData();

  const [loggedIn, setLoggedin] = useState(Cookies.get('session'));
  const cookie = Cookies.get('session');
  const loggedinCookie = Cookies.get('userID');

  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Logsign onLogin={loginUser} cookie={cookie} />
        </Route>
        <Route exact path="/upload">
          <Uploader saveFile={saveFile} onUpload={uploadFile} altcookie={loggedinCookie} cookie={cookie} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
