import './Home.css';
import Footer from '../contactus/Contact';
import VideoBg from '../VideoBg'; 
import WebServices from '../webServices';
import Marquee from 'react-fast-marquee';
import AboutCards from '../aboutCards';
import CareerCards from '../CareersCards';
import VideoBg2 from '../VideoBg2';
import BlogsCards from '../blogCards';

function Home() {
  return (
    <div className="unis two">
      <VideoBg className="goTop" />

      <h1 className='text1'> Our Services</h1>
    <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="right"
      >
      <WebServices />
      </Marquee>
      <VideoBg2 />


    <div className="unisHome">

     <div className="box1">
      <h1 className='headOr'>Unis Technosoft Pvt. Ltd. – Pioneering Innovation in IT Solutions</h1>
      <h1 className='briefHead'><span className='titleMain'>UNSTECHNOSOFT PRIVATE LIMITED </span> offers the best software development, cloud, cyber security solutions company that serves your business needs. That is why our qualified staff focuses on offering exceptional IT consulting, managed services, and digital transformation projects. Committed to quality, innovation, and client’s satisfaction, we enable organizations to succeed in the digital era.</h1>
     </div>
     <div className="box2">
      <img className="imageCrop" src='https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2020/07/CDG_blog_post_image_08.jpg' />
     </div>
    </div>

    <div>
      </div>

    <div>
      
      <div>
    <div className="box1">
      <h1 className='headOr'>Our Organisation Blogs</h1>
      <h1 className='briefHead newHeading'>At <span className='titleMain addHead'>UNSTECHNOSOFT PRIVATE LIMITED </span>, we are dedicated to transforming businesses through innovative IT solutions. Established with a vision to deliver top-notch technology services, our team of experienced professionals is committed to helping clients navigate the ever-evolving digital landscape. We pride ourselves on our client-centric approach, ensuring that each solution is tailored to meet the unique needs and objectives of our clients.</h1>
     </div>

    <div className='btn-centerd'>
    <button className='btnEdit'> Learn More </button>
    </div>

     <div className="box2">
      <img className="imageCrop" src='https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2020/07/CDG_blog_post_image_08.jpg' />
     </div>
     </div>


      <div>
      <BlogsCards />
      </div>
    </div>

    <Footer />
    </div>
  );
}
 
export default Home;