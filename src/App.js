
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getProduct } from './actions/productAction';
import Header from './components/Home/Header';
import "./assets/css/custom.css";
import { BrowserRouter, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Route path="/" component={Header}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
