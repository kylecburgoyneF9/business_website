<template>
      <!-- 'reviews' section design and elements -->
  <section class="reviews" id="reviews">
    <h2 class="heading">My <span>Reviews</span></h2>
    <div class="review-cards-container">
      <div class="review-card-contents">
        <div class="review-card-img">
          <img src="../assets/Home/Glenn_Image.png" alt="">
        </div>
        <div class="review-card-text">
          <h3>Glenn McClelland - Retired CEO / CFO</h3>
          <p>"I worked with Kyle in a start-up effort for a solar services company.  Kyle is one of those rare individuals who can effectively analyze a situation and provide their own direction to do what needs to be done.  Kyle is intelligent, self-motivated and a problem solver who understands the relationship between responsibility and accountability!  With Kyle's ambition and ability to work as part of a team, I would recommend Kyle to any organization looking for a manager with virtually unlimited upside potential.  "</p>
        </div>
      </div>
      <div class="review-card-contents">
        <div class="review-card-img">
          <img src="../assets/Home/Jeff_Image.jpeg" alt="">
        </div>
        <div class="review-card-text">
          <h3>Jeff Bunge - </h3>
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
</template>

<style scoped>
.reviews {
  background: white;
}

.review-cards-container {
  display: flex;
  flex-direction: column;
  /* Ensure cards stack vertically */
  align-items: center;
  /* Center cards horizontally */
}

.reviews h2 {
  margin-bottom: 4rem;
}

.review-cards-container .review-card-contents {
  display: flex;
  align-items: center;
  background-color: var(--second-bg-color);
  padding: 2rem;
  /*border-radius: 5%;*/
  margin-bottom: 2rem;
  padding: 10px 20px;
  gap: 2rem;
  border: var(--dk-blue) solid 1.5px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
}

.review-cards-container .review-card-contents .review-card-img img {
  width: 18rem; /* Adjust the width as needed */
  height: 18rem; /* Adjust the height as needed */
  border-radius: 50%;
  border: var(--dk-blue) solid;
}

.review-cards-container .review-card-contents .review-card-text h3 {
  font-size: 2.6rem;
}

.review-cards-container .review-card-contents .review-card-text p {
  font-size: 1.5rem;
}

@media (max-width: 700px) {
    .review-cards-container .review-card-contents  {
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }
}
</style>