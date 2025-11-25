import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Gemini-2.0/",   // <-- यह लाइन ज़रूरी है (repo का नाम)
})
