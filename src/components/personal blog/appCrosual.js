import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export default function AppCrosual () {
    var testimonialsData = [
        {
          id: 1,
          name: 'by samule beckett',
          description: ` " Ever Tried.Ever Failed. No Matter. Try Again. Fail Again. Fail Better. " `,
          image : require('./mw83124.webp')
        },
        {
          id: 2,
          name: 'by arnold SCHWARZENEGGER',
          description:` " The Worst Thing I Can Be is The Same As Everbody Else.I Hate That " `,
          image : require('./Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg')
        },
        {
          id: 3,
          name: 'by Steve Jobs',
          description: `" Because the people who are crazy enough to think they can change the world are the ones who do." `,
          image : require('./apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg')
        }
      ]
    return(
       <section id='testimonials' className='block testimonials-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Inspiring Quotes</h2>
            </div>
            <Carousel controls={false}>
                {
                    testimonialsData.map((val) => (
                        <Carousel.Item id={val.id}>
                        <blockquote>
                        <img className='image' src={val.image}/>
                            <p>{val.description}</p>
                            <cite>
                                <span className='name'>{val.name}</span>
                            </cite>
                        </blockquote>
                    </Carousel.Item>
                    ))
                }
            </Carousel>
        </Container>
       </section>
    )
}