import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img from './IMG-20221025-WA0001.png';
import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function AppAbout () {

    const [age,setAge] = useState(0);

   
     
    useEffect(() => {

        const date = new Date();

    let month = date.getMonth();

    let day = date.getDay();

    let year = date.getFullYear();

    let Check = 7 + '-' + 16 + '-' + 2002;
    let check1 = month + '-' + day + '-' + year;
    
    calcDate1(Check,check1)

        function calcDate1(date1, date2){
            /*
            * calcDate() : Calculates the difference between two dates
            * @date1 : "First Date in the format MM-DD-YYYY"
            * @date2 : "Second Date in the format MM-DD-YYYY"
            * return : Array
            */
            //new date instance
            const dt_date1 = new Date(date1);
            const dt_date2 = new Date(date2);
        
            //Get the Timestamp
            const date1_time_stamp = dt_date1.getTime();
            const date2_time_stamp = dt_date2.getTime();
        
            let calc;
        
            //Check which timestamp is greater
            if (date1_time_stamp > date2_time_stamp) {
                calc = new Date(date1_time_stamp - date2_time_stamp);
            } else {
                calc = new Date(date2_time_stamp - date1_time_stamp);
            }
            //Retrieve the date, month and year
            const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
            //Convert to an array and store
            const calcFormat = calcFormatTmp.split("-");
            //Subtract each member of our array from the default date
            const days_passed = Number(Math.abs(calcFormat[0]) - 1);
            const months_passed = Number(Math.abs(calcFormat[1]) - 1);
            const years_passed = Number(Math.abs(calcFormat[2]) - 1970);
        
            //Set up custom text
            const yrsTxt = ["year", "years"];
            const mnthsTxt = ["month", "months"];
            const daysTxt = ["day", "days"];
        
            //Convert to days and sum together
            const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
        
            //display result with custom text
            const result = ((years_passed == 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
                years_passed + ' ' + yrsTxt[1] + ' ' : '') +
                ((months_passed == 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
                    months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
                ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
                    days_passed + ' ' + daysTxt[1] : '');
                    setAge(years_passed)
        }
    
    },[])
    
    return(
        <section id="about" className="block about-block">
              <Container fluid>
                <Row >
                 <Col className='text-center' sm={6}>
                 <Image src={img} roundedCircle style={{width:'300px',height:'300px'}}/>
                 <div className='socials'>
                    <a href="https://www.instagram.com/__o__t__i__s/?next=%2F"><MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} >
        <MDBIcon fab icon='instagram' />
      </MDBBtn></a>
      <a href='https://www.linkedin.com/in/vijaykumar-alagappan-90b209219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }}>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>
      </a>
      <a href='https://twitter.com/Vijay65748217'>
      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} >
        <MDBIcon fab icon='twitter' />
      </MDBBtn>
      </a>
                 </div>
                 </Col>
                 <Col sm={6}>
                    <div className='title'>
                        <h1>About me.</h1>
                        <p>Hi I am Vijayakumar, a {age} year old Web developer, and a Full stack developer living in <a href='https://maps.app.goo.gl/RWEkn1m7ApkqQSVaA'>Tiruchirappalli, India</a>. I am a Full stack developer, currently working with awesome folks at Mother Software Technology and Services.</p>
                        <p>Have look at my skills or just connect with me on <a href='https://www.linkedin.com/in/vijaykumar-alagappan-90b209219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>LinkedIn</a>. I am always opened and excited about new learning and collaborations, So let's discuss.</p>
                    </div>
                    
                 </Col>
                </Row>
              </Container>
        </section>
    )
}