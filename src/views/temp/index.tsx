import { ref, defineComponent} from "vue";
import { ElButton } from 'element-plus';

export default defineComponent({
  setup(){
    const count = ref(1)
    const handleChage = () => {
      count.value++;
    }
    const TT = () => <p>xxxxx</p>
    return () => {
      return <div>
        {count.value}
        <TT/>
        <ElButton onClick={handleChage}>click</ElButton>
      </div>
    }
  },
 })