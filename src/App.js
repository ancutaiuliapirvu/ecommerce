import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails'
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';


function App() {

  const favorites = 4;

  return (
    <div className="App">
      {/* Numarul de favorite vrem sa ajunga in header */}
      {/* nu putem comunica intre componente siblings direct*/}
      {/* trebuie sa ne folosim de un element parinte comun */}
      {/* parintele va fi App */}
      {/* mecanism de lifting state up ca sa trimitem datele de la Favorites catre App*/}
      {/* primim datele in app - stim cate stiri avem la favorites */}
      {/* pasam mai departe unde vrem sa le afisam - in header, care e copil al lui App */}
      {/* trimitem date acum parinte-copil prin props */}
      <Header favoritesNumber={favorites} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/details/' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<PageNotFound/>}/>

        {/* <Route path='/favorites' element={<Favorites/>}/> */}
          {/* stirile le pastram intr-un array din componenta de favorites */}
          {/* pt notificare ne va interesa doar array.length */}
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
