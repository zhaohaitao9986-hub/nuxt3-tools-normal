<template>
  <!-- 导航栏 -->
  <nav class="navbar">
    <div class="nav-container">
      <h1 class="nav-title">工具集首页</h1>
    </div>
  </nav>

  <!-- 主体内容 -->
  <main class="main-content">
    <div class="container">
      <!-- 工具卡片网格 -->
      <div class="tools-grid">
        <!-- Base64 编码工具卡片 -->
        <div class="tool-card">
          <div class="card-header">
            <h3 class="card-title">Base64 编码/解码工具</h3>
          </div>
          <p class="card-description">
            快速完成文本/字符串的 Base64 编码与解码操作
          </p>
          <NuxtLink to="/tools/base64" class="button button-primary">
            立即使用
          </NuxtLink>
        </div>

        <!-- URL 编码工具卡片 -->
        <div class="tool-card">
          <div class="card-header">
            <h3 class="card-title">URL 编码/解码工具</h3>
          </div>
          <p class="card-description">
            快速完成 URL 的编码与解码操作，支持多种字符集
          </p>
          <NuxtLink to="/tools/url" class="button button-primary">
            立即使用
          </NuxtLink>
        </div>

        <!-- JSON 工具卡片 -->
        <div class="tool-card">
          <div class="card-header">
            <h3 class="card-title">JSON 格式化工具</h3>
          </div>
          <p class="card-description">
            快速格式化、校验和压缩 JSON 数据，提高开发效率
          </p>
          <NuxtLink to="/tools/json" class="button button-primary">
            立即使用
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
/**
 * 工具集合首页组件
 * 展示所有可用的工具卡片，支持响应式布局
 * 使用 Nuxt3 原生组件 NuxtLink 进行路由导航
 */
</script>

<style scoped>
/* ==================== 全局样式 ==================== */
:root {
  --primary-color: #3b82f6;
  --bg-color: #f8fafc;
  --text-color: #1e293b;
  --text-light: #64748b;
  --border-color: #e2e8f0;
  --shadow-light: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-hover: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto Mono',
    'Helvetica Neue', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* ==================== 导航栏 ==================== */
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-color);
  padding: 1.5rem 1rem;
  box-shadow: var(--shadow-light);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-color);
  letter-spacing: -0.5px;
}

/* ==================== 主体内容 ==================== */
.main-content {
  flex: 1;
  padding: 3rem 1rem;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ==================== 工具卡片网格 ==================== */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* ==================== 工具卡片 ==================== */
.tool-card {
  background-color: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  cursor: pointer;
}

.tool-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
  border-color: var(--primary-color);
}

.card-header {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* ==================== 按钮样式 ==================== */
.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  align-self: flex-start;
}

.button-primary {
  background-color: var(--primary-color);
  color: #000;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.button-primary:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
  color: #ffffff;
}

.button-primary:active {
  transform: translateY(0);
}

/* ==================== 底部 ==================== */
.footer {
  background-color: #ffffff;
  border-top: 1px solid var(--border-color);
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* ==================== 响应式布局 ==================== */

/* 平板设备：2 列布局 */
@media (max-width: 1024px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .nav-title {
    font-size: 1.5rem;
  }

  .main-content {
    padding: 2rem 1rem;
    min-height: calc(100vh - 180px);
  }
}

/* 移动设备：1 列布局 */
@media (max-width: 640px) {
  .tools-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .navbar {
    padding: 1rem;
  }

  .nav-title {
    font-size: 1.25rem;
  }

  .main-content {
    padding: 1.5rem 1rem;
    min-height: calc(100vh - 160px);
  }

  .tool-card {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .button {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
  }

  .footer {
    padding: 1.5rem 1rem;
  }

  .footer-text {
    font-size: 0.85rem;
  }
}
</style>
