import React from 'react'
import './Top.css'
import data from './../../data.json'
import Pilgrimage from './../../assets/pilgrimage.jpeg'
import Tour from './../../assets/tour.jpeg'
import Culture from './../../assets/culture.jpeg'
import Cusine from './../../assets/cusine.jpeg'
import Fauna from './../../assets/fauna.jpeg'
import Hotels from './../../assets/hotels.jpeg'
import Header from './../../Shared_components/Header.js'
import {Link} from 'react-router-dom'

 
const Top = ()=>{	
	
		const mytext = data.top.imagetext

		return(
			<div id="top">
				
					<Header/>
				

				<div className="contain">
					<br/>
					<div className = "collection">
						<Link to="/luxury_deals" className = "mybox">
							<img src={Hotels}  alt=""/>
							<div className = "mytext">{mytext.img1}</div>
						</Link>
						<Link to='/tour' className = "mybox">
							<img src={Tour}  alt=""/>
							<div className = "mytext">{mytext.img2}</div>
						</Link>
						<Link to='/culture'className = "mybox">
							<img src={Culture}  alt=""/>
							<div className = "mytext">{mytext.img3}</div>
						</Link>
						<Link to='/cusine'className = "mybox">
							<img src={Cusine}  alt=""/>
							<div className = "mytext">{mytext.img4}</div>
						</Link>
						<Link to='/wildlife'className = "mybox">
							<img src={Fauna}  alt=""/>
							<div className = "mytext">{mytext.img5}</div>
						</Link>
						<Link to='/tour'className = "mybox">
							<img src={Pilgrimage} alt="" />
							<div className = "mytext">{mytext.img6}</div>
						</Link>
					</div>
				</div>

			


			</div>
		)
	
}

export default Top;