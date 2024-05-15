import { Modal, Button } from "react-bootstrap"


const deleteAircraft = () => {
    axios
        .delete(`${API_URL}/aircrafts/${aircraftId}`)
        .then(() => navigate('/aircrafts'))
        .catch((error) => console.log(error))
}


function ModalDelete() {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>are you sure?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={deleteAircraft} variant="secondary">Yes</Button>
                    <Button variant="primary">Noooooooooooooo</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalDelete