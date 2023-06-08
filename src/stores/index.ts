import axios from 'axios';
import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

const useUserStore = defineStore('user', () => {
  const user = reactive({
    name: 'wlk',
    age: 25,
    count: 100
  })
  const getUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    user.name = res.data[0].name;
  }
  return {
    ...toRefs(user),
    getUser
  }
})

export default useUserStore;