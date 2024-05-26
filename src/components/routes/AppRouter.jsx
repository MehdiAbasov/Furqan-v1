import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../partials/Header'
import Home from "../Home"
import About from '../About'
import Contact from '../Contact'
import NotFound from '../NotFound'
const AppRouter = () => {
    return (
        <Router>
            <Header />
            <div className="container 2xl:px-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter