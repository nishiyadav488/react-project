import React from 'react'
import Off from './../../assets/off.jpeg'
import Deal from './../../assets/deal.jpg'
import './Deel.css'
import City1 from './../../assets/city1.jpeg'
import City2 from './../../assets/city2.jpeg'
import City3 from './../../assets/city3.jpeg'
import City4 from './../../assets/city4.jpeg'
import City5 from './../../assets/city5.jpeg'
import City6 from './../../assets/city6.jpeg'
import City7 from './../../assets/city7.jpeg'
import City8 from './../../assets/city8.jpeg'
import City9 from './../../assets/city9.jpeg'
import {Link} from 'react-router-dom'
import{Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Deel = () => {
  return(
    <div id="deall">
      <div className="imageflex00">
        <div id="imageflex100">
          <img src ={Deal}/>
          <div id="flextext00">It's time for new Adventure</div>
        </div>
        <div id="imageflex200">
          <Container>
            <Row>
              <Col sm="4" xs="auto">
                <Link to ='/Bhopal' id="city100" className="city00">
                  <img src ={City1}/>
                  <div id="citytext100" className="citytext00">Bhopal</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Indore' id="city200" className="city00">
                  <img src ={City2}/>
                  <div id="citytext200" className="citytext00">Indore</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Gwalior' id="city300" className="city00">
                  <img src ={City3}/>
                  <div id="citytext300" className="citytext00">Gwalior</div>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col sm="4" xs="auto">
                <Link to ='/Amarkantak' id="city400" className="city00">
                  <img src ={City4}/>
                  <div id="citytext400" className="citytext00">Amarkantak</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Jabalpur' id="city500" className="city00">
                  <img src ={City5}/>
                  <div id="citytext500" className="citytext00">Jabalpur</div>
                </Link>
              </Col>
              <Col sm="4" xs="auto">
                <Link to ='/Pachmarhi' id="city600" className="city00">
                  <img src ={City6}/>
                  <div id="citytext600" className="citytext00">Pachmarhi</div>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col sm="4" xs="auto">
                <Link to ='/Balaghat' id="city700" className="city00">
                  <img src ={City7}/>
                  <div id="citytext700" className="citytext00">Balaghat</div>
                </Link>
              </Col>
              <Col sm="4"  xs="auto">
                <Link to ='/Satna' id="city800" className="city00">
                  <img src ={City8}/>
                  <div id="citytext800" className="citytext00">Satna</div>
                </Link>
              </Col>
              <Col sm="4"  xs="auto">
                <Link to ='/Chhatarpur' id="city900" className="city00">
                  <img src ={City9}/>
                  <div id="citytext900" className="citytext00">Chhatarpur</div>
                </Link>
              </Col>
            </Row>
           </Container>
        </div>
      </div>
    </div>
  )
}

export default Deel;