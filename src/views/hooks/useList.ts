import axios from "axios";
import { ref, isRef, unref, watchEffect } from "vue";
import type { Ref } from "vue";

export default function useList(url: string | Ref<string>){

  const list = ref<{id: number, title: string}[]>([]);

  const doFetch = () => {
    // unref() 解包可能为 ref 的值
    axios.get(unref(url)).then(res => {
      list.value = res.data;
    })
  }
  
  if (isRef(url)) {
    // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
    watchEffect(doFetch)
  } else {
    // 否则只请求一次
    // 避免监听器的额外开销
    doFetch()
  }

  return list;
}