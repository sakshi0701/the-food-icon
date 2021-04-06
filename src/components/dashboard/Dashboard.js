import React, { useEffect, useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom"
import Recipe from "../recipe/Recipe";
import Navbar from "../Navbar/navbar";
import "./dashboard.css";
import Footer from "../footer/Footer";
import Speciality from "../speciality box/Speciality";
require('dotenv').config()

export default function Dashboard() {

  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipies, setRecipies] = useState([]);

  const [search, setSearch] = useState('');

  //finished text in the search bar added here:
  const [query, setQuery] = useState('apple')

  useEffect(() => {
    getRecipies();
    // eslint-disable-next-line
  }, [query]);

  const getRecipies = async () => {
    setLoading(!Loading);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    setLoading(false);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();         
    setQuery(search);      
    setSearch('');       
  }

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <>
      <div className="w-100 App">
        <Router>
          <Navbar />

          <div className="special">
            <Speciality />
          </div>

          <form onSubmit={getSearch} className="mt-10 search-form">
            <input className="search-bar" placeholder='Search Here' type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type='submit'>Search</button>
          </form>

          <div className="load">
          {Loading && (
                <div className="d-flex justify-content-center text-center spinner-border text-success" role="status">
                    {/* <p class="visually-hidden"></p> */}
                </div>
          )}
          </div>

          <div className="recipes" data-aos="fade-up">
            {recipies.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
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