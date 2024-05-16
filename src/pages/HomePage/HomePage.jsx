import { Container } from 'react-bootstrap'
import './HomePage.css'


const HomePage = () => {

    return (

        <div>

            <video
                src="https://res.cloudinary.com/dzncdwx7u/video/upload/v1715857418/1650628-hd_1920_1080_25fps_gfm0lm.mp4"
                width='120%'
                autoPlay
                muted
                loop
            />


            <Container className='HomePageText'>

                <h2 className='mb-5'>HACK A JET</h2>

                <h3> Elevate Your Business with Hack a Jet </h3>
                <p> Join the premier network of luxury jet providers.</p>

                <p>At Hack a Jet, we are committed to connecting discerning travelers with the most exceptional private jet experiences. </p>
                <p>Our exclusive network of partners shares our passion for providing unparalleled service and creating unforgettable journeys. </p>

                <p> If your company is ready to elevate its offerings and cater to the most discerning clientele, we invite you to apply to join our esteemed network.</p>
                <br />
                <h4>Benefits of Partnership: </h4>
                <ul>
                    <li>Access to a global network of affluent clientele</li>
                    <li>Exposure to a curated selection of luxury jet providers</li>
                    <li>Marketing and promotional support from Hack a Jet</li>
                    <li>Dedicated account manager to assist with your needs</li>
                </ul>
                <br />
                <h4>Partnership Requirements:</h4>

                <ul>
                    <li>Proven track record of providing exceptional luxury jet services</li>
                    <li>Commitment to safety, reliability, and customer satisfaction</li>
                    <li>Fleet of well-maintained and luxurious private jets</li>
                    <li>Experienced and highly qualified crew</li>
                </ul>
            </Container>

        </div>

    )
}

export default HomePage