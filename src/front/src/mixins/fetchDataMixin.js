export default {
  data() {
    return {
      todoParams: {
        userId: this.$store.state.user.userId,
        loc: this.$route.name,
      },
    };
  },
  created() {
    this.$store.dispatch('fnFetchList', this.todoParams);
  },
};
