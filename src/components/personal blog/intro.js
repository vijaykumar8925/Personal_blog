import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppIntro () {
    return(
       <section id='intro' className='intro-block'>
            <Container fluid>
            <Row className='text-center'>
        <Col></Col>
        <Col className='intro-content'>Vijayakumar Alagappan</Col>
        <Col></Col>
      </Row>
      <Row >
        <Col></Col>
        <Col md="auto">
        <div className='wrapper'>
        <div className='txt'>I'm</div>
        <ul className='run-text'>
            <li><span>a Web Developer</span></li>
            <li><span>a Full Stack Developer</span></li>
            <li><span>a Local Crickter</span></li>
            <li><span>a Football Critic.</span></li>
        </ul>
      </div>
        </Col>
        <Col></Col>
      </Row>
            </Container>
       </section>
    )
}