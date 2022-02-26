import React from 'react'

const FileUploader = ({setImage}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setImage(URL.createObjectURL(e.target.image.files[0]))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="image"/>
            <button type="submit">Capture It</button>
        </form>
    )
}

export default FileUploader