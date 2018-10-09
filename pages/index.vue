<template>
  <div class="home-name">
<section class="intro">
  <h1>Get the latest tech news </h1>
  <section class="featured-post">
    <nuxt-link :to="'/posts/' + 1">
<article class="post-preview">
  <div class="post-thumbnail"></div>
  <div class="post-content"></div>
  <h1> Post Title</h1>
  <p> Preview Text</p>
</article>
    </nuxt-link>
    <nuxt-link :to="'/posts/' + 2">
  <article class="post-preview">
  <div class="post-thumbnail"></div>
  <div class="post-content"></div>
  <h1> Post Title 2</h1>
  <p> Preview Text 2</p>
  </article>
    </nuxt-link>
  </section>

</section>
</div>
</template>
