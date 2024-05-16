import { Form, FloatingLabel, ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const Search = () => {
    const [companyQuery, setCompanyQuery] = useState('')
    const [filteredCompanies, setFilteredCompanies] = useState([])

    const handleCompanyQuery = event => {
        const { value: query } = event.target
        setCompanyQuery(query)
        getFilteredCompanies(query)
    }


    const getFilteredCompanies = query => {
        axios
            .get(`${API_URL}/operators?company_like=${query}`)
            .then(({ data }) =>
                setFilteredCompanies(data))
            .catch(err => console.log(err))
    }

    return (
        <div className='Search' >
            <FloatingLabel
                controlId="floatingInput"
                label="search your operator"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="search your operator"
                    value={companyQuery}
                    onChange={handleCompanyQuery}
                />
            </FloatingLabel>
            <ListGroup style={{ position: 'absolute', zIndex: 1000 }}>

                {
                    filteredCompanies.map(company => {
                        return (
                            <ListGroup.Item key={company.id}>
                                <Link to={`/operators/${company.id}`}>
                                    {company.company}
                                </Link>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>

        </div>
    )
}

export default Search