import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getProduct } from './actions/productAction';
import "./assets/css/custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Home/Header"
import Navbar from './components/Home/Navbar';
import Banner from './components/Home/Banner';
import Arrival from './components/Home/Arrival';
import Collection from './components/Home/Collection';
import SeasonalProduct from './components/Home/SeasonalProduct';
import BestSeller from './components/Home/BestSeller';
import Offer from './components/Home/Offer';
import PopularStyle from './components/Home/PopularStyle';
import ShopOccassion from './components/Home/ShopOccassion';
import SaleOffer from './components/Home/SaleOffer';
import Feature from './components/Home/Feature';
import Newsletter from './components/Home/Newsletter';
import Footer from './components/Home/Footer';


function App() {

  //Testing Redux  
  const dispatch = useDispatch();
  const selector = useSelector(state => state)
  console.log(selector)

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <Collection />
      <Arrival />
      <SeasonalProduct />
      <PopularStyle />
      <BestSeller />
      <Offer />
      <ShopOccassion />
      <SaleOffer />
      <Feature />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
