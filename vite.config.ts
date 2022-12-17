import path from 'path'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import EslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import type { ConfigEnv, UserConfig } from 'vite'

const config = ({ command, mode }: ConfigEnv): UserConfig => {
  console.log('vite.config.ts command:', command)
  let env: Record<string, string>
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(
      process.argv[3] === '--mode' ? process.argv[4] : process.argv[3],
      process.cwd()
    )
  } else {
    env = loadEnv(mode, process.cwd())
  }
  return {
    base: env.VITE_BASE_PATH,
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
    },
    server: {
      host: '0.0.0.0',
      port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),
      strictPort: true,
      open: true,
    },
    build: {
      minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
      chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
      assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true',
        },
        // output: {
        //   entryFileNames: `assets/[name].${Date.now()}.js`,
        //   chunkFileNames: `assets/[name].${Date.now()}.js`,
        //   assetFileNames: `assets/[name].${Date.now()}.[ext]`,
        //   compact: true,
        //   manualChunks: {
        //     vue: ['vue', 'vue-router', 'pinia'],
        //     echarts: ['echarts'],
        //   },
        // },
      },
    },
    plugins: [
      vue(),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'], // 检查的文件
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        // globalComponentsDeclaration
        dts: true,
        // customLoaderMatcher
        include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // Specify symbolId format
        symbolId: 'icon-[name]',
      }),
    ],
    optimizeDeps: {
      include: ['vue', 'vue-types', '@iconify/iconify', '@vueuse/core'],
    },
  } as UserConfig
}

export default config
