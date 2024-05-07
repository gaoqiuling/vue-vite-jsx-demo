<script lang="jsx">
import {useCountStore} from '@/stores/conter.ts'
export default defineComponent({
  setup() {
    const countStore=useCountStore();
    const count = ref(0);
    return () => (
          <el-button type="primary" 
          onclick={ () => { count.value++; }}> 
          count is {count.value} ;store doublecount is:{countStore.doubleCount}
          </el-button>
    )
  },
})
</script>
