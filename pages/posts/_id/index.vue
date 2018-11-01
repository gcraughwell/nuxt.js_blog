<template>
<div class="single-page-post">
  <section class="post">
<h1 class="post-title">{{ loadedPost.title }}</h1>
<div class="post-details">
  <div class="post-detail">last updated on: {{ loadedPost.updatedDate }}</div>
  <div class="post-detail">Author: {{ loadedPost.author }}</div>
</div>
<p class="post-content"> {{loadedPost.content }}</p>
  </section>
  <section class="post-feedback">
    <p> Tell me what you think of my post <a href="mailto:wuerh@dfsghsd.com">email</a></p>
  </section>
</div>
</template>
<script>
//cant use this in asyncdata as its on the server not the client
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1",
          title: "title (ID:" + context.route.params.id + ")",
          author: "Gaz",
          updatedDate: new Date(),
          content: "this is the content",
          previewText: "preview text 1",
          thumbnail:
            "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
        }
      });
    }, 1500);
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}
.post-content {
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
