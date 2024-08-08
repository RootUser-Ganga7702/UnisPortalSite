import React from 'react';
import './About.css';
import Footer from '../contactus/Contact';
import AboutCards from '../aboutCards';
 
function About() {
  return (
    <div className="unis">
      <div>
        <h1 className="heading">About Us</h1>
        {/* <hr /> */}
        <div className="MainPart">
          <div className="Part1">
            <h3 className="para1">Client Overview</h3>
            <p style={{fontSize:'2rem'}}>Our esteemed clients, including top global companies, trust us for our exceptional services and innovative solutions. We take pride in the strong relationships we’ve built, reflected in the positive feedback we receive. Here are six of our notable clients:</p>
          </div>
          <div className="Part2">
            <img
              className="image1"
              src="https://img.freepik.com/free-vector/office-people-drinking-coffee-lunch-break_74855-7747.jpg?t=st=1722271525~exp=1722275125~hmac=339ec2a72081c19567b1b7d3ad14a115a64de983b81a0a0b11a037c7cea615f5&w=1060"
              alt="Office People"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="MainPart1">
          <div className="Image1">
            <img
             className='image2' style={{ width: '600px', height: '400px', marginTop: '80px' }}
              src="https://img.freepik.com/free-vector/business-people-work-together-office-meeting-corporate-employees-talking-about-tasks-boss-sitting-with-laptop-young-secretary-smiling-standing-near-desk-with-report-documents_575670-872.jpg?t=st=1722273368~exp=1722276968~hmac=3dcce3833725fd98892aadb7419c9d3f8ec43fff59ba6d44407ab8f819fa15ff&w=996"
              alt="Business Meeting"
            />
          </div>
          <div className="Part3">
            <h3 className="para1">Para No1</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
          </div>
        </div>
        <AboutCards />
      </div>
      <Footer />
    </div>
  );
}
 
export default About;