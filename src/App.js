import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import FileUploader from './FileUploader'

function App() {
  const {Storage} = require('@google-cloud/storage');

  //create client
  const storage = new Storage();

  const [file, setFile] = useState(null);
  function handleChange(event){
    setFile(event.target.file[0])
  }

  async function handleSubmit(event){
    
  }

  return (
    <div>
      <form>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
