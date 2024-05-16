import { Container } from "react-bootstrap"
import AddAircraftForm from "../../components/AircraftForm/AddAircraftForm"
import './AddAircraftPage.css'

const AddAircraftPage = () => {

    return (
        <div className="AddAircraftPage" >

            <Container className="mt-5">

                <h2 className="text-center">
                    - ADD YOUR AIRCRAFT -</h2>
                <hr />

                <AddAircraftForm />

            </Container>

        </div>
    )
}
export default AddAircraftPage