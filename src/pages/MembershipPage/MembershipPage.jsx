import { Container } from "react-bootstrap"
import MembershipForm from "../../components/MembershipForm/MembershipForm"

const MembershipPage = () => {

    return (

        <div className="MembershipPage">

            <Container className="mt-5">
                <h2>Join Us</h2>
                <hr />
                <p>Harness the collective power of the private jet industry! Join our exclusive Hack a Jet Alliance and elevate your business to new heights.
                    By becoming a member, you'll gain access to a network of qualified operators, increasing your reach and potential clientele.
                    Imagine efficiently fulfilling every client's request, no matter the destination, with our collaborative platform.
                    The Alliance fosters a supportive community, creating valuable partnerships and growth opportunities. Don't miss out
                    - join Hack a Jet Alliance today and revolutionize your private jet operation!</p>

                <hr />

                <h3><MembershipForm /></h3>

            </Container>
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
        </div>
    )
}

export default MembershipPage