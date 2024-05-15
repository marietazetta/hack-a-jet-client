
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EditAircraftForm from "../../components/AircraftForm/EditAircraftForm"



const EditAircraftPage = () => {


    return (

        <Container className="mt-5">

            <EditAircraftForm />

            <Link to="/aircrafts">
                <Button variant="dark" type="submit" className="mt-3">
                    Back
                </Button>
            </Link>

        </Container>


    )

}

export default EditAircraftPage