import React,{useState} from 'react'
import './Bhk.css'
import Header from './../../Shared_components/Header.js'
import Footer from './../Footer/Footer.js'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'
import {Link} from 'react-router-dom'

const Bhk = () => {
    const [c_count,setc_count]=useState(false)
	const [b_count,setb_count]=useState(false)
    const [r_count,setr_count]=useState(false)

	const onclickbutton = (id) =>{
        if(id==1){
            setb_count(!b_count)
             setr_count(false)
             setc_count(false)
        }
        else if(id==2){
            setr_count(!r_count)
             setb_count(false)
             setc_count(false)
        }
        else if(id==3){
            setc_count(!c_count)
             setb_count(false)
             setr_count(false)
        
        }
    }
   
    const city_options = [
      {label : 'Banglore', value : 1},
      {label : 'Mumbai', value : 2},
      {label : 'Delhi', value : 3},
      {label : 'Vizag', value : 4},
      {label : 'Raipur', value : 5},
      {label : 'Pune', value : 6},
      {label : 'Hyderabad', value : 7},
      {label : 'Chennai', value : 8},

    ];

     const c_options = [
      {label : 'Office work', value : 1},
      {label : 'Co-Working', value : 2},
      {label : 'Restaurant/Cafe', value : 3},
      {label : 'Shop', value : 4},
      {label : 'Showroom', value : 5},
      {label : 'Other business', value : 6},

    ];
     const r_options = [
      {label : '1 BHK', value : 1},
      {label : '2 BHK', value : 2},
      {label : '3 BHK', value : 3},
      {label : '4 BHK', value : 4},
      {label : '4+ BHK', value : 5},

    ];
     const b_options = [
      {label : '1 BHK', value : 1},
      {label : '2 BHK', value : 2},
      {label : '3 BHK', value : 3},
      {label : '4 BHK', value : 4},
      {label : '4+ BHK', value : 5},

    ];
    

  return(
    <div>
        <Header/>
        <div id= "whole-to-let">
        <div className="self_button">
            <div className="button_div" id={b_count &&"button1"}><button onClick={event => onclickbutton(1)}>Buy</button></div>
            <div className="button_div" id={r_count &&"button1"}><button onClick={event =>onclickbutton(2)}>Rent</button></div>
            <div className="button_div" id={c_count &&"button1"}><button onClick={event =>onclickbutton(3)}>Commercial</button></div>
        </div>
        <div id= "to-let-box">
        <div className="city_bhk">
            <div><span>
                <ReactMultiSelectCheckboxes options={city_options} placeholderButtonLabel='City'/>
            </span> </div>
           
            <div id="search-btn"><Link to="/flats"> <button type="button">Search</button></Link></div>
        </div>
   
        <div className={c_count ? "show_commercial" : "hide_commercial"}>
            <div id="Rent">
            <input type="radio" value="Rent" name="radio1"/>
            <span>Rent</span>
             </div>
             <div id="buy-c">
            <input  type="radio" value="buy" name="radio1"/>
            <span>Buy</span>
             </div>
           
             <div><span>
                <ReactMultiSelectCheckboxes options={c_options} placeholderButtonLabel='Property type'/>
            </span> </div>

        </div>
        <div className={r_count ? "show_rent" : "hide_rent"}>
             <div id="full_house">
            <input type="radio" value="full_house" name="radio2"/>
            <span>Full House</span>
             </div>
             <div id="pg">
            <input  type="radio" value="pg" name="radio2"/> 
            <span>PG/Hotels</span>
            </div>
             <div id="mates">
            <input  type="radio" value="mates" name="radio2"/>
            <span>Flatmates</span>
             </div>
         
             <div><span>
                <ReactMultiSelectCheckboxes options={r_options} placeholderButtonLabel='BHK type'/>
            </span> </div>
        </div>
        <div className={b_count ? "show_buy" : "hide_buy"}>
          
              <div id="buy11"><span>
                <ReactMultiSelectCheckboxes options={b_options} placeholderButtonLabel='BHK type'/>
            </span> </div>
           
             <div id="buy22"> <span>
                  <select id="cars" name="cars">
                  <option value="volvo">Property status</option>
                    <option value="volvo">Under Construction</option>
                    <option value="saab">Ready to move</option>
                  </select>
            </span> </div>

        </div></div>
        </div>
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         <Footer/>

    </div>
  	)
}

export default Bhk;
