<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

   <AppControlInput v-model="editedPost.title">Title</AppControlInput>

   <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>

   <AppControlInput
             control-type="textarea"
             v-model="editedPost.content">Content</AppControlInput>

   <AppButton type="submit">Save</AppButton>

   <AppButton
             type="button"
             style="button-btn"
             btn-style="cancel"
             @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppButton from "@/components/UI/AppButton";
import AppControlInput from "@/components/UI/AppControlInput";
export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnailLink: "",
            content: ""
          }
    };
  },
  methods: {
    onSave() {
      //save the post
      console.log(this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style>
.button-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
