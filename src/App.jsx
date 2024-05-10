import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import { Route, Routes } from 'react-router-dom'
import OperatorsPage from './pages/OperatorsPage/OperatorsPage'
import AircraftsPage from "./pages/AircraftsPage/AircraftsPage"
import OperatorDetails from './components/OperatorDetails/OperatorDetails'
import AircraftCard from './components/AircraftCard/AircraftCard'
import HomePage from './pages/HomePage/HomePage'
import MembershipPage from './pages/MembershipPage/MembershipPage'

function App() {


  return (
    <>
      <div className="App">

        <Navigation />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/operators" element={<OperatorsPage />} />
          <Route path="/aircrafts" element={<AircraftsPage />} />
          <Route path="/operators/:operatorId" element={<OperatorDetails />} />
          <Route path="/aircrafts/:aircraftId" element={<AircraftCard />} />
          <Route path="/membership" element={<MembershipPage />} />


        </Routes>

      </div>
    </>
  )
}

export default App
