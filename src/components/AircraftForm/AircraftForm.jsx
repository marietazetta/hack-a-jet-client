import { Form, Row, Col, InputGroup } from "react-bootstrap"
const AircraftForm = () => {

    return (


        <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Aircraft Model</Form.Label>
                <Form.Control size="md" type="text" placeholder="Model" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control size="md" type="text" placeholder="Manufacturer" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Registration</Form.Label>
                    <Form.Control type="text" placeholder="Ex. EC-MRL" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Year of Make</Form.Label>
                    <Form.Control type="number" placeholder="Ex. 2023" min={1990}
                        max={2024} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Passenger Capacity</Form.Label>
                    <Form.Control type="number" placeholder="10" min={1}
                        max={25} />
                </Form.Group>
            </Row>

            <Form.Label htmlFor="basic-url">Image</Form.Label>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    Image URL
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>



            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Range</Form.Label>
                    <Form.Control type="number" placeholder="Km" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Homebase</Form.Label>
                    <Form.Control type="text" placeholder="Ex. LEMD" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" >
                    <Form.Label>Catering</Form.Label>
                    <Form.Select aria-label="Default select example" >
                        <option>Select an option</option>
                        <option value="1">Drinks</option>
                        <option value="2">Cold Catering</option>
                        <option value="3">Hot Catering</option>
                    </Form.Select>
                </Form.Group>
            </Row>


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control size="md" as="textarea" rows={2} />
            </Form.Group>
        </Form>
    )
}
export default AircraftForm