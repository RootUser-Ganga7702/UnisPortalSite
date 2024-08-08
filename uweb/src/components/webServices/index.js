const servicesData = [
    {
      title: 'Frontend Development',
      description:
        'Craft beautiful and responsive interfaces with HTML, CSS, and JavaScript frameworks like React, Angular, and Vue.js.',
      image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
    },
    {
      title: 'Backend Development',
      description:
        'Server-side development of web applications, focusing on the underlying logic, databases, and server infrastructure that powers the application. Backend development deals with the core application functionality.',
      image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
    },
    {
      title: 'UI/UX Design',
      description:
        'UI/UX design is a field that focuses on creating products that are both visually appealing and user-friendly. This involves understanding user needs, conducting research, and designing intuitive interfaces.',
      image: 'https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093995.jpg?t=st=1722461486~exp=1722465086~hmac=f558db1e2c35c0cdf740a29abb0c7c5e2112b192213248e240365eb0e69a9c35&w=900',
    },
    {
      title: 'SEO Optimization',
      description:
        
      'SEO (Search Engine Optimization) is the process of improving your websites visibility and ranking in search engine results pages It involves a combination of techniques to make your website more attractive to search engines and users',
      image: 'https://img.freepik.com/free-vector/seo-optimization-banner_33099-1690.jpg?ga=GA1.2.1875529303.1722459408&semt=ais_hybrid',
    },
    {
      title: 'Deployment & Maintenance',
      description:
        'Ensure your website runs smoothly with our reliable deployment and maintenance services Ensure your website runs smoothly with our reliable deployment and maintenance services.',
      image: 'https://img.freepik.com/free-vector/flat-design-cms-concept-illustration_23-2148796509.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
    },
  ];
  
  const WebServices = ()=>{
    return(
      <div className="cards-container">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="card-content">
                <h3 >{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
    )
  }

  export default WebServices