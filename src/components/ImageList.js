
const ImageList = ({ images }) => {
    const imagesList = images.map((image, i) => (
        <li key={i}>
            <div>
                <img src={image.url} alt="Cute kitten" width='50%' />
            </div>

            <div>
                <p>{image.caption}</p>
            </div>
        </li>
    ));

    return (
        <ul>

            {imagesList}

        </ul>
    );
}

export default ImageList;