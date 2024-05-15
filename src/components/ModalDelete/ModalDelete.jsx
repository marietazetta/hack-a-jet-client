import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL


const ModalDelete = ({ show, handleClose, aircraftId }) => {

    console.log(handleClose)

    const navigate = useNavigate()

    const deleteAircraft = () => {
        axios
            .delete(`${API_URL}/aircrafts/${aircraftId}`)
            .then(() => {
                handleClose()
                navigate('/aircrafts')
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action will delete your aircraft</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={deleteAircraft}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete