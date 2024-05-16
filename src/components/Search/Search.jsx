import { Form, ListGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react'
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
        setOption(true)
        getFilteredCompanies(query)
    }

    useEffect(() => {
        if (companyQuery === '') {
            setFilteredCompanies([])
            return;
        }
        getFilteredCompanies()
    }, [companyQuery])



    const getFilteredCompanies = () => {
        axios
            .get(`${API_URL}/operators?company_like=${companyQuery}`)
            .then(({ data }) => {
                setFilteredCompanies(data)

            })
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

            {
                option && (
                    <ListGroup style={{ position: 'absolute', zIndex: 1000 }}>
                        {
                            filteredCompanies.map(company => {
                                return (
                                    <ListGroup.Item key={company.id}>
                                        <Link to={`/operators/${company.id}`} onClick={() => handleOption(false)}>
                                            {company.company}
                                        </Link>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                )
            }

        </div>
    )
}

export default Search