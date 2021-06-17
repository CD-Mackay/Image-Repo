import './App.css';
import {React, useState, useEffect } from 'react';
import Helpers from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import Uploader from './Components/Uploader';
import ImageList from './Components/ImageList';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withCookies, Cookies, useCookies } from 'react-cookie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fas, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faGithubAlt, faLinkedinIn, faStar);
function App() {  

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
  const [display, setDisplay] = useState();
  const [users, setUsers] = useState();

  const saveFile = (e) => {
    console.log('saving!')
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  function handleSetCookie(name) {
    setCookie("user", name, { path: '/' });
  };

  function handleRemoveCookie() {
    removeCookie("user");
  };

  // const fetchAndSetImages = async () => {
  //   const displayedImages = await Helpers.getAllImages();
  //   setDisplay(displayedImages);
  // };

  const fetchAndSetUsers = async () => {
    const userList = await Helpers.getAllUsers();
    setUsers(userList);
  };

  useEffect(() => {
    fetchAndSetUsers();
  }, []);



  return (
    <Router>   
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Header cookies={cookies} />
          <Logsign users={users} display={display} />
        </Route>
        <Route exacth path="/upload">
          <Header />
          <ImageList users={users} cookie={cookies} />
          <Uploader save={saveFile} file={file} fileName={fileName} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default withCookies(App);
