import axios from "axios"
import { useState, useEffect } from "react"
import { ListGroup, Button, Spinner, Container } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import OperatorAircraftList from "./../../components/OperatorAircraftsList/OperatorAircraftList"

import './OperatorDetailsPage.css'

const API_URL = import.meta.env.VITE_API_URL

const OperatorDetailsPage = () => {

    const [operator, setOperator] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const { operatorId } = useParams()

    useEffect(() => {
        loadOperator()
    }, [operatorId])


    const loadOperator = () => {
        axios
            .get(`${API_URL}/operators/${operatorId}`)
            .then(({ data }) => {
                setOperator(data)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container className="operatorDetails mt-5">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :

                    <div>
                        <ListGroup className="mt-0 border-0">
                            <ListGroup.Item className="border-0 mx-auto"><img
                                src={operator.logo}
                            /></ListGroup.Item>

                            <ListGroup.Item as="h1" className="border-0">{operator.company}</ListGroup.Item>

                            <ListGroup.Item className="mt-10 border-0">{operator.description}</ListGroup.Item>

                            <ListGroup.Item as="h4" className="p-4 border-0">Services</ListGroup.Item>

                            <ListGroup as="ul" className="mt-1 mb-5" horizontal>

                                <ListGroup.Item as="li" className="border border-0">
                                    {operator.services?.lounge ? "• lounge available" : "• no lounge available"}
                                    <img src="" alt="" />
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border border-0">
                                    {operator.services?.transfer ? "• transfer available" : "• no transfer available"}
                                </ListGroup.Item>

                            </ListGroup>

                        </ListGroup>

                        <OperatorAircraftList operatorId={operator.id} />

                        <Link to={`/new-aircraft/operator/${operatorId}`}>
                            <Button className="custom-color-button mb-5">Add an aircraft</Button>
                        </Link>
                        <Link to={`/operators/edit/${operatorId}`}>
                            <Button className="custom-color-button mb-5">Edit</Button>
                        </Link>
                    </div>

            }
        </Container >
    )
}

export default OperatorDetailsPage