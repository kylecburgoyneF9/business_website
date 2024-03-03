<template>
  <!-- 'home' section design and elements -->
  <section class="home" id="home">
    <div class="home-content">
      <h1>Kyle Burgoyne</h1>
      <div class="">
        <h3>Life Coach & Fractional CFO</h3>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at cupiditate laborum quae facere
        debitis ipsam quasi, natus quibusdam officiis fugit repellat veniam totam asperiores doloremque nobis.
      </p>

      <div class="btn-box">
        <a href="#contact" class="btn">Let's Talk</a>
        <a href="https://minnect.com/become-an-expert/#download" target="_blank" class="btn">Minnect</a>
        <a href="../assets/Kyle_Burgoyne_CV_2024.pdf" class="btn" download="../assets/Kyle_Burgoyne_CV_2024.pdf">Download
          CV</a>
      </div>
    </div>

    <div class="home-sci">
      <a href="https://github.com/kylecburgoyneF9" target="_blank"><box-icon type='logo' name='github'></box-icon></a>
      <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"><box-icon name='youtube'
          type='logo'></box-icon></a>
      <a href="https://www.instagram.com/kylecburgoyne/" target="_blank"><box-icon name='instagram-alt'
          type='logo'></box-icon></a>
      <a href="https://www.linkedin.com/in/kyle-burgoyne-4824927b/" target="_blank"><box-icon name='linkedin'
          type='logo'></box-icon></a>
    </div>
  </section>

  <!-- 'about' section design and elements -->
  <section class="about" id="journey">
    <h2 class="heading">About <span>Me</span></h2>

    <div class="about-img">
      <img src="../assets/Home/Self-BW.jpg" alt="">
      <span class="circle-spin"></span>
    </div>

    <div class="about-content">
      <h3>Life Coach & Fractional CFO</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolorum recusandae saepe magni
        eveniet provident voluptate cupiditate sapiente vero numquam soluta non amet voluptatem ipsam eius quam
        molestias pariatur, eaque a! Minus repudiandae sapiente asperiores aliquid magnam iste vel quis officiis
        odio laudantium numquam minima, dolorem officia esse, quidem ipsa.
      </p>
      <div class="home-about-btn">
        <router-link :to="{ path: '/consulting', hash: '#my-career' }" scroll="{ behavior: 'smooth' }"
          class="universal-btn">My
          Career</router-link>
        <router-link :to="{ path: '/coaching', hash: '#my-journey' }" scroll="{ behavior: 'smooth' }"
          class="universal-btn">My
          Journey</router-link>
      </div>
    </div>
  </section>

  <!-- 'services' section design and elements -->
  <section class="services" id="services">
    <h2 class="heading">Consulting <span>Services</span></h2>

    <div class="services-container">
      <router-link :to="{ path: '/consulting', hash: '#consulting-fractional-cfo' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <box-icon name='line-chart'></box-icon>
        <h3>Fractional CFO Services</h3>
        <p>Leverage my financial modeling, accounting, and data analysis expertise to unlock strategic insights for your
          business.</p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-automation-solutions' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <box-icon name='cog' type='solid'></box-icon>
        <h3>Automation Solutions</h3>
        <p>Upgrade your workflows with the latest AI and automation solutions available. (VBA Macros, MS Power Automate,
          APIs)</p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-integration-solutions' }"
        scroll="{ behavior: 'smooth' }" class="services-box">
        <box-icon name='intersect'></box-icon>
        <h3>Integration Solutions</h3>
        <p>Unlock your organization's potential by bridging the gap between disparate IT systems with integration
          solutions.</p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-web-development' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <box-icon name='line-chart'></box-icon>
        <h3>Web Development</h3>
        <p>Engage me to craft full-stack web and web3 applications to empower your business's success.</p>
      </router-link>
    </div>
  </section>

  <!-- 'coaching' section design and elements -->
  <section class="coaching" id="coaching">
    <h2 class="heading"> Life <span>Coaching</span></h2>
    <p>Fitness & Health | Masculinity & Confidence | Relationships & Heartbreak | Career Development | Accountability
      Coaching |
      Childhood Trauma</p>

    <div class="coaching-container">
      <router-link :to="{ path: '/coaching', hash: '#coaching-fitness' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Fitness.webp" alt="">
        <div class="coaching-layer">
          <h4>Fitness & Health</h4>
          <p>Accomplish your fitness goals through discipline and consistency</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-masculinity' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Masculinity.webp" alt="">
        <div class="coaching-layer">
          <h4>Masculinity & Confidence</h4>
          <p>Build the strongest and most confident version of yourself</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-relationships' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Relationships.webp" alt="">
        <div class="coaching-layer">
          <h4>Relationships & Heartbreak</h4>
          <p>Improve your current relationship or rebuild yourself stronger than ever</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-career' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Career.webp" alt="">
        <div class="coaching-layer">
          <h4>Career Development</h4>
          <p>Develop technical skills and improve your earnings potential</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-accountability' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Accountability.webp" alt="">
        <div class="coaching-layer">
          <h4>Accountability Coaching</h4>
          <p>Find more discipline and self-control than you've ever known</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-childhood' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Childhood.webp" alt="">
        <div class="coaching-layer">
          <h4>Childhood Trauma</h4>
          <p>Heal your wounded inner child and shatter your limiting beliefs</p>
        </div>
      </router-link>
    </div>
  </section>

  <!-- 'portfolio' section design and elements -->
  <section class="portfolio" id="portfolio">
    <div class="portfolio-header">
      <h2 class="heading">Digital <span>Portfolio</span></h2>
      <p>I've curated a collection of YouTube videos highlighting my professional expertise and coaching skills. Depending
        on what you are looking for, follow either link below and enjoy the content. I take content creation requests for
        both business and self-development topics, so feel free to contact me and let's put something together.
      </p>
    </div>
    <div class="portfolio-contents">
      <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"
        class="portfolio-contents-consulting">Consulting</a>
      <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"
        class="portfolio-contents-coaching">Coaching</a>
    </div>
    <a href="#contact" class="universal-btn">Work Together</a>
  </section>

  <!-- 'reviews' section design and elements -->
  <section class="reviews" id="reviews">
    <h2 class="heading">My <span>Reviews</span></h2>
    <div class="review-cards-container">
      <div class="review-card-contents">
        <div class="review-card-img">
          <img src="../assets/Home/Self.jpeg" alt="">
        </div>
        <div class="review-card-text">
          <h3>Name and Title</h3>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi asperiores doloremque perspiciatis
            voluptatum sunt totam esse at repudiandae autem!"</p>
        </div>
      </div>
      <div class="review-card-contents">
        <div class="review-card-img">
          <img src="../assets/Home/Self.jpeg" alt="">
        </div>
        <div class="review-card-text">
          <h3>Name and Title</h3>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi asperiores doloremque perspiciatis
            voluptatum sunt totam esse at repudiandae autem!"</p>
        </div>
      </div>
      <div class="review-card-contents">
        <div class="review-card-img">
          <img src="../assets/Home/Self.jpeg" alt="">
        </div>
        <div class="review-card-text">
          <h3>Name and Title</h3>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi asperiores doloremque perspiciatis
            voluptatum sunt totam esse at repudiandae autem!"</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 'contact' section design and elements -->
  <section class="contact" id="contact">
    <h2 class="heading">Contact <span>Me!</span></h2>
    <form action="#">
      <div class="input-box">
        <div class="input-field">
          <input type="text" placeholder="Full Name" required>
        </div>
        <div class="input-field">
          <input type="email" placeholder="Email Address" required>
        </div>
      </div>
      <div class="input-box">
        <div class="input-field">
          <input type="tel" placeholder="Mobile Number" required>
        </div>
        <div class="input-field">
          <input type="text" placeholder="Email Subject" required>
        </div>
      </div>
      <div class="textarea-field">
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
      </div>
      <div class="btn-box btns">
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';

onMounted(() => {
  const servicesBoxes = document.querySelectorAll('.services-container .services-box');

  // Initialize variables to keep track of the tallest heights for h3 and p tags
  let tallestH3Height = 0;
  let tallestPHeight = 0;
  let maxHeight = 0;

  // Loop through each services box
  servicesBoxes.forEach(box => {
    // Get the height of the h3 and p elements within the current box
    const h3Height = box.querySelector('h3').offsetHeight;
    const pHeight = box.querySelector('p').offsetHeight;
    const boxHeight = box.getBoundingClientRect().height;

    // Update the tallest heights if the current heights are taller
    if (h3Height > tallestH3Height) {
      tallestH3Height = h3Height;
    }
    if (pHeight > tallestPHeight) {
      tallestPHeight = pHeight;
    }
    if (boxHeight > maxHeight) {
      maxHeight = boxHeight;
    }
  });

  // Set the min-height of all h3 and p elements within each box to the tallest heights found
  servicesBoxes.forEach(box => {
    box.querySelector('h3').style.minHeight = tallestH3Height + 'px';
    box.querySelector('p').style.minHeight = tallestPHeight + 'px';
    box.style.height = `${maxHeight}px`;
  });
});
</script>

<style scoped></style>
