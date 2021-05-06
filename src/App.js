import './App.css';
import useApplicationData from './Hooks/useApplicationData';
import Logsign from './Components/Logsign';
function App() {

  
  const { file, fileName, saveFile, uploadFile, loginUser } = useApplicationData();

  return (
    <div className="App">
      <Logsign onLogin={loginUser} />
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default App;
