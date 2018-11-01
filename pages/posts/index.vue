<template>
<div class="posts-page">
<PostList :posts="loadedPosts"/>
</div>
</template>


<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
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
    }, 1000);
  }
};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
