import './App.css';
import useApplicationData from './Hooks/useApplicationData';

function App() {

  
  const { file, fileName, saveFile, uploadFile } = useApplicationData();

  return (
    <div className="App">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default App;
