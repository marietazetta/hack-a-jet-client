
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EditAircraftForm from "../../components/AircraftForm/EditAircraftForm"
import './EditAircraftPage'



const EditAircraftPage = () => {


    return (

        <Container className="mt-5 mb-3">

            <EditAircraftForm />

            <Link to="/aircrafts">
                <Button className="custom-color-button mt-3" type="submit">
                    Back
                </Button>
            </Link>

        </Container>


    )

}

export default EditAircraftPage