import { useState } from "react";

const ImageForm = ({ addImage }) => {
    const [url, setUrl] = useState('');

    const [caption, setCaption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (caption.trim().length === 0 || url.trim().length === 0) {
            return;
        }

        addImage(url, caption);

        setUrl('');
        setCaption('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Your Images Here:</h1>

            <input id='img-url' type="text" autoComplete="off" placeholder='Image Url' name='url' value={url} onChange={(e) => setUrl(e.target.value)} />
            <label htmlFor="img-url"></label>

            <input id='img-caption' type="text" autoComplete="off" placeholder='Image Caption' name='caption' value={caption} onChange={(e) => setCaption(e.target.value)} />
            <label htmlFor="img-caption"></label>

            <button type='submit'>Add Image</button>
        </form>
    );
}

export default ImageForm;