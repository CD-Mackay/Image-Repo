import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import LogoutButton from './Components/LogOutButton';
import ProtectedRoutes from './Components/ProtectedRoutes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withCookies, Cookies, useCookies } from 'react-cookie';

function App() {


  const { saveFile, uploadFile, loginUser, } = useApplicationData();
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);



  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Logsign onLogin={loginUser}  />
        </Route>
          <ProtectedRoutes exact path="/upload" cookies={cookies} component={Uploader} />
          {/* <Uploader saveFile={saveFile} onUpload={uploadFile} /> */}
         
      </Switch>
    </div>
    </Router>
  );
}

export default withCookies(App);
