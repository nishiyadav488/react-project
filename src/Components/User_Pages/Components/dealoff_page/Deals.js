import React from 'react'
import Off from './../../assets/off.jpeg'
import Deal from './../../assets/new_maing.jpeg'
import './Deals.css'
import deal1 from './../../assets/new_grid1.jpeg'
import deal2 from './../../assets/new_grid2.jpeg'
import deal3 from './../../assets/new_grid3.jpeg'
import deal4 from './../../assets/new_grid4.jpeg'
import deal5 from './../../assets/new_grid5.jpeg'
import deal6 from './../../assets/new_grid6.jpeg'
import deal7 from './../../assets/new_grid7.jpeg'
import deal8 from './../../assets/new_grid8.jpg'
import deal9 from './../../assets/new_grid99.jpeg'
import {Link} from 'react-router-dom'
import{Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Deals = () => {
  return(
  
    <div id="deall">
      <div className="imageflex00">
        <div id="imageflex100">
          <img src ={Deal}/>
          <div id="flextext00">It's time for new Adventure</div>
        </div>
        <div id="imageflex200">
          <Container>
            <Row sm="4">
              <Col sm="4" xs="auto">
                <Link to ='/Camp1' id="city100" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal1}/>
                  <div id="citytext100" className="citytext00">LAKESIDE CAMP</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Hotel1' id="city200" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal2}/>
                  <div id="citytext200" className="citytext00">HALALAI CAMP</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Cusine1' id="city300" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal3}/>
                  <div id="citytext300" className="citytext00">SALKANPUR CAMP</div>
                </Link>
              </Col>
            </Row>
            <Row sm="4">
              <Col sm="4" xs="auto">
                <Link to ='/Camp2' id="city400" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal4}/>
                  <div id="citytext400" className="citytext00">MOMO CAFE</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Hotel2' id="city500" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal5}/>
                  <div id="citytext500" className="citytext00">LA KUCHINO</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Cusine2' id="city600" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal6}/>
                  <div id="citytext600" className="citytext00">MANGO TREE</div>
                </Link>
              </Col>
            </Row>
            <Row sm="4">
              <Col sm="4" xs="auto">
                <Link to ='/Camp3' id="city700" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal7}/>
                  <div id="citytext700" className="citytext00">NATURE COURTYARD</div>
                </Link>
              </Col>
              <Col sm="4"  xs="auto">
                <Link to ='/Hotel3' id="city800" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal8}/>
                  <div id="citytext800" className="citytext00">WOODS INN</div>
                </Link>
              </Col>
              <Col sm="4"  xs="auto">
                <Link to ='/Cusine3' id="city900" className="city00" style={{"text-decoration" : "none"}}>
                  <img src ={deal9}/>
                  <div id="citytext900" className="citytext00">VILLA DA CASA</div>
                </Link>
              </Col>
            </Row>
           </Container>
        </div>
      </div>
    </div>
  
  )
}

export default Deals;