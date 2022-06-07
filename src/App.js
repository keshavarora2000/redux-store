import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import store from './store/store';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/cart" element={<Cart />}/>
            </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
