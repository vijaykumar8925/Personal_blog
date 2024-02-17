import Container from 'react-bootstrap/Container';

export default function AppFooter () {
    
    return(
        <section>
            <Container fluid className='footer'>
                <div className='footer-content'>
                    <h2>Vijayakumar Alagappan</h2>
                    <h3>Full Stack Developer</h3>
                    <p>As always, I am eager to learn, update things, and develop web applications with <br/> some fun-oriented elements, working collaboratively with teams!</p>
                </div>
                <div className='socials1'>
        <ul>
          <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/vijaykumar-alagappan-90b209219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="mailto:vijaykumarunofficial@gmail.com"><i class="fas fa-envelope"></i></a></li>
        </ul>
        </div>
            </Container>
        </section>
    )
}