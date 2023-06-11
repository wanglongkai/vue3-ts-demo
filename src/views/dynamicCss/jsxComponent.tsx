import { defineComponent } from "vue"

export default defineComponent({
  setup(){
    return {
      items: ['wanglongkai', 'wlk', 'wanglk']
    }
  },
  render(){
    return <ul>
      {this.items.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </ul> 
  }
})