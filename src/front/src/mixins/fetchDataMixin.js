import bus from '@/scripts/bus';

export default {
  data() {
    return {
      dataList: this.$store.state.dataList,
    };
  },
  created() {
    this.showDataList();
    bus.$on('addTodo', () => this.showDataList());
    bus.$on('changeDate', () => this.showDataList());
  },
  methods: {
    showDataList() {
      this.$store
        .dispatch('fnFetchList', {
          loc: this.$route.name,
          userId: this.$store.state.user.userId,
          beginDate: this.$store.state.date.yyyymmdd,
        })
        .then(res => {
          this.dataList = res.data.data.todoList;
        });
    },
  },
};
