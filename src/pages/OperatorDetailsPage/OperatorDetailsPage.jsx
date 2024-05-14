import axios from "axios"
import { useState, useEffect } from "react"
import { ListGroup, Button, Spinner } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import OperatorAircraftList from "./../../components/OperatorAircraftsList/OperatorAircraftList"



const API_URL = "http://localhost:5005"

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
        <div className="operatorDetails OperatorDetails">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :

                    <div>
                        <ListGroup className="mt-5">
                            <ListGroup.Item><img
                                src={operator.logo}
                            /></ListGroup.Item>

                            <ListGroup.Item className="mt-5">{operator.company}</ListGroup.Item>

                            <ListGroup.Item className="mt-5">{operator.description}</ListGroup.Item>
                            <ul>
                                <li>
                                    {operator.services?.lounge ? "lounge available" : "no lounge available"}
                                    <img src="" alt="" />
                                </li>
                                <li>
                                    {operator.services?.transfer ? "transfer available" : "no lounge available"}
                                </li>
                            </ul>


                        </ListGroup>

                        <OperatorAircraftList operatorId={operator.id} />

                        <Link to={`/new-aircraft/operator/${operatorId}`}>
                            <Button variant="outline-secondary" >Add an aircraft</Button>
                        </Link>
                        <Link to={`/operators/edit/${operatorId}`}>
                            <Button variant="outline-secondary">Edit</Button>
                        </Link>
                    </div>

            }
        </div >
    )
}

export default OperatorDetailsPage