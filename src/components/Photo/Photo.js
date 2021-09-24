
import './Photo.css';

const Photo = (props) => {
    const {title,thumbnailUrl,albumId } = props.photo;
    //console.log(props.photo);

    return (
        <div className="photo">
            <h2>Title: {title}</h2>
            <img src={thumbnailUrl} alt="" />
            <p>AlbumId: {albumId}</p>
        </div>
    );
};

export default Photo;