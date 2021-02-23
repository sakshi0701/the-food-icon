import React, { useState } from 'react';
import { Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom"
import Footer from '../footer/Footer';
import Navbar from '../Navbar/navbar';
import DrinksData from "./drinks.json";
import './drinks.css'
import DrinksList from './DrinksList';
import Speciality from '../speciality box/Speciality';

const Drinks = () => {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <div className="w-100 App">
                <Navbar />

                <div className="special">
                    <Speciality/>
                </div>

                <Router>
                    <div className="drinks">
                        {DrinksData.map(postDetail => (
                            <DrinksList
                                key={postDetail.id}
                                name={postDetail.name}
                                speciality={postDetail.speciality}
                                contactNo={postDetail.contactNo}
                            />
                        ))}
                    </div>
                </Router>


                <div className="footer1">
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Your Profile</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <strong>Email:</strong> {currentUser.email}
                            <Link to="/update-profile" className="btn btn-success w-100 mt-3">
                                Update Profile
          </Link>
                            <Link to="/recipe-notes" className="btn btn-success w-100 mt-3">
                                Your Recipe Notes
          </Link>
                        </Card.Body>
                    </Card>

                    <div className="profile w-100 text-center mt-2 mb-10">
                        <button className="logout-btn" variant="link" onClick={handleLogout}>
                            Log Out
            </button>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Drinks;
