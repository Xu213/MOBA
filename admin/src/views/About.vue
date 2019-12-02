<template>
  <div class="content">
    <h1>Supper Man （{{username}}）欢迎您！</h1>
  </div>
</template>
<style lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  data() {
    return {
      id: "",
      username: ""
    };
  },
  methods: {
    async fetch() {
      this.id = sessionStorage.id;
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.username = res.data.username;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
