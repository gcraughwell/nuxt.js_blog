<template>
  <div class="home-page">
    <section class="intro">
        <h1>Get the latest tech news </h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList
  },
  //dynamic data needs to be in this asyncData function not data function
  //ONLY WORKS IN PAGES asyncData
  //this does not work as expected in asyncData
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "title",
            previewText: "preview text 1",
            thumbnail:
              "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
          },
          {
            id: "2",
            title: "title",
            previewText: "preview text 2",
            thumbnail:
              "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
          }
        ]
      });
    }, 1500);
  }

  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
};
</script>



<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url("~assets/images/main-page-background.jpg");
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
