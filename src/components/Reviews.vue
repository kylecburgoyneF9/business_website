<template>
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
  border-radius: 50%;
  border: var(--dk-blue) solid;
}

.review-cards-container .review-card-contents .review-card-text h3 {
  font-size: 2.6rem;
}

.review-cards-container .review-card-contents .review-card-text p {
  font-size: 1.5rem;
}

@media (max-width: 600px) {
    .review-cards-container .review-card-contents  {
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }
}
</style>