const path = require("path");

module.exports = {
  resolve: {
    alias: {
      BlogStyles: path.resolve(__dirname, "src/components/Blog/Blog.styles.js"), // Шлях до стилів
    },
  },
  // Інші налаштування Webpack, якщо вони потрібні
};
