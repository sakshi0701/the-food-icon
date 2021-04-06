import React, { useRef, useState, useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Nav, NavbarContainer, NavLogo } from "../Navbar/navstyle";
import Footer from '../footer/Footer';
import one from '../images/one.jfif';
import two from '../images/two.jpg';
import three from '../images/three.jfif';
import './front.css';

// -------------------------------------------------
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const Image1 = () => {
  return (
    <CardImg className="image">
      {/* eslint-disable-next-line */}
      <img src={one} alt="Image" />
    </CardImg>
  )
}

const Image2 = () => {
  return (
    <CardImg className="image">
      {/* eslint-disable-next-line */}
      <img src={two} alt="Image" />
    </CardImg>
  )
}

const Image3 = () => {
  return (
    <CardImg className="image">
      {/* eslint-disable-next-line */}
      <img src={three} alt="Image" />
    </CardImg>
  )
}

// ------------------------------------------------------------

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="all">
      <Nav>
        <NavbarContainer>
          <NavLogo>The Food Icon</NavLogo>
        </NavbarContainer>
      </Nav>

      <div className="showcase">
        <Carousel
          enableAutoPlay={true}
          autoPlaySpeed={9000}
          pagination={false}
          showArrows={false}
          breakPoints={breakPoints}>
          <Item><Image1 /></Item>
          <Item><Image3 /></Item>
          <Item><Image2 /></Item>
        </Carousel>
      </div>

      <div className="slogan">
        The flavors of Nature
      </div>

<div className="content">
  <div className="content1" data-aos="fade-up">
        Cooking is the art of preparing food that is started around 2 million years ago, cooking is done by professionals cooks and chefs in restaurants and other food establishments. We present you this website where we have listed some of the best handpicked recipes.
      <p>
          So what are you waiting for...? SignUp and enhance your skill!
      </p>
      </div>

      <div className="content2" data-aos="fade-up">
        Explore amazing recipes with us where we provide you a variety of cuisine and recipes with their videos for your smooth cooking journey.
        Figure out our new  and try out new tastes!
      </div>
</div>
      

      <div className="contain" data-aos="fade-up">
        <Card className="bg-dark card">
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label className="success">Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 btn-success" type="submit">
                Log In
            </Button>
            </Form>
            <div className="w-100 text-center mt-3 success">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="footer2">
        <Footer />
      </div>
    </div>
  )
}

const Item = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height: 300px;
width: 100%;
`;

const CardImg = styled.div`
    height: 100vh;
    width: 100%;
`;