import { Container } from "react-bootstrap"
import AddAircraftForm from "../../components/AircraftForm/AddAircraftForm"

const AddAircraftPage = () => {

    return (
        <div className="AircraftForm" >

            <Container className="mt-5">

                <h2>Add your aircraft</h2>
                <hr />

                <AddAircraftForm />

            </Container>

        </div>
    )
}
export default AddAircraftPage