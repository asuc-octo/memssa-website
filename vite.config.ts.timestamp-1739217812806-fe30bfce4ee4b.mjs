// vite.config.ts
import { defineConfig } from "file:///C:/Users/andre/Desktop/memssa-website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/andre/Desktop/memssa-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/Users/andre/Desktop/memssa-website/node_modules/vite-plugin-static-copy/dist/index.js";
import tailwindcss from "file:///C:/Users/andre/Desktop/memssa-website/node_modules/tailwindcss/lib/index.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbmRyZVxcXFxEZXNrdG9wXFxcXG1lbXNzYS13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbmRyZVxcXFxEZXNrdG9wXFxcXG1lbXNzYS13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hbmRyZS9EZXNrdG9wL21lbXNzYS13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5JztcclxuXHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW3JlYWN0KCksIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgICB0YXJnZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzogJ3NyYy9hc3NldHMvaW1hZ2VzLyoqLyonLFxyXG4gICAgICAgICAgICAgICAgZGVzdDogJ2Fzc2V0cy9pbWFnZXMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KV0sXHJcbiAgY3NzOiB7XHJcbiAgICBwb3N0Y3NzOiB7XHJcbiAgICAgICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKV0sXHJcblxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5KUEcnLCcqKi8qLlBORyddLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJTLFNBQVMsb0JBQW9CO0FBQ3hVLE9BQU8sV0FBVztBQUNsQixTQUFTLHNCQUFzQjtBQUUvQixPQUFPLGlCQUFpQjtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWU7QUFBQSxJQUM5QixTQUFTO0FBQUEsTUFDTDtBQUFBLFFBQ0ksS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLE1BQ1Y7QUFBQSxJQUNKO0FBQUEsRUFDSixDQUFDLENBQUM7QUFBQSxFQUNKLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNILFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFBQSxJQUUzQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGVBQWUsQ0FBQyxZQUFXLFVBQVU7QUFDekMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
