import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  
  const { file, fileName, saveFile, uploadFile, loginUser } = useApplicationData();

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/">
          <Logsign onLogin={loginUser} />
        </Route>
        <Route path="/upload">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
