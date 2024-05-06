import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import removeConsole from 'vite-plugin-remove-console'

const timesTamp = new Date().getTime()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      dirs: 'src/pages', // 需要生成路由的文件目录
      exclude: ['**/components/*.vue'], // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
    }),
    Layouts({
      layoutsDirs: 'src/layout', // 布局文件存放目录
      defaultLayout: 'index', // 默认布局，对应 src/layout/index.vue
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n'],
      dts: false,
    }),
    Components({
      dirs: ['src/components'],
      dts: false,
      extensions: ['vue', 'jsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    removeConsole(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 18887,
    strictPort: true,
    changeOrigin: true,
    host: '0.0.0.0', // IP配置，支持从IP启动
    open: true,
    hrm: true,
    proxy: {
      '/dev-api': {
        target: 'http://localhost:8070', //测试环境
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      }
    }
  }
})
