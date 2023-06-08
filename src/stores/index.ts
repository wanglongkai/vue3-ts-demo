import axios from 'axios';
import { defineStore } from 'pinia';
import { reactive, toRefs, computed } from 'vue';

const useUserStore = defineStore('user', () => {
  // state
  const user = reactive({
    name: 'wlk',
    age: 25,
    count: 100
  })

  // getter
  const doubleCount = computed(() => {
    return user.count * 2;
  })

  // action, 可以有异步操作
  const getUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    user.name = res.data[0].name;
  }

  return {
    ...toRefs(user),
    doubleCount,
    getUser
  }
})

export default useUserStore;