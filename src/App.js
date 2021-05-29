import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import Buyers from './pages/Buyers/Buyers'
import How from './pages/How/How'
import Main from './pages/Main/Main'
import View from './pages/View/View'
import Why from './pages/Why/Why'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Usluga from './Components/Usluga/Usluga';
import Komanda from './Components/Komanda/Komanda';
import Mobilnaya from './Components/Mobilnaya/Mobilnaya';
import Erp from './Components/ERP/Erp';
import Ui from './Components/UI/Ui';
import Instruments from './Components/Instruments/Instruments';
import SwiperCarousel from './Components/Swiper/Swiper'
import SwiperCarousel2 from './Components/Swiper/Swiper-2'
import Delever from './Components/Delever/Delever';
import Smsuz from './Components/Smsuz/Smsuz';
import Kakmi from './Components/Kakmi/Kakmi';
import BeforeFooter from './Components/Before-footer/Before-footer';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Header/>
      <Usluga/>
      <Komanda/>
      <Mobilnaya/>
      <Erp/>
      <Ui/>
      <Instruments/>
      <SwiperCarousel/>
      <SwiperCarousel2/>
      <Delever/>
      <Smsuz/>
      
      <Kakmi/>
      <BeforeFooter/>
      {/* 
      
      
      
      
      
      
      
      
      
      
       */}
    </main>
   </Router>
   
  );
}

export default App;
