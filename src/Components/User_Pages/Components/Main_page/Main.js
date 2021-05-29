import React from 'react'
import Top from './../Top_page/Top.js'
import Center from './../Center_pages/Center.js'
import Deals from './../dealoff_page/Deals.js'
import TopRated from './../Top_Rated_pages/TopRated.js'
import AwayCrowd from './../Top_Rated_pages/AwayCrowd.js'
import Footer from './../Footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'

const Main = () => {
	return(
			<div id="main">
				
				
					
						<Top />
					
						<Center className="bordr"/>
					
						<Deals className="bordr"/>
					
						<TopRated className="bordr"/>
					
						<AwayCrowd className="bordr"/>
						
					
						<Footer className="bordr"/>
					
				
					
			</div>
		)
}

export default Main;


/*
	<Container>
		<Row>
			<Top/>
		</Row>
		<Row>
			<Center/>
		</Row>
		<Row>
			<Deals/>
		</Row>
		<Row>
			<TopRated/>
		</Row>
		<Row>
			<AwayCrowd/>
		</Row>
		<Row>
			<Footer/>
		</Row>
	</Container>
*/

/*						<Top/>
					
						<Center/>
					
						<Deals/>
					
						<TopRated/>
					
						<AwayCrowd/>
					
						<Footer/>


						*/