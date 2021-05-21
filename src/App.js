import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import ImageList from './Components/ImageList';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withCookies, Cookies, useCookies } from 'react-cookie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faGithubAlt, faLinkedinIn);
function App() {


  const { saveFile, uploadFile, loginUser, display, signUp, users } = useApplicationData();
  const [cookies] = useCookies(["userID"]);



  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Header cookies={cookies}/>
          <Logsign onLogin={loginUser} onSignUp={signUp} display={display} />
        </Route>
        <Route exacth path="/upload">
          <Header />
          <ImageList display={display} users={users} cookie={cookies} />
          <Uploader save={saveFile} upload={uploadFile} />
        </Route>
          {/* <ProtectedRoutes exact path="/upload" cookies={cookies} component={Uploader} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default withCookies(App);
