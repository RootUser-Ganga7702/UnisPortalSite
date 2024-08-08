import React from 'react';
import './Blog.css';
import Footer from '../contactus/Contact';
import BlogsCards from '../blogCards';
 
const Blog = () => {
  return (
    <div className="blog-container">
      {/* Section with image and paragraph */}
      <div className='box10'>

      <div className="image-with-text">
        <img src="https://media.istockphoto.com/id/518816870/photo/boardroom-full-of-professional-business-people.jpg?s=1024x1024&w=is&k=20&c=jQSr4Y_mEvGJyGd2ScZx8IcyayraXw8MH7vywwct_zc=" alt="Placeholder" className="main-image" />
      </div>

      <div className='box11'>
        <h1 className='head6'>Unis Blog </h1>
        <p>Welcome to the Company Name blog, your go-to source for insights on the latest trends in technology and innovation. Here, we share expert perspectives, project highlights, and industry news to keep you informed and inspired. Dive into our success stories, learn from our experiences, and stay updated with the cutting-edge solutions we deliver. Join us as we explore the dynamic world of IT and how it shapes the future of business. </p>
      </div>

      </div>
 
      {/* Grid of cards */}

      <Footer />
    </div>
  );
};
 
export default Blog;