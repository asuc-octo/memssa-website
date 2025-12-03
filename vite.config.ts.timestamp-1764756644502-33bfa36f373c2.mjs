// vite.config.ts
import { defineConfig } from "file:///Users/simonekudia/Desktop/memssa/memssa-website/node_modules/vite/dist/node/index.js";
import react from "file:///Users/simonekudia/Desktop/memssa/memssa-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { viteStaticCopy } from "file:///Users/simonekudia/Desktop/memssa/memssa-website/node_modules/vite-plugin-static-copy/dist/index.js";
import tailwindcss from "file:///Users/simonekudia/Desktop/memssa/memssa-website/node_modules/tailwindcss/lib/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      {
        src: "src/assets/images/**/*",
        dest: "assets/images"
      }
    ]
  })],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  assetsInclude: ["**/*.JPG", "**/*.PNG"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2ltb25la3VkaWEvRGVza3RvcC9tZW1zc2EvbWVtc3NhLXdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zaW1vbmVrdWRpYS9EZXNrdG9wL21lbXNzYS9tZW1zc2Etd2Vic2l0ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2ltb25la3VkaWEvRGVza3RvcC9tZW1zc2EvbWVtc3NhLXdlYnNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XG5cbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpLCB2aXRlU3RhdGljQ29weSh7XG4gICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdzcmMvYXNzZXRzL2ltYWdlcy8qKi8qJyxcbiAgICAgICAgICAgICAgICBkZXN0OiAnYXNzZXRzL2ltYWdlcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pXSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcygpXSxcblxuICAgICAgfSxcbiAgICB9LFxuICAgIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5KUEcnLCcqKi8qLlBORyddLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1UsU0FBUyxvQkFBb0I7QUFDL1YsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsc0JBQXNCO0FBRS9CLE9BQU8saUJBQWlCO0FBR3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZTtBQUFBLElBQzlCLFNBQVM7QUFBQSxNQUNMO0FBQUEsUUFDSSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDVjtBQUFBLElBQ0o7QUFBQSxFQUNKLENBQUMsQ0FBQztBQUFBLEVBQ0osS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ0gsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUFBLElBRTNCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFlBQVcsVUFBVTtBQUN6QyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
