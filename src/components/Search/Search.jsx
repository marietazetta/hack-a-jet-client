import { Form, FloatingLabel } from 'react-bootstrap'



const Search = () => {

    return (

        <div className='Search'>
            <FloatingLabel
                controlId="floatingInput"
                label="search your operator or aircraft"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="search your operator or aircraft" />
            </FloatingLabel>
        </div>

    )
}

export default Search