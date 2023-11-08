import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { loadEnv } from "./config/envConfig"

const env = loadEnv()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": env,
  },
  resolve: {
    alias: {
      "@Components": "./src/components/index.ts",
      "@UI": "./src/ui-kit/index.ts",
      "@Store": "./src/store/index.ts",
      "@Hooks": "./src/hooks/index.ts",
      "@ReduxHooks": "./src/app/index.ts",
      "@Utils": "./src/utils/index.ts",
      "@Features": "./src/features/index.ts",
      "@IconResume": "./src/ui-kit/icons/resume/index.ts",
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
