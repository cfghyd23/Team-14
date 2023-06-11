import React from 'react';
import logo from "../../assets/img/blog/logo.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import './Testinomial.css';


const Testinomial = () => (
   <div>
    
    <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-6">
          <header classNameName="header d-flex align-items-right sticky-top" id="header">
    <div classNameName="container-fluid d-flex align-items-center justify-content-between">

    <a classNameName="logo d-flex align-items-center me-auto me-xl-0" href="index.html">
        <img src={logo} alt="Logo"/>
        <h1>MARPU</h1>
      </a>
      </div>
      </header>
          </div>
          <div classNameName="col-md-3">
          </div>
          <div classNameName="col-md-3">
          <nav id="navmenu" classNameName="navmenu">
        <ul>
          <li><a href="about.html" >Home</a></li>
          <li><a href="/testinomial" classNameName="active">Testimonials</a></li>
        </ul>
      </nav>

          </div>
        </div>
    </div>
    <body className="blog-page">
<header className="header d-flex align-items-center sticky-top" id="header">
  <div className="container-fluid d-flex align-items-center justify-content-between">

    <a className="logo d-flex align-items-center me-auto me-xl-0" href="index.html">
      <img src="assets/img/blog/logo.jpg" alt="Logo"/>
      <h1>Marpu</h1>
      <span>.</span>
    </a>

   
    <nav id="navmenu" className="navmenu">
      <ul>
        
        <li><a href="about.html">Home</a></li>
        <li><a href="blog.html" className="active">Testimonials</a></li>
      
      </ul>

      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

  </div>
</header>

<main id="main">
  <section id="testimonials" className="testimonials">

    <div className="container">

      <div className="row align-items-center">

        <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
          <h3>Testimonials</h3>
          <p>
            <u>Marpu Foundation:</u> Where life transformation begins. 
            Join us to make a lasting impact through volunteering, 
            sustainable development, and environmental conservation. 
            Together, we create a more just, sustainable, and compassionate world.
          </p>
        </div>

        <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">

          <div className="swiper">
           
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="d-flex">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Manish</h3>
                      <h4>Intern</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Volunteering with Marpu Foundation has been a life-changing experience. 
                      Their commitment to sustainable development and empowering communities is truly inspiring. 
                      I'm grateful for the opportunity to contribute to their impactful projects.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="d-flex">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Sara</h3>
                      <h4>Volunteer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Marpu Foundation played a crucial role in supporting our women's empowerment initiative.
                       Their guidance and resources helped us create sustainable livelihood 
                      opportunities for marginalized women. We are grateful for their dedication to creating positive change.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="d-flex">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Sarah</h3>
                      <h4>Volunteer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>I had the privilege of attending a workshop organized 
                      by Marpu Foundation on environmental conservation. The knowledge and skills I gained have empowered me to make
                       eco-friendly choices in my daily life.
                        They are doing incredible work to create a greener future.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="d-flex">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Malik</h3>
                      <h4>Volunteer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Marpu Foundation's commitment to ensuring access to education for underprivileged children is commendable. Through their educational programs, 
                      they are transforming lives and giving hope to those who need it the most. 
                      I've witnessed the impact firsthand.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="d-flex">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>John</h3>
                      <h4>Intern</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>I had the pleasure of collaborating with Marpu Foundation on a 
                      community development project. Their inclusive approach and genuine care for the community made the project a success.
                       It's heartwarming to see their dedication to making a positive impact.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>

      </div>

    </div>

  </section>

</main>


<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>
<script src="assets/vendor/aos/aos.js"></script>

<script src="assets/js/main.js"></script>

</body>


   </div>

);

export default Testinomial;