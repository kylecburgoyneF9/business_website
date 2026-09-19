<script setup>
import { posts } from "../content/blog/posts.js";
</script>

<template>
  <main class="blog">
    <section class="blog-header">
      <div class="blog-header-content">
        <h1>D3 Finance Insights</h1>
        <p>
          Practical financial guidance for business owners, operators,
          and entrepreneurs.
        </p>
      </div>
    </section>

    <section class="blog-content">
      <div class="blog-grid">
        <article
          v-for="post in posts"
          :key="post.slug"
          class="blog-card"
        >
          <span class="blog-category">{{ post.category }}</span>

          <h2>{{ post.title }}</h2>

          <p class="blog-description">
            {{ post.description }}
          </p>

          <div class="blog-card-footer">
            <span>{{ post.date }}</span>

            <router-link :to="`/blog/${post.slug}`">
              Read More →
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.blog {
  min-height: 100vh;
  background: var(--bg-color);
}

.blog-header {
  padding: 14rem 9% 7rem;
  background: var(--dk-blue);
}

.blog-header-content {
  max-width: 900px;
}

.blog-header h1 {
  font-size: 5rem;
  color: var(--main-color);
  margin-bottom: 1.5rem;
}

.blog-header p {
  font-size: 2rem;
  line-height: 1.6;
  color: var(--off-white);
}

.blog-content {
  padding: 7rem 9%;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.blog-card {
  padding: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}

.blog-category {
  display: block;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--main-color);
}

.blog-card h2 {
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
}

.blog-description {
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.blog-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
}

.blog-card-footer a {
  color: var(--main-color);
  font-weight: 600;
}

@media (max-width: 991px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-header {
    padding: 12rem 4% 5rem;
  }

  .blog-content {
    padding: 5rem 4%;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-header h1 {
    font-size: 4rem;
  }
}
</style>