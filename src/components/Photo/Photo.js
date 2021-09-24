
import './Photo.css';

const Photo = (props) => {
    const {title,thumbnailUrl,albumId } = props.photo;
    //console.log(props.photo);

    return (
        <div className="photo bg-secondary">
            <h2 className="text-warning">Title: {title}</h2>
            <img src={thumbnailUrl} alt="" />
            <p>AlbumId: {albumId}</p>
        </div>
    );
};

export default Photo;