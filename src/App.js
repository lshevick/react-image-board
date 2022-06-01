// create an image board where users can add image urls and a description
// 
import { useState, useEffect } from "react";
import ImageForm from "./components/ImageForm";
import ImageList from "./components/ImageList";

const DATA = [
  { url: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-138468381-scaled-e1619028416767.jpg', caption: 'An adorable kitten who looks very pleased' },
  { url: 'https://excitedcats.com/wp-content/uploads/2021/01/cat-cute.png', caption: 'An adorable kitten who looks very happy' },
  { url: 'https://www.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg', caption: 'An adorable kitten' },
]

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(DATA);
  }, []);

  const addImage = (url, caption) => {

    const newImage = {
      url,
      caption,
    }

    setImages([...images, newImage]);
  }


  return (
    <div className="image-board">
      <ImageForm addImage={addImage} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
