
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EditAircraftForm from "../../components/AircraftForm/EditAircraftForm"
import './EditAircraftPage.css'



const EditAircraftPage = () => {


    return (

        <div className="EditAircraftPage">

            <Container className="pt-5">

                <EditAircraftForm />

                {/* <Link to="/aircrafts">
                    <Button className="custom-color-button mt-3" type="submit">
                        Back
                    </Button>
                </Link> */}

            </Container>

        </div>
    )

}

export default EditAircraftPage