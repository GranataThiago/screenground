import React from 'react'

const FileUploader = ({setImage}) => {

    const handleUpload = (e) => {
        e.preventDefault();

        let image;

        switch(e.type){
            case 'paste':
                image = e.clipboardData.files[0];
            break;
            default:
                image = e.target.files[0];
        }

        setImage(URL.createObjectURL(image))
    }

    return (
        <form className="file-uploader"  onPaste={handleUpload}>
            <div className="file-upload">
                <p>Paste, Drag or Select your image here...</p>
                <input type="file" onChange={handleUpload} name="image"/>
            </div>
        </form>
    )
}

export default FileUploader