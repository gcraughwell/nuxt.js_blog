<template>
<div class="admin-page">
  <section class="new-post">
<AppButton @click="$router.push('admin/new-post')" class="button">Create Post</AppButton>
</section>
  <section class="existing-posts">
 <h1> Existing Posts</h1>
</section>
<PostList isAdmin/>
</div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI/AppButton";
export default {
  components: {
    PostList,
    AppButton
  }
};
</script>

<style>
.admin-page {
}
.existing-posts {
  display: flex;
  justify-content: center;
  align-items: center;
}
.new-post {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: black;
  color: white;
}
</style>
