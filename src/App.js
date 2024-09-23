import './App.css';
import Carousel from './components/Carousel';

const App = () => {
  const imageUrls = [
    'https://via.placeholder.com/600x300/ff7f7f/333333?text=Slide+1',
    'https://via.placeholder.com/600x300/ffbf7f/333333?text=Slide+2',
    'https://via.placeholder.com/600x300/7fbfff/333333?text=Slide+3',
    'https://via.placeholder.com/600x300/bf7fff/333333?text=Slide+4',
  ];

  return (
    <div className="App">
      <h1>Dynamic Carousel in React</h1>
      <Carousel images={imageUrls} autoSlide={true} interval={3000} />
    </div>
  );
};

export default App;
