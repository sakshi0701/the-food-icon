import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom"
import Recipe from "../recipe/Recipe";
import Follow from "../footer/Follow";
import Navbar from "../Navbar/navbar";
import "./dashboard.css";
require('dotenv').config()

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

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
  }, [query]);                  //now gonna run only when we click submit

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);     // the "hits" in the json has all the data req!
  };

  const updateSearch = e => {
    setSearch(e.target.value);  //its the value of the input
  }

  const getSearch = e => {
    e.preventDefault();         //so that it doesnt keep refreashing again and again
    setQuery(search);           //updating our value
    setSearch('');              //setting the search bar empty after searching
  }

  return (
    <>
      <div className="w-100 App">
      <Router>
      <Navbar />
      <form onSubmit={getSearch} className="mt-10 search-form">
            <input className="search-bar" placeholder='Search Here' type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type='submit'>Search</button>
          </form>

          <div className="recipes">
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
          {/* <div className="footer">
            <p>Follow us on:   </p>
            <Follow />
          </div> */}
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
        </Card.Body>
      </Card>
      <div className="profile w-100 text-center mt-2 mb-10">
        <button className="logout-btn" variant="link" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div  className="footer">
            <p>Follow us on:   </p>
            <Follow />
          </div>
          </div>
          
    </div>
    </>
  )
}