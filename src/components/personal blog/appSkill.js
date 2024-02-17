import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AppSkills () {
    return(
        <section id="skills" className="block pricing-block">
           <Container fluid>
            <div className='title-holder'>
                <h2>Skills.</h2>
            </div>
            <Row  className='parent-col'>
                <Col sm={4} className='text-center'>
                    <div className='side-sec'>
                        <ul>
                            <li><a href='#interest'><li>Interest</li></a></li>
                            <li><a href='#core'><li>Core</li></a></li>
                            <li><a href='#mordenweb'><li>Morden Web</li></a></li>
                        </ul>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className='contents'>
                        <section className='interest-sec' id='interest'>
                            <h2>Interest</h2>
                            <ul>
                                <li>Web</li>
                                <li>Backend</li>
                                <li>Design</li>
                                <li>Functionality</li>
                            </ul>
                        </section>
                        <section className='core-sec' id='core'>
                        <h2>Core</h2>
                            <ul>
                                <li>html</li>
                                <li>js</li>
                                <li>css</li>
                                <li>node</li>
                            </ul>
                        </section>
                        <section className='mordern-sec' id='mordenweb'>
                        <h2>Mordern Web</h2>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Express.js</li>
                                <li>MySql</li>
                            </ul>
                        </section>
                    </div>
                </Col>
            </Row>
           </Container>
        </section>
    )
}