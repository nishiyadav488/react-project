import React from 'react'
import Admin from './Components/Admin_Pages/Components/Homepage/Welcome.js'
import User from './Components/User_Pages/Components/Main_page/Main.js'
import {BrowserRouter,Route} from 'react-router-dom'
import Luxury from './Components/User_Pages/Components/Luxury_deals/Luxury.js'
import Camp1 from './Components/User_Pages/Components/Detail_pages/Camp1.js'
import Camp2 from './Components/User_Pages/Components/Detail_pages/Camp2.js'
import Camp3 from './Components/User_Pages/Components/Detail_pages/Camp3.js'
import Hotel1 from './Components/User_Pages/Components/Detail_pages/Hotel1.js'
import Hotel2 from './Components/User_Pages/Components/Detail_pages/Hotel2.js'
import Hotel3 from './Components/User_Pages/Components/Detail_pages/Hotel3.js'
import Cusine1 from './Components/User_Pages/Components/Detail_pages/Cusine1.js'
import Cusine2 from './Components/User_Pages/Components/Detail_pages/Cusine2.js'
import Cusine3 from './Components/User_Pages/Components/Detail_pages/Cusine3.js'
import Lake from './Components/User_Pages/Components/Detail_pages/Lake.js'
import Contact from './Components/User_Pages/Components/Contact.js'
import About from './Components/User_Pages/Components/About.js'
import Tour from './Components/User_Pages/Components/Luxury_deals/Tour.js'
import Culture from './Components/User_Pages/Components/Luxury_deals/Culture.js'
import Cusine from './Components/User_Pages/Components/Luxury_deals/Cusine.js'
import Wildlife from './Components/User_Pages/Components/Luxury_deals/Wildlife.js'
import Bhk from './Components/User_Pages/Components/tolet/Bhk.js'
import Flats from './Components/User_Pages/Components/third_page/Flats.js'

import './App.css'
function App(){
  return (
    <div className="App">
	   <BrowserRouter>
	  
	      <Route exact path='/' component={User}/>
	      <Route exact path='/Admin' component={Admin}/>
	      <Route exact path ='/luxury_deals' component={Luxury}/>
	      <Route exact path = '/Camp1' component={Camp1}/>
	      <Route exact path = '/Camp2' component={Camp2}/>
	      <Route exact path = '/Camp3' component={Camp3}/>
	      <Route exact path = '/Hotel1' component={Hotel1}/>
	      <Route exact path = '/Hotel2' component={Hotel2}/>
	      <Route exact path = '/Hotel3' component={Hotel3}/>
	      <Route exact path = '/Cusine1' component={Cusine1}/>
	      <Route exact path = '/Cusine2' component={Cusine2}/>
	      <Route exact path = '/Cusine3' component={Cusine3}/>
	      <Route exact path = '/lake' component={Lake}/>
	       <Route exact path = '/about' component={About}/>
	     <Route exact path = '/contact' component={Contact}/>
	     <Route exact path = '/tour' component={Tour}/>
	     <Route exact path = '/wildlife' component={Wildlife}/>
	     <Route exact path = '/cusine' component={Cusine}/>
	     <Route exact path = '/culture' component={Culture}/>
	     <Route exact path = '/bhk' component={Bhk}/>
	      <Route exact path = '/flats' component={Flats}/>
	     
	   </BrowserRouter>
    </div>
  );
}

export default App;
