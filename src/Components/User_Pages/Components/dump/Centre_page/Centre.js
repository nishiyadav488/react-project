import React,{Component} from 'react'
import './Centre.css'
import data from './../../data.json'

const Centre = () => {

		const heading = data.centre.heading
		const quote = data.centre.quote
		const paragraph = data.centre.content
		const table = data.centre.table


		return(
			<div id="centre">
			<div id="cc">
				<div id="text">
					<br/>
					<div className ='heading'>{heading}</div><br/><br/>
					<div className ='heading2'>{quote}</div><br/><br/>
					<div className ='para'>{paragraph}</div><br/>
				</div>
				<div id="table">
					
						<div>{table[0].text1}</div>
						<div>{table[0].value1}</div>
						<div>{table[1].text2}</div>
						<div>{table[1].value2}</div>
						<div>{table[2].text3}</div>
						<div>{table[2].value3}</div>
						<div>{table[3].text4}</div>
						<div>{table[3].value4}</div>
						<div>{table[4].text5}</div>
						<div>{table[4].value5}</div>
						<div>{table[5].text6}</div>
						<div>{table[5].value6}</div>
						<div>{table[6].text7}</div>
						<div><a href="mp.gov.in">{table[6].value7}</a></div>
						<br/>
						<br/>	

				</div></div>
			</div>
		);
	
}

export default Centre;