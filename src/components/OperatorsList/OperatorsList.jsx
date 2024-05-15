import axios from "axios"
import OperatorCard from "../OperatorCard/OperatorCard"
import './OperatorsList.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Spinner } from 'react-bootstrap'


const API_URL = import.meta.env.VITE_API_URL

const OperatorsList = () => {

    const [operators, setOperators] = useState([])
    const [isLoading, setIsloading] = useState([])

    useEffect(() => {
        loadOperators()
    }, [])

    const loadOperators = () => {
        axios
            .get(`${API_URL}/operators`)
            .then(({ data }) => {
                setOperators(data)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="OperatorsList">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :
                    operators.map((operator) => {
                        return (
                            <div key={operator.id}>
                                <Link to={`/operators/${operator.id}`}>
                                    <OperatorCard {...operator} />
                                </Link>
                            </div>
                        );
                    })}
        </div >
    )
}

export default OperatorsList