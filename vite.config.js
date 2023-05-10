import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "",
    test: {
        setupFiles: "./src/setupTests.js",
        globals: true,
        environment: "jsdom",
    },
})
