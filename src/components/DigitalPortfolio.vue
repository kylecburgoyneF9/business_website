<template>
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
        class="portfolio-contents-consulting has-background-video">
        <video ref="video" class="background-video" autoplay playsinline loop muted>
            <source src="../assets/videos/0226.mp4" type="video/mp4">
        </video>
        Consulting
      </a>
      <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"
        class="portfolio-contents-coaching has-background-video">
        <video ref="video" class="background-video" autoplay playsinline loop muted>
            <source src="../assets/videos/0226.mp4" type="video/mp4">
        </video>
        Coaching
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
  height: 100vh;
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
  height: calc(100vh - 200px);
  /* Adjust the height as needed */
  margin-bottom: 6rem;
  gap: 2.5rem;
  justify-content: center;
}

.portfolio-header p {
  margin-bottom: 4rem;
  font-size: 1.5rem;
}

.portfolio-contents>a {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-radius: 2rem;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  /* Add a subtle box shadow */
  transition: transform 0.6s ease, box-shadow 0.3s ease;
  /* Add transition for scaling and box shadow */
  cursor: pointer;
  max-width: 500px;
  min-height: 200px;
  min-width: 200px;
}

.portfolio-contents>a:hover {
  transform: scale(1.01);
  /* Scale up slightly on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Increase box shadow on hover */
}

.portfolio-contents>a:hover {
  border: 2px solid var(--main-color);
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