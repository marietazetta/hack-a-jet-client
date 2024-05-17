import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './ModalDelete.css'

const API_URL = import.meta.env.VITE_API_URL


const ModalDelete = ({ show, handleClose, aircraftId, operatorId }) => {

    console.log(handleClose)

    const navigate = useNavigate()

    const deleteAircraft = () => {
        axios
            .delete(`${API_URL}/aircrafts/${aircraftId}`)
            .then(() => {
                handleClose()
                navigate(`/operators`)
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <Modal className="ModalDelete" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action will delete your aircraft</Modal.Body>
                <Modal.Footer>
                    <Button className='custom-color-button' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='custom-color-button' onClick={deleteAircraft}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete