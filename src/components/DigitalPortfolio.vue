<template>
      <!-- 'portfolio' section design and elements -->
  <section class="portfolio" id="portfolio">
    <div class="portfolio-header">
      <h2 class="heading">Digital <span>Portfolio</span></h2>
      <p>We've curated a collection of YouTube videos highlighting our professional expertise. I challenge our audience to watch any video on your channel and <strong>not</strong> take away a new practicality that could be used same-day.  I take content creation requests for varying finance and technology business needs, so feel free to contact me and let's put something together. Follow the link below. Enjoy the content!</p>
    </div>
    <div class="portfolio-contents">
      <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"
        class="portfolio-contents-consulting has-background-video">
        <BackgroundVideo fileName="0226.mp4" />
        <h3>Consulting</h3>
      </a>
    </div>
    <a href="#contact" class="universal-btn">Work Together</a>
  </section>
</template>

<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
}

.portfolio-header {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.portfolio-contents {
  display: flex;
  width: 100%;
  /* Ensure the flex container spans the entire width */
  /* min-height: calc(100vh - 200px); */
  /* Adjust the height as needed */
  margin-bottom: 6rem;
  gap: 2.5rem;
  justify-content: center;
}

.portfolio-header p {
  margin-bottom: 4rem;
  font-size: 1.6rem;
}

.portfolio-contents>a {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dk-blue);
  border-radius: 2rem;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  /* Add a subtle box shadow */
  transition: transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  /* Add transition for scaling and box shadow */
  cursor: pointer;
  max-width: 500px;
  height: 350px;
  min-width: 200px;
  border: 2px solid transparent;
}

.portfolio .background-video {
  opacity: .3;
  border-radius: 2rem;
}

.portfolio-contents h3 {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: white;
}

.portfolio-contents>a:hover {
  transform: scale(1.01);
  /* Scale up slightly on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Increase box shadow on hover */
}

.portfolio-contents>a:hover {
  border-color: var(--main-color);
  /* Add a border on hover */
}

.portfolio-contents-consulting,
.portfolio-contents-coaching {
  padding: 1rem;
  /* Optional: Add additional styling specific to each subsection */
}

.portfolio>.universal-btn {
  max-width: 250px;
  margin-bottom: 5rem;
}

@media (max-width: 768px) {
    .portfolio-contents {
      flex-direction: column;
      align-items: center;
      /* Stack items vertically on smaller screens */
    }

  .portfolio-contents>a {
    width: 100%;
    /* Set anchor tags to full width */
    margin-bottom: 1rem;
    /* Add spacing between stacked items */
  }
}
</style>