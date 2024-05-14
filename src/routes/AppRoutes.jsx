import { Route, Routes } from 'react-router-dom'
import OperatorsPage from './../pages/OperatorsPage/OperatorsPage'
import AircraftsPage from "./../pages/AircraftsPage/AircraftsPage"
import OperatorDetailsPage from './../pages/OperatorDetailsPage/OperatorDetailsPage'
import HomePage from './../pages/HomePage/HomePage'
import MembershipPage from './../pages/MembershipPage/MembershipPage'
import AircraftDetailsPage from './../pages/AircraftDetailsPage/AircraftDetailsPage'
import AddAircraftPage from './../pages/AddAircraftPage/AddAircraftPage'
import EditAircraftPage from './../pages/EditAircraftPage/EditAircraftPage'
import EditOperatorPage from './../pages/EditOperatorPage/EditOperatorPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/operators" element={<OperatorsPage />} />
            <Route path="/aircrafts" element={<AircraftsPage />} />
            <Route path="/operators/:operatorId" element={<OperatorDetailsPage />} />
            <Route path="/aircrafts/:aircraftId" element={<AircraftDetailsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/new-aircraft" element={<AddAircraftPage />} />
            <Route path="/aircrafts/edit/:aircraftId" element={<EditAircraftPage />} />
            <Route path="/operators/edit/:operatorId" element={<EditOperatorPage />} />
        </Routes>
    )
}

export default AppRoutes