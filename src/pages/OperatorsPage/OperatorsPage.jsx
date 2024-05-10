import OperatorsList from "../../components/OperatorsList/OperatorsList"
import { Container } from 'react-bootstrap'


const OperatorsPage = () => {

    return (
        <>
            <Container>
                <div className="OperatorsPage">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Est eveniet error quo quidem eos nobis expedita doloribus iusto. Nobis voluptatibus non cumque, aliquam autem aperiam saepe unde facere aut commodi.</p>
                    <OperatorsList />
                </div>
            </Container>
        </>
    )
}

export default OperatorsPage