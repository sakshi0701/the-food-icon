import React, { useState } from 'react';
import { Card, Alert } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext"
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom"
import Footer from '../../footer/Footer';
import Navbar from '../../Navbar/navbar';
import Data from "./bakes.json";
import '../pages.css';
import BakeList from './BakeList';
import Speciality from '../Speciality';

const Bake = () => {

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
                    <div className="type">
                        {Data.map(postDetail => (
                            <BakeList
                                key={postDetail.id}
                                title={postDetail.title}
                                image={postDetail.image}
                                ingredients={postDetail.ingredients}
                                directions={postDetail.directions}
                                url={postDetail.url}
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

export default Bake;
