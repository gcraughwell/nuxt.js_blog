<template>
  <section class="post-list">
  <PostPreview
  id="1"
  :is-admin="isAdmin"
  thumbnail="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
  title="hello 1"
  previewText="1st post"/>
  <PostPreview
  id="2"
  :is-admin="isAdmin"
  thumbnail="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
  title="hello 2"
  previewText="2nd post"/>
  <PostPreview
  id="3"
  :is-admin="isAdmin"
  thumbnail="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
  title="hello 3"
  previewText="3rd post"/>

  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
