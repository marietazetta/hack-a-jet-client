
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import EditAircraftForm from "../../components/AircraftForm/EditAircraftForm"

const EditAircraftPage = () => {


    return (

        <Container className="mt-5">

            <EditAircraftForm />

            <Link to="/aircrafts">Back to your fleet</Link>

        </Container>


    )

}

export default EditAircraftPage