<script lang="jsx">
import HelloWorld from './components/HelloWorld.vue'
import JsxDemo from './components/JsxDemo.vue'
export default defineComponent({
  setup() {
    return () => (
      <>
        <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
        <JsxDemo />
        <HelloWorld msg="Vite + Vue" />
      </>
    )
  },
})

</script>
