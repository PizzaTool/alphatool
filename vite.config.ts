import { defineConfig } from "vite";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "./",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: any) =>
            ["appkit-button", "appkit-network-button"].includes(tag),
        },
      },
    }),
    AutoImport({
      imports: [
        "vue", // 自动导入 ref、reactive、computed 等
        "vue-router", // 自动导入 useRoute、useRouter
        "pinia", // 自动导入 defineStore 等
      ],
      dts: "src/types/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ["src/components"], // 默认扫描的组件目录
      extensions: ["vue"],
      dts: "src/types/components.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    open: false,
    port: 8080,
  },
  build: {
    sourcemap: false,
    minify: "terser",
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
