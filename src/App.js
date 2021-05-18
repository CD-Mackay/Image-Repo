import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import ImageList from './Components/ImageList'
import ProtectedRoutes from './Components/ProtectedRoutes';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withCookies, Cookies, useCookies } from 'react-cookie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faGithubAlt, faLinkedinIn);
function App() {


  const { saveFile, uploadFile, loginUser, display } = useApplicationData();
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);



  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Header />
          <Logsign onLogin={loginUser} display={display} />
        </Route>
        <Route exacth path="/upload">
          <Header />
          <Uploader save={saveFile} upload={uploadFile} />
          <ImageList display={display} cookie={cookies} />
        </Route>
          {/* <ProtectedRoutes exact path="/upload" cookies={cookies} component={Uploader} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default withCookies(App);
