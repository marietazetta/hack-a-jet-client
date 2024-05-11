import { Container } from "react-bootstrap"
import MembershipForm from "../../components/MembershipForm/MembershipForm"

const MembershipPage = () => {

    return (

        <div className="MembershipPage mt-5">
            <Container>

                <h3>Ready to take your business to new heights?</h3>

                <p>Complete the application form below to begin the process of joining our exclusive network.
                    We look forward to reviewing your qualifications and discussing the opportunities that await your company.
                </p>
                <p>Together, we can redefine the luxury jet travel experience.</p>

            </Container>
            <MembershipForm />
        </div>

    )
}

export default MembershipPage