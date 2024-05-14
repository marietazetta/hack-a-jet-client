import { Container } from "react-bootstrap"
import AddMembershipForm from "../../components/MembershipForm/AddMembershipForm"


const MembershipPage = () => {

    return (

        <div className="MembershipPage mt-5">

            <Container>
                <h2>Join Us</h2>
                <hr />
                <p>Harness the collective power of the private jet industry! Join our exclusive Hack a Jet Alliance and elevate your business to new heights.
                    By becoming a member, you'll gain access to a network of qualified operators, increasing your reach and potential clientele.
                    Imagine efficiently fulfilling every client's request, no matter the destination, with our collaborative platform.
                    The Alliance fosters a supportive community, creating valuable partnerships and growth opportunities. Don't miss out
                    - join Hack a Jet Alliance today and revolutionize your private jet operation!</p>

                <hr />

                <AddMembershipForm />

            </Container>

        </div>
    )
}

export default MembershipPage
