import axios from "axios"
import OperatorCard from "../OperatorCard/OperatorCard"
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
                {
                    operators &&
                    operators.map((operator) => {

                        return (
                            <>
                                <Link to={`${API_URL}/operators/${operator.id}`}>
                                    <div key={operator.id}>
                                        <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                                            <OperatorCard {...operator} />

                                        </div>
                                    </div>
                                </Link>
                            </>
                        );
                    })}
            </div >
            <div className="OperatorsList">
            </div>
        </>
    )
}

export default OperatorsList