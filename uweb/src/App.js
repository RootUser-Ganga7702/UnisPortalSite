import { Route, Routes } from 'react-router-dom'

import './App.css'

import AndroidDevelopment from './components/androidDevelopment/AndroidDevelopment'
import BusinessAnalyst from './components/ba/BusinessAnalyst'
import Carriers from './components/carriers/Carriers'
import Footer from './components/contactus/Contact'
import DataScience from './components/dataScience/DataScience'
import Devops from './components/devops/Devops'
import Home from './components/home/Home'
import ItConsultancy from './components/itConsultancy/ItConsultancy'
import Testing from './components/testing/Testing'
import WebApplication from './components/webApplication/WebApplication'
import Blog from './components/blog/Blog'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/careers" element={<Carriers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/services/web-app" element={<WebApplication />} />
        <Route path="/services/android-dev" element={<AndroidDevelopment />} />
        <Route path="/services/testing" element={<Testing />} />
        <Route path="/services/data-science" element={<DataScience />} />
        <Route path="/services/devops" element={<Devops />} />
        <Route path="/services/ba" element={<BusinessAnalyst />} />
        <Route path="/services/it-consultancy" element={<ItConsultancy/>} />
    </Routes>
      </>
  )
}

export default App