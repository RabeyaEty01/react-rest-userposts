import './App.css';
import Footer from './components/Footer/Footer';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <div className="App">
    <Photos></Photos>
    <Footer></Footer>
    </div>
  );
}



























/* 
function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {

    fetch('http://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setPhotos(data))

  }, []);

  return (
    <div>
      <h2>Traveling around the world Photos!!</h2>
      <h4>Photos Available: {photos.length}</h4>
      {
        photos.map(photo => <Photo title={photo.title} id={photo.id}></Photo>)
      }
    </div>
  );
}

function Photo(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>Id: {props.id}</p>
    </div>
  );
} */
export default App;
