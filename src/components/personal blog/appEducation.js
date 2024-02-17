import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRightLong } from "react-icons/fa6";

export default function AppEducation () {
    return(
        <section id="education" className="block1 education-block">
            <Container fluid style={{padding:'0'}}>
            <div className='title-holder'>
                <h2>Education.</h2>
                <div className='edu-content'>
                    <Row>
                        <Col sm={4}>
                            <div className='edu-details'>
                                <h2>BACHELOR'S</h2>
                                <div className='para'>
                                    <p>I completed a Bachelor of Commerce degree at Bishop Heber College, Trichy, with a CGPA of 8, majoring in Commerce.</p>
                                    <span>________</span>
                                </div>
                                <a href='https://bhc.edu.in/files/index.php'>Bishop Heber Collage  <FaArrowRightLong color='#D56638'/></a>
                            </div>
                        </Col>
                        <Col  sm={4}>
                        <div className='edu-details'>
                                <h2>HSC</h2>
                                <div className='para sm-font-size-10px'>
                                    <p>I completed my HSC as a commerce student with a percentage of 72, majoring in Commerce and Accounts.</p>
                                    <span>________</span>
                                </div>
                                <a href='https://maps.app.goo.gl/yeZr5DE1neyufw8T6'>Bishop Heber School  <FaArrowRightLong color='#D56638'/></a>
                            </div>
                        </Col>
                        <Col sm={4}>
                        <div className='edu-details'>
                                <h2>SSLC</h2>
                                <div className='para'>
                                    <p>I completed my SSLC with a percentage of 88.2 at E.R. Higher Secondary School Tiruchirappalli.</p>
                                    <span>________</span>
                                </div>
                                <a href='https://maps.app.goo.gl/WTH5aBhzJM9zU4xN6'>E.R.HR.SEC.SCHOOL  <FaArrowRightLong color='#D56638'/></a>
                            </div>
                            </Col>
                    </Row>
                </div>
            </div>
            </Container>
        </section>
    )
}