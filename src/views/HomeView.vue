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
        <a href="#" class="btn">Let's Talk</a>
        <a href="#" class="btn">Minnect</a>
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
    <h2 class="heading">My <span>Journey</span></h2>

    <div class="about-img">
      <img src="../assets/Home/Self.jpeg" alt="">
      <span class="circle-spin"></span>
    </div>

    <div class="about-content">
      <h3>Life Coach & Fractional CFO</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolorum recusandae saepe magni
        eveniet provident voluptate cupiditate sapiente vero numquam soluta non amet voluptatem ipsam eius quam
        molestias pariatur, eaque a! Minus repudiandae sapiente asperiores aliquid magnam iste vel quis officiis
        odio laudantium numquam minima, dolorem officia esse, quidem ipsa.
      </p>
      <div class="btn-box btns">
        <a href="#" class="btn">Read More</a>
      </div>
    </div>
  </section>

  <!-- 'services' section design and elements -->
  <section class="services" id="services">
    <h2 class="heading">Consulting <span>Services</span></h2>

    <div class="services-container">
      <router-link to="/" class="services-box">
        <box-icon name='line-chart'></box-icon>
        <h3>Fractional CFO Services</h3>
        <p>Leverage my financial modeling, accounting, and data analysis expertise to unlock strategic insights for your
          business.</p>
      </router-link>
      <router-link to="/" class="services-box">
        <box-icon name='cog' type='solid'></box-icon>
        <h3>Automation Solutions</h3>
        <p>Upgrade your workflows with the latest AI and automation solutions available. (VBA Macros, MS Power Automate,
          APIs)</p>
      </router-link>
      <router-link to="/" class="services-box">
        <box-icon name='intersect'></box-icon>
        <h3>Integration Solutions</h3>
        <p>Unlock your organization's potential by bridging the gap between disparate IT systems with integration
          solutions.</p>
      </router-link>
      <router-link to="/" class="services-box">
        <box-icon name='line-chart'></box-icon>
        <h3>Fractional CFO Services</h3>
        <p>Leverage my financial modeling, accounting, and data analysis expertise to unlock strategic insights for your
          business.</p>
      </router-link>
      <router-link to="/" class="services-box">
        <box-icon name='cog' type='solid'></box-icon>
        <h3>Automation Solutions</h3>
        <p>Upgrade your workflows with the latest AI and automation solutions available. (VBA Macros, MS Power Automate,
          APIs)</p>
      </router-link>
      <router-link to="/" class="services-box">
        <box-icon name='intersect'></box-icon>
        <h3>Integration Solutions</h3>
        <p>Unlock your organization's potential by bridging the gap between disparate IT systems with integration
          solutions.</p>
      </router-link>
    </div>
  </section>

  <!-- 'coaching' section design and elements -->
  <section class="coaching" id="coaching">
    <h2 class="heading"> Life <span>Coaching</span></h2>
    <p>Fitness & Health | Masculinity & Confidence | Relationships & Heartbreak | Career Development | Accountability |
      Childhood Trauma</p>

    <div class="coaching-container">
      <router-link to="/" class="coaching-box">
        <img src="../assets/Home/portfolio1.jpg" alt="">
        <div class="coaching-layer">
          <h4>Fitness & Health</h4>
          <p>Accomplish your fitness goals through discipline and consistency</p>
        </div>
      </router-link>
      <router-link to="/" class="coaching-box">
        <img src="../assets/Home/portfolio2.jpg" alt="">
        <div class="coaching-layer">
          <h4>Masculinity & Confidence</h4>
          <p>Build the strongest and most confident version of yourself</p>
        </div>
      </router-link>
      <router-link to="/" class="coaching-box">
        <img src="../assets/Home/portfolio3.jpg" alt="">
        <div class="coaching-layer">
          <h4>Relationships & Heartbreak</h4>
          <p>Improve your current relationship or rebuild yourself stronger than ever</p>
        </div>
      </router-link>
      <router-link to="/" class="coaching-box">
        <img src="../assets/Home/portfolio4.jpg" alt="">
        <div class="coaching-layer">
          <h4>Career Development</h4>
          <p>Develop technical skills and improve your earnings potential</p>
        </div>
      </router-link>
      <router-link to="/" class="coaching-box">
        <img src="../assets/Home/portfolio5.jpg" alt="">
        <div class="coaching-layer">
          <h4>Accountability</h4>
          <p>Find more discipline and self-control than you've ever known</p>
        </div>
      </router-link>
      <router-link to="/" class="coaching-box">
        <img src="../assets/Home/portfolio6.jpg" alt="">
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
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolorum recusandae saepe magni
        eveniet provident voluptate cupiditate sapiente vero numquam soluta non amet voluptatem ipsam eius quam
        molestias pariatur, eaque a! Minus repudiandae sapiente asperiores aliquid magnam iste vel quis officiis
        odio laudantium numquam minima, dolorem officia esse, quidem ipsa.
      </p>
    </div>
    <div class="portfolio-contents">
      <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"
        class="portfolio-contents-consulting">Consulting</a>
      <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"
        class="portfolio-contents-coaching">Coaching</a>
    </div>
    <a href="#" class="universal-btn">Work Together</a>
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
          <p>Quote</p>
        </div>
      </div>
      <div class="review-card-contents">
        <div class="review-card-img">
          <img src="../assets/Home/Self.jpeg" alt="">
        </div>
        <div class="review-card-text">
          <h3>Name and Title</h3>
          <p>Quote</p>
        </div>
      </div>
      <div class="review-card-contents">
        <div class="review-card-img">
          <img src="../assets/Home/Self.jpeg" alt="">
        </div>
        <div class="review-card-text">
          <h3>Name and Title</h3>
          <p>Quote</p>
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
  // Get all the h3 elements
  const h3Elements = document.querySelectorAll('.services-container .services-box h3');

  // Initialize a variable to keep track of the tallest height
  let tallestHeight = 0;

  // Loop through each h3 element to find the tallest one
  h3Elements.forEach(h3Element => {
    // Get the height of the current h3 element
    const height = h3Element.offsetHeight;

    // Update the tallestHeight if the current height is taller
    if (height > tallestHeight) {
      tallestHeight = height;
    }
  });

  // Set the min-height of all h3 elements to the tallest height found
  h3Elements.forEach(h3Element => {
    h3Element.style.minHeight = tallestHeight + 'px';
  });
});
</script>

<style scoped></style>
