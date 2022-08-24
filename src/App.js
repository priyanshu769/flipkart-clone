import './App.css';
import { ProductsPage } from './Pages'

function App() {
  return (
    <div className="App">
    <nav className='navbar'>
      <img className='logoImg' alt='flipkart logo' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'></img>
      <span> Mock</span>
    </nav>
      <ProductsPage />
    </div>
  );
}

export default App;
