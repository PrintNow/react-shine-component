import react from '@vitejs/plugin-react'
import * as path from "path"
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: { // 文件目录缩写配置
      '@': path.resolve('src'),
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
    },
  },
  esbuild: { // 使用到了react17
    jsxInject: `import React from 'react'`,
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ShineComponent',
      formats: ['es', 'umd'],
      fileName: (format) => `shine-component.${ format }.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
})
