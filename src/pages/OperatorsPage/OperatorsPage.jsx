import OperatorsList from "../../components/OperatorsList/OperatorsList"
import { Container } from 'react-bootstrap'
import './OperatorsPage.css'


const OperatorsPage = () => {

    return (
        <div className="OperatorsPage mt-5">
            <Container>
                <h3>Elevate Your Travel Experience with Our Private Jet Charter Partners</h3>
                <p>Soar to new heights of luxury and convenience with our curated selection of private jet charter partners.
                    Whether you're seeking a quick business getaway or an unforgettable family vacation, our trusted partners
                    offer a wide range of aircraft and personalized services to exceed your expectations.</p>
                <OperatorsList />
            </Container>
        </div>
    )
}

export default OperatorsPage