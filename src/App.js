import React, { useState } from 'react'
import FileUploader from './components/FileUploader/FileUploader'
import ImagePreviewer from './components/ImagePreviewer/ImagePreviewer'
import './App.css';

const App = () => {

  const [image, setImage] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <FileUploader setImage={setImage} />
        <ImagePreviewer image={image}></ImagePreviewer>
      </header>
    </div>
  );
}

export default App;

