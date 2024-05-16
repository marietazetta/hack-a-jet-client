import { Form, FloatingLabel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import OperatorCard from '../OperatorCard/OperatorCard'
import axios from 'axios'



const API_URL = import.meta.env.VITE_API_URL


const Search = () => {


    const [companyQuery, setCompanyQuery] = useState('')
    const [companies, setCompanies] = useState([])
    const [filteredCompanies, setFilteredCompanies] = useState([])

    const handleCompanyQuery = event => {
        const query = event.target.value.toLowerCase()
        setCompanyQuery(query)
        filterCompaniesByName(query)
    }


    const filterCompaniesByName = query => {
        const filtered = companies.filter(company => company.title.toLowerCase().includes(query))
        setFilteredCompanies(filtered)
    }

    useEffect(() => {
        axios
            .get(`${API_URL}/operators`)
            .then(({ data }) => {
                setCompanies(data)
                setFilteredCompanies(data)
            })
            .catch(err => console.log(err))
    }, [])


    return (


        <div className='Search'>
            <FloatingLabel
                controlId="floatingInput"
                label="search your operator or aircraft"
                className="mb-3"
            >
                <Form.Control
                    type="email"
                    placeholder="search your operator or aircraft"
                    value={companyQuery}
                    onChange={handleCompanyQuery}
                />
            </FloatingLabel>
            {/* {
                filteredCompanies.map(company => {
                    return <OperatorCard key={company._id} {...company} />;
                })
            } */}
        </div>

    )
}

export default Search