import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import LogoutButton from './Components/LogOutButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LogoutButton from './Components/LogOutButton';
import { useCookies } from 'react-cookie';



function App() {


  const { saveFile, uploadFile, loginUser, } = useApplicationData();

  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);

  function handleSetCookie(name) {
    setCookie("user", name, { path: '/' });
  };



  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Logsign onLogin={loginUser} setCookie={handleSetCookie} />
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
