import React, {useState, useEffect} from 'react'
import './Top2.css'
import data from './../../../data.json'
import wallpaper from './../../../assets/farm4.jpeg'
import Pilgrimage from './../../../assets/pilgrimage.jpeg'
import Tour from './../../../assets/tour.jpeg'
import Culture from './../../../assets/culture.jpeg'
import Cusine from './../../../assets/cusine.jpeg'
import Fauna from './../../../assets/fauna.jpeg'
import Hotels from './../../../assets/hotels.jpeg'
import {Link} from 'react-router-dom'
import{Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Top = ()=>{	
	
		const mytext = data.top.imagetext
		const header = data.top.headerdata

		return(
			<div id="top">

				<header className="header">	
					<img src={wallpaper} id="wallpaper" /><br/>					
					<div className = "menu" >
						<Container>
							<Row >
								<Col sm="7"><div className="navbar">{header[0].title}</div></Col>
								<Col><div className="navbar"><a href="#" >{header[1].home}</a></div></Col>
								<Col><div className="navbar"><a href="#" >{header[2].about}</a></div></Col>
								<Col><div className="navbar"><a href="#" >{header[3].explore}</a></div></Col>
								<Col><div className="navbar"><a href="#" >{header[4].contact}</a></div></Col>
							</Row>
						</Container>
					</div>
				</header>

				<div className="contain">
					<br/>
					<div className = "collection">
						<Container>
							<Row>
								<Col>
									<Link to="/luxury_deals" className = "mybox">
										<img src={Hotels} />
										<div className = "mytext">{mytext.img1}</div>
									</Link>
								</Col>
								<Col>
									<Link to='/' className = "mybox">
										<img src={Tour} />
										<div className = "mytext">{mytext.img2}</div>
									</Link>
								</Col>
								<Col>
									<Link to='/'className = "mybox">
										<img src={Culture} />
										<div className = "mytext">{mytext.img3}</div>
									</Link>
								</Col>
								<Col>
									<Link to='/'className = "mybox">
										<img src={Cusine} />
										<div className = "mytext">{mytext.img4}</div>
									</Link>
								</Col>
								<Col>
									<Link to='/'className = "mybox">
										<img src={Fauna} />
										<div className = "mytext">{mytext.img5}</div>
									</Link>
								</Col>
								<Col>
									<Link to='/'className = "mybox">
										<img src={Pilgrimage} />
										<div className = "mytext">{mytext.img6}</div>
									</Link>
								</Col>
							</Row>
						</Container>
					</div>
				</div>

			


			</div>
		)
	
}

export default Top;