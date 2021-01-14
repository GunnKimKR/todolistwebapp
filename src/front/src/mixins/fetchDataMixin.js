import bus from '@/scripts/bus';
import store from '@/store/store';
import router from '@/router/router';

export default {
  data() {
    return {
      dataList: store.state.dataList,
    };
  },
  created() {
    this.showDataList();
    bus.$on('addTodo', () => this.showDataList());
    bus.$on('changeDate', () => this.showDataList());
  },
  methods: {
    showDataList() {
      store
        .dispatch('fnFetchList', {
          loc: router.name,
          userId: store.state.user.userId,
          beginDate: store.state.date.yyyymmdd,
        })
        .then(res => {
          this.dataList = res.data.data.todoList;
        });
    },
  },
};
