import { Form, ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const Search = () => {
    const [companyQuery, setCompanyQuery] = useState('')
    const [filteredCompanies, setFilteredCompanies] = useState([])
    const [option, setOption] = useState(false)

    const handleOption = (boolean) => {
        setOption(boolean)
    }

    const handleCompanyQuery = event => {
        const { value: query } = event.target
        setCompanyQuery(query)
        setOption(false)
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

            <Form.Control
                type="text"
                placeholder="search your operator"
                value={companyQuery}
                onChange={handleCompanyQuery}
            />
            <ListGroup style={{ position: 'absolute', zIndex: 1000 }}>

                {
                    filteredCompanies.map(company => {
                        return (
                            <ListGroup.Item key={company.id}>
                                <Link to={`/operators/${company.id}`} onClick={handleOption}>
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