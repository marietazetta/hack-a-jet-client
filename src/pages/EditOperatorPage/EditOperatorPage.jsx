import { Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import EditMembershipForm from "../../components/MembershipForm/EditMembershipForm"


const EditOperatorPage = () => {

    return (

        <div className="EditOperatorPage mt-5">

            <Container>

                <EditMembershipForm />

                <Link to="/operators">
                    <Button variant="secondary" size="md" className="mt-3">
                        back
                    </Button></Link>
            </Container >

        </div>


    )
}

export default EditOperatorPage