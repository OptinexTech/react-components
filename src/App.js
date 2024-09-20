import './App.css';
import { faq } from './data/faq';
import Accordion from './components/Accordion';

const App = () => {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <Accordion items={faq} />
    </div>
  );
};

export default App;
