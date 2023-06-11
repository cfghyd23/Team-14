import React from 'react';
import logo from "../../assets/img/blog/logo.jpg";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import pic from "../../assets/img/blog/img.jpg";
import pic1 from "../../assets/img/blog/img1.jpg"
import pic2 from "../../assets/img/blog/img2.jpg"
import pic3 from "../../assets/img/blog/img3.jpg"
import pic4 from "../../assets/img/blog/img4.jpg"
import pic5 from "../../assets/img/blog/img5.jpg"
import pic6 from "../../assets/img/blog/img6.jpg"
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate=useNavigate()

  const f=()=>{
    navigate('/login')
  }
  return (
    <div>
    
    <div className="container">
        <div className="row">
          <div className="col-md-6">
          <header className="header d-flex align-items-right sticky-top" id="header">
    <div className="container-fluid d-flex align-items-center justify-content-between">

    <a className="logo d-flex align-items-center me-auto me-xl-0" href="index.html">
        <img src={logo} alt="Logo"/>
        <h1>MARPU</h1>
      </a>
      </div>
      </header>
          </div>
          <div className="col-md-3">
          </div>
          <div className="col-md-3">
          <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="about.html" className="active">Home</a></li>
          <li><a href="/testinomial">Testimonials</a></li>
        </ul>
        <i classNameName="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
          </div>
        </div>
    </div>
    <main id="main">

<section id="index" class="about bg-success" >

  <div class="container">
    <div class="row align-items-xl-center gy-5">

      <div class="col-xl-5 content">
        <h1>MARPU</h1>
        <h4>CHANGE WITHIN TO CHANGE THE WORLD
          SUSTAINABLE DEVELOPMENT GOALS | VOLUNTEERING | ADVOCACY</h4>
        <p>Marpu Foundation, founded by National Youth Awardee Mr. Kadiri Raghu Vamsi, is a leading NGO in India. We focus on volunteering, sustainable development, environmental conservation, women empowerment, and advocating for important causes. Our team is driven by compassion and a desire to create positive change. Join us in our mission to build a more just, 
          sustainable, and compassionate world.
           We were awarded "The Best NGO in India" in 2020.</p>
      </div>

      <div class="col-xl-7">
        <div class="row gy-4 icon-boxes">

          <div class="col-md-12" data-aos="fade-up" data-aos-delay="200">
            <div class="post-img">
              <img src={pic} alt="" class="img-fluid"/>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</section>
<section id="recent-posts" class="recent-posts">

  
  <div class="container section-title" data-aos="fade-up">
    <h2>OUR CAMPAIGNS</h2>
  </div>

  <div class="container">

    <div class="row gy-4">

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <article>

          <div class="post-img">
          <img src={pic1} alt="" class="img-fluid"/>
          </div>

          <h2 class="title">
            <a href="blog-details.html">Decent Work and Economic Growth</a><br/><br/>
            <p class="post-category">Ensure access to affordable, reliable, sustainable, 
              and modern energy for all.</p>
              <button type="button"  onClick={f}class="btn btn-success">Join Campaign</button>

          </h2>

          
        </article>
      </div>

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <article>

          <div class="post-img">
          <img src={pic2} alt="" class="img-fluid"/>
          </div>

          <h2 class="title">
            <a href="blog-details.html">Clean Water and Sanitation</a><br/><br/>
            <p class="post-category">Ensure availability and sustainable management of
               water and sanitation for all.</p>
               <button type="button" class="btn btn-success">Join Campaign</button>

          </h2>

        </article>
      </div>
      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <article>

          <div class="post-img">
          <img src={pic3} alt="" class="img-fluid"/>
          </div>

          <h2 class="title">
            <a href="blog-details.html">Good Health and Well-Being</a><br/><br/>
            <p class="post-category">Ensure healthy lives and promote well-being for all at all ages.</p>
            <button type="button" class="btn btn-success">Join Campaign</button>

          </h2>

        </article>
      </div>
      <br/>
      <br/>

    </div>
    <div class="row gy-4">

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <article>

          <div class="post-img">
          <img src={pic4} alt="" class="img-fluid"/>
          </div>

          <h2 class="title">
            <a href="blog-details.html">Life Below Water</a><br/><br/>
            <p class="post-category">Conserve and sustainably use the oceans, seas,
               and marine resources for sustainable development.</p>
               <button type="button" class="btn btn-success">Join Campaign</button>

          </h2>

        </article>
      </div>

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <article>

          <div class="post-img">
          <img src={pic5} alt="" class="img-fluid"/>
          </div>

          <h2 class="title">
            <a href="blog-details.html">Life On Land</a><br/><br/>
            <p class="post-category">Protect, restore, and promote the sustainable use of 
              terrestrial ecosystems, forests, and biodiversity.</p>
              <button type="button" class="btn btn-success">Join Campaign</button>

          </h2>

        </article>
      </div>

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
        <article>

          <div class="post-img">
          <img src={pic6} alt="" class="img-fluid"/>
          </div>

          <h2 class="title">
            <a href="blog-details.html">Quality Education</a><br/><br/>
            <p class="post-category">Ensure inclusive and equitable quality education 
              and promote lifelong learning opportunities for all.</p>
              <button type="button" class="btn btn-success">Join Campaign</button>

          </h2>

        </article>
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </div>

    </div>

  </div>

</section>

</main>

   </div>
  )

  };

export default Header;