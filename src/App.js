import React, { useState } from 'react'
import FileUploader from './components/FileUploader/FileUploader'
import ImagePreviewer from './components/ImagePreviewer/ImagePreviewer'
import './App.css';

const App = () => {

  const [image, setImage] = useState('');

  return (
    <>
      <header className="App-header">
        <h1 className="title">ScreenGround</h1>
        <p className="subtitle">Create beautiful screenshots easily</p>
      </header>
      <section className="creator">
        {
          !image
            ? <FileUploader setImage={setImage} />
            : <ImagePreviewer image={image}></ImagePreviewer>
        }
      </section>
    </>
  );
}

export default App;

