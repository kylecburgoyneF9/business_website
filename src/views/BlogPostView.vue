<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { posts } from "../content/blog/posts.js";

const route = useRoute();

const post = computed(() =>
  posts.find((article) => article.slug === route.params.slug)
);

watchEffect(() => {
  if (!post.value) return;

  // Page title
  document.title = `${post.value.title} | D3 Finance`;

  // Meta description
  let description = document.querySelector('meta[name="description"]');

  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }

  description.setAttribute("content", post.value.description);

  // Canonical URL
  const canonicalUrl = `https://www.d3.finance/blog/${post.value.slug}`;

  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", canonicalUrl);
});
</script>

<template>
  <main v-if="post" class="post">

    <section class="post-header">
      <div class="post-header-content">

        <router-link to="/blog" class="back-link">
          ← D3 Finance Insights
        </router-link>

        <span class="post-category">
          {{ post.category }}
        </span>

        <h1>{{ post.title }}</h1>

        <p class="post-description">
          {{ post.description }}
        </p>

        <div class="post-meta">
          {{ post.author }} · {{ post.date }}
        </div>

      </div>
    </section>

    <article class="post-content">

      <section
        v-for="(section, index) in post.content"
        :key="index"
        class="post-section"
      >

        <h2 v-if="section.heading">
          {{ section.heading }}
        </h2>

        <p
          v-for="(paragraph, paragraphIndex) in section.paragraphs"
          :key="paragraphIndex"
        >
          {{ paragraph }}
        </p>

      </section>

    </article>

  </main>

  <main v-else class="post-not-found">
    <h1>Article Not Found</h1>

    <router-link to="/blog">
      Return to D3 Finance Insights
    </router-link>
  </main>
</template>

<style scoped>
.post {
  min-height: 100vh;
  background: var(--bg-color);
}

.post-header {
  padding: 13rem 9% 6rem;
  background: var(--dk-blue);
}

.post-header-content {
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  color: var(--main-color);
  font-weight: 600;
}

.post-category {
  display: block;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--main-color);
}

.post-header h1 {
  font-size: 4.8rem;
  line-height: 1.15;
  color: var(--off-white);
  margin-bottom: 2rem;
}

.post-description {
  font-size: 1.9rem;
  line-height: 1.6;
  color: var(--off-white);
  margin-bottom: 2rem;
}

.post-meta {
  font-size: 1.4rem;
  color: var(--off-white);
}

.post-content {
  max-width: 850px;
  margin: 0 auto;
  padding: 7rem 4%;
}

.post-section {
  margin-bottom: 4rem;
}

.post-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--dk-blue);
}

.post-section p {
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.post-not-found {
  min-height: 100vh;
  padding: 15rem 9%;
}

@media (max-width: 768px) {
  .post-header {
    padding: 12rem 4% 5rem;
  }

  .post-header h1 {
    font-size: 3.6rem;
  }

  .post-content {
    padding: 5rem 4%;
  }
}
</style>