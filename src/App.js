import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Photos></Photos>
    </div>
  );
}

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
    </div>
  );
}

export default App;
