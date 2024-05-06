<script lang="jsx">
export default defineComponent({
  setup() {
    const count = ref(0);

    return () => (
          <el-button type="primary" 
          onclick={ () => { count.value++; }}> 
          count is {count.value}
          </el-button>
    )
  },
})
</script>
