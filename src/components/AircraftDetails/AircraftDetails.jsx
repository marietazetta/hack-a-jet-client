import axios from "axios"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"


const API_URL = "http://localhost:5005"

const AircraftDetails = () => {

    const [aircraft, setAircraft] = useState([])

    const { aircraftId } = useParams()

    useEffect(() => {
        loadAircraft()
    }, [])


    const loadAircraft = () => {
        axios
            .get(`${API_URL}/aircrafts/${aircraftId}`)
            .then(({ data }) => setAircraft(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="AircraftDetails">
            <Container>


                <img
                    src={aircraft.images}
                    alt={aircraft.model}
                />

                <h3>{aircraft.model}</h3>
                <h5>{aircraft.manufacturer}</h5>
                <p>{aircraft.yom}</p>
                <p>Registration: {aircraft.registration}</p>



            </Container>


        </div >
    )
}
export default AircraftDetails