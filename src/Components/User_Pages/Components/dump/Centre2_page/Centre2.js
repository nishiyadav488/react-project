import React from 'react'
import './Centre2.css' 
import khajurao from './../../assets/khujrao.jpg'
import lake from './../../assets/Bhopalake.jpg'
import gujari from './../../assets/gijari.jpg'
import sanchi from './../../assets/sanchi.jpg'
import dhara from './../../assets/dhoodhdhara.JPG'
import Fauna from './../../assets/fauna.jpeg'
import Card from './../../Shared_Components/Card.js'
import data from './../../data.json'

const Centre2 = () => {

	const image1 = data.centre2.img1
	const image2 = data.centre2.img2
	const image3 = data.centre2.img3
	const image4 = data.centre2.img4
	const image5 = data.centre2.img5
	const image6 = data.centre2.img6

	return (
		<div>
			<div className="all_card">
				<div className="display1">
					<Card head={image1.title} img={khajurao} text={image1.about}/>
					<Card head={image2.title} img={sanchi} text={image2.about}/>
					<Card head={image3.title} img={lake} text={image3.about}/>
				</div>
				<div className="display1">
					<Card head={image4.title} img={Fauna} text={image4.about}/>
					<Card head={image5.title} img={gujari} text={image5.about}/>
					<Card head={image6.title} img={dhara} text={image6.about}/>
				</div>

			</div>
			
		</div>
	)
}

export default Centre2;