import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import AircraftCard from "../AircraftCard/AircraftCard"

const API_URL = "http://localhost:5005"


const OperatorAircraftList = () => {

    const [aircraft, setAircraft] = useState([])

    const { aircraftId } = useParams()

    useEffect(() => {
        loadAircraft()
    }, [])


    const loadAircraft = () => {
        axios
            .get(`${API_URL}/operators?_embed=aircrafts`)
            .then(({ data }) => setAircraft(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="AircraftDetails">

            <AircraftCard />

        </div >


    )
}

export default OperatorAircraftList