function Index() {
  return (
    <div>
      <section id="header">
        <div class="header container">
          <div class="nav-bar">
            <div class="brand">
              <a href="#hero">
                <h1>
                  <span>CHRIS</span>TELLA <span>UFITE</span>YEZU
                </h1>
              </a>
            </div>
            <div class="nav-list">
              <div class="hamburger">
                <div class="bar"></div>
              </div>
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#projects">projects</a>
                </li>
                <li>
                  <a href="#blogs">blogs</a>
                </li>
                <li>
                  <a href="#contact">Contacts</a>
                </li>
                <li>
                  <a href="./html/login.html" class="login-button">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hero">
        <div class="hero container">
          <div class="myProfile">
            <div>
              <img src="./img/IMG_4040.jpeg" alt="" />
            </div>

            <div class="hero-text-mobile hidden">
              <h1>
                Hello, <span></span>
              </h1>
              <h1>
                My Name is <span></span>
              </h1>
              <h1>
                Christella <span></span>
              </h1>
              <a href="#projects" type="button" class="cta">
                Portfolio
              </a>
            </div>
          </div>
          <div class="hero-text">
            <h1>
              Hello, <span></span>
            </h1>
            <h1>
              My Name is <span></span>
            </h1>
            <h1>
              Christella <span></span>
            </h1>
            <a href="#projects" type="button" class="cta">
              Portfolio
            </a>
          </div>
        </div>
      </section>

      <section id="skills" class="skills container">
        <div class="slide-container swiper">
          <div class="skills-top">
            <h1 class="section-title">
              Sk<span>i</span>lls
            </h1>
          </div>
          <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
              <div class="card swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src="./img/html.png" alt="html" class="card-img" />
                  </div>
                </div>
              </div>

              <div class="card swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src="./img/css1.jpg" alt="html" class="card-img" />
                  </div>
                </div>
              </div>

              <div class="card swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src="./img/js1.png" alt="html" class="card-img" />
                  </div>
                </div>
              </div>

              <div class="card swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src="./img/java.png" alt="html" class="card-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-next swiper-navBtn"></div>
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <script src="./js/swiper-bundle.min.js"></script>

      <script src="./js/swiper-script.js"></script>

      <section id="about">
        <div class="about container">
          <div class="col-left">
            <div class="about-img">
              <img src="./img/IMG_4040.jpeg" alt="img" />
            </div>
          </div>
          <div class="col-right">
            <h1 class="section-title">
              About <span>me</span>
            </h1>
            <h2>Software Engineer</h2>
            <p>
              I'm a seasoned software engineer who's always looking for fresh
              approaches to common issues.I've developed my collaborative and
              analytical thinking during my five years in this field. I value
              working with a team because Talent wins games but teamwork and
              intelligence wins championships.
            </p>
            <a href="https://chrill-christella.github.io/CV-page/" class="cta">
              My CV
            </a>
          </div>
        </div>
      </section>

      <section id="projects">
        <div class="projects container">
          <div class="projects-header">
            <h1 class="section-title">
              Recent <span>Projects</span>
            </h1>
          </div>
          <div class="all-projects">
            <div class="project-item">
              <div class="project-img">
                <img src="./img/1.jpg" alt="img" />
              </div>
              <div class="project-info">
                <h1>Project 1</h1>
                <h2>Online CV</h2>
                <p>
                  Developing a website includes also designing the layout, user
                  interface, defining the site's architecture and more.
                </p>
              </div>
            </div>
            <div class="project-item">
              <div class="project-img">
                <img src="./img/2.jpg" alt="img" />
              </div>
              <div class="project-info">
                <h1>Project 2</h1>
                <h2>Loopstudios</h2>
                <p>
                  Developing a website includes also designing the layout, user
                  interface, defining the site's architecture and more.
                </p>
              </div>
            </div>
            <div class="project-item">
              <div class="project-img">
                <img src="./img/3.jpg" alt="img" />
              </div>
              <div class="project-info">
                <h1>Project 3</h1>
                <h2>My brand</h2>
                <p>
                  Developing a website includes also designing the layout, user
                  interface, defining the site's architecture and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blogs">
        <div class="services container">
          <div class="service-top">
            <h1 class="section-title">
              Bl<span>o</span>gs
            </h1>
          </div>
          <div class="service-bottom">
            <div class="service-item">
              <a href="./html/viewblog.html">
                <h2>Why Lead Generation is Key for Business Growth</h2>
                <p>
                  Developing a website includes also designing the layout, user
                  interface, defining the site's architecture and more.
                </p>
              </a>
            </div>

            <div class="service-item">
              <a href="./html/viewblog.html">
                <h2>Why Lead Generation is Key for Business Growth</h2>
                <p>
                  Developing a website includes also designing the layout, user
                  interface, defining the site's architecture and more.
                </p>
              </a>
            </div>

            <div class="service-item">
              <a href="./html/viewblog.html">
                <h2>Why Lead Generation is Key for Business Growth</h2>
                <p>
                  Developing a website includes also designing the layout, user
                  interface, defining the site's architecture and more.
                </p>
              </a>
            </div>
          </div>
          <a href="./html/blog.html" class="btn">
            view more
          </a>
        </div>
      </section>
      <script src="./js/blog-validation.js"></script>

      <section id="contact" class="contact">
        <div class="contact container">
          <div>
            <h1 class="section-title">
              Contact <span>us</span>
            </h1>
          </div>
          <div id="error"></div>
          <div class="contact-allinfo">
            <form id="contact-form" action="#" method="POST">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                class="input-field"
              />
              <div class="name_error"></div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                class="input-field"
              />
              <div class="email_error"></div>
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="70"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                class="input-field"
              ></textarea>
              <div class="message_error"></div>
              <div class="submit-button">
                <input
                  type="submit"
                  value="Send"
                  id="submit-btn"
                  class="submit-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      <script src="./js/contact-validation.js"></script>

      <section id="footer">
        <div class="footer container">
          <div class="brand">
            <h1>
              <span> chris</span>tella <span>Ufite</span>yezu
            </h1>
          </div>
          <h2>Together we can do great.</h2>
          <div class="social-icon">
            <div class="social-item">
              <a href="#">
                <iconify-icon
                  icon="ic:baseline-facebook"
                  style="color: white"
                  width="50"
                  height="50"
                ></iconify-icon>
              </a>
            </div>
            <div class="social-item">
              <a href="#">
                <iconify-icon
                  icon="mdi:instagram"
                  style="color: white"
                  width="50"
                  height="50"
                ></iconify-icon>
              </a>
            </div>
            <div class="social-item">
              <a href="#">
                <iconify-icon
                  icon="mdi:twitter"
                  style="color: white"
                  width="50"
                  height="50"
                ></iconify-icon>
              </a>
            </div>
            <div class="social-item">
              <a href="#">
                <iconify-icon
                  icon="mdi:linkedin"
                  style="color: white"
                  width="50"
                  height="50"
                ></iconify-icon>
              </a>
            </div>
          </div>
          <p>Copyright © 2022 Christella. All rights reserved</p>
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));