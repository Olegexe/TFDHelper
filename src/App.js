import logo from './logo.svg';
import './App.scss';
import './assets/scss/index.scss'
import ItemBrowser from './components/ItemBrowser/ItemBrowser';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ItemBrowser />
      </div>
    </div>
  );
}

export default App;
