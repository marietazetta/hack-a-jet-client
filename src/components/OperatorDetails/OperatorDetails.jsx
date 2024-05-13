import axios from "axios"
import { useState, useEffect } from "react"
import { Container, ListGroup, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"



const API_URL = "http://localhost:5005"

const OperatorDetails = () => {

    const [operator, setOperator] = useState([])

    const { operatorId } = useParams()

    useEffect(() => {
        loadOperator()
    }, [])


    const loadOperator = () => {
        axios
            .get(`${API_URL}/operators/${operatorId}`)
            .then(({ data }) => setOperator(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="operatorDetails OperatorDetails">
            <Container className="mt-5">

                <ListGroup>
                    <img
                        src={operator.logo}
                    />

                    <h3>{operator.company}</h3>
                    <h5>{operator.description}</h5>
                    <ul>
                        <li>{operator.services?.lounge ? "lounge available" : "no lounge available"}
                            <img src="" alt="" /></li>
                        <li>{operator.services?.transfer ? "transfer available" : "no lounge available"}</li>
                    </ul>
                </ListGroup>
                <Link to='/new-aircraft'>
                    <Button variant="outline-secondary">Add an aircraft</Button>
                </Link>
            </Container>
        </div >
    )
}

export default OperatorDetails