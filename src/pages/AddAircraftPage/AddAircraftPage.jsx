import { Container } from "react-bootstrap"
import AircraftForm from "../../components/AircraftForm/AircraftForm"

const AddAircraftPage = () => {

    return (
        <div className="AircraftForm" >

            <Container className="mt-5">

                <h2>Add your aircraft</h2>
                <hr />

                <AircraftForm />

            </Container>

        </div>
    )
}
export default AddAircraftPage