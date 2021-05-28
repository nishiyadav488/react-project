import React, {useState, useEffect} from 'react'
import './Top.css'
import data from './../../data.json'
import wallpaper from './../../assets/wall5.png'
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
		const header = data.top.headerdata

		return(
			<div id="top">
				
					<Header/>
				

				<div className="contain">
					<br/>
					<div className = "collection">
						<Link to="/luxury_deals" className = "mybox">
							<img src={Hotels} />
							<div className = "mytext">{mytext.img1}</div>
						</Link>
						<Link to='/tour' className = "mybox">
							<img src={Tour} />
							<div className = "mytext">{mytext.img2}</div>
						</Link>
						<Link to='/culture'className = "mybox">
							<img src={Culture} />
							<div className = "mytext">{mytext.img3}</div>
						</Link>
						<Link to='/cusine'className = "mybox">
							<img src={Cusine} />
							<div className = "mytext">{mytext.img4}</div>
						</Link>
						<Link to='/wildlife'className = "mybox">
							<img src={Fauna} />
							<div className = "mytext">{mytext.img5}</div>
						</Link>
						<Link to='/tour'className = "mybox">
							<img src={Pilgrimage} />
							<div className = "mytext">{mytext.img6}</div>
						</Link>
					</div>
				</div>

			


			</div>
		)
	
}

export default Top;