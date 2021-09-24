
import './Photo.css';

const Photo = (props) => {
    const {title,thumbnailUrl,id } = props.photo;
    //console.log(props.photo);

    return (
        <div className="photo">
            <h2>Title: {title}</h2>
            <img src={thumbnailUrl} alt="" />
            <p>Id: {id}</p>
        </div>
    );
};

export default Photo;