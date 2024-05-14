import { Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import EditMembershipForm from "../../components/MembershipForm/EditMembershipForm"

const API_URL = "http://localhost:5005"


const EditOperatorPage = () => {

    return (

        <div className="EditOperatorPage">

            <Container>

                <EditMembershipForm />

                <Link to="/operators">
                    <Button variant="secondary" size="md">
                        back
                    </Button></Link>
            </Container >

        </div>


    )
}

export default EditOperatorPage