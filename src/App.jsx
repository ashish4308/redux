
import './App.css';
import Idk from './compo/Idk';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Idk />
      </div>
    </Provider>
  );
}

export default App;
