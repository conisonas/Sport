import { defineStore } from "pinia";
import { ref } from "vue";

export  const useUserStore = defineStore('useUserStore', () => {
  const user = ref(null);
  function setUser (value1) {
    user.value = value1 ? value1.user : null;
  }

  return { user ,setUser}; // 将数据暴露出去，共享给需要的组件
});

