import axios from "axios"
import OperatorCard from "../OperatorCard/OperatorCard"
import './OperatorsList.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Col, Row, Container } from 'react-bootstrap'


const API_URL = 'http://localhost:5005'

const OperatorsList = () => {

    const [operators, setOperators] = useState()

    useEffect(() => {
        loadOperators()
    }, [])

    const loadOperators = () => {
        axios
            .get(`${API_URL}/operators`)
            .then(({ data }) => setOperators(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="OperatorsList">
                <Row >
                    {
                        operators &&
                        operators.map((operator) => {
                            return (
                                <>
                                    <Col md={{ span: 12 }} key={operator.id}>
                                        <Link to={`/operators/${operator.id}`}>
                                            <OperatorCard {...operator} />
                                        </Link>
                                    </Col>
                                </>
                            );
                        })}
                </Row>
            </div >
            <div className="OperatorsList">
            </div>
        </>
    )
}

export default OperatorsList