import { defineConfig } from 'vite'
import WindiCSS from "vite-plugin-windicss"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), WindiCSS() ],
})
