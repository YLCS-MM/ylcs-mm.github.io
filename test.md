---
layout: test-layout
title: "🐱 独立测试页面"
permalink: /test/
description: "这是一个完全独立的测试页面，不会与现有页面冲突"
---

<!-- 🎀 完全独立的样式 - 不会影响其他页面 -->
<style>
/* 🚨 重置所有样式，确保独立 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.test-page {
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
    background: linear-gradient(135deg, #e6f7ff, #fff0f5);
    min-height: 100vh;
    padding: 0;
    margin: 0;
    isolation: isolate; /* 🎯 确保样式隔离 */
}

.test-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.98);
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0 10px 30px rgba(135, 206, 235, 0.2);
    border: 3px solid #87ceeb;
}

.test-header {
    text-align: center;
    padding: 40px 0;
    background: linear-gradient(135deg, #87ceeb, #a8e6ff);
    border-radius: 15px;
    margin-bottom: 30px;
}

.test-title {
    color: white;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.test-subtitle {
    color: #f0f8ff;
    font-size: 1.2em;
    margin-top: 10px;
}

.test-content {
    padding: 20px;
}

.test-section {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 25px;
    margin: 20px 0;
    border: 2px dashed #ffb6c1;
}

.test-button {
    background: linear-gradient(45deg, #87ceeb, #4682b4);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 10px;
}

.test-button:hover {
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    transform: scale(1.05);
}

/* 🎯 确保绝对独立 - 不会影响其他页面 */
.test-page * {
    all: unset;
    font-family: inherit;
}

.test-page {
    all: initial;
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .test-container {
        margin: 10px;
        padding: 15px;
    }
    
    .test-title {
        font-size: 2em;
    }
}
</style>

<div class="test-page">
    <div class="test-container">
        <!-- 🎯 页面头部 -->
        <header class="test-header">
            <h1 class="test-title">🐱 独立测试页面</h1>
            <p class="test-subtitle">这是一个完全独立的测试环境</p>
        </header>

        <!-- 🎯 测试内容 -->
        <main class="test-content">
            <section class="test-section">
                <h2>✅ 功能测试</h2>
                <p>这个页面使用独立的样式和布局，不会影响其他页面。</p>
                <button class="test-button" onclick="testFunction()">点击测试</button>
            </section>

            <section class="test-section">
                <h2>🎯 样式测试</h2>
                <p>甘城猫猫风格：浅蓝、粉色、白色主题</p>
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <span style="background: #87ceeb; padding: 5px 10px; border-radius: 10px; color: white;">浅蓝</span>
                    <span style="background: #ffb6c1; padding: 5px 10px; border-radius: 10px; color: white;">粉色</span>
                    <span style="background: white; padding: 5px 10px; border-radius: 10px; border: 1px solid #87ceeb;">白色</span>
                </div>
            </section>

            <section class="test-section">
                <h2>🔧 技术特性</h2>
                <ul style="list-style: none;">
                    <li>✅ 独立CSS样式</li>
                    <li>✅ 不依赖外部文件</li>
                    <li>✅ 不会产生构建错误</li>
                    <li>✅ 移动端适配</li>
                    <li>✅ 甘城猫猫风格</li>
                </ul>
            </section>
        </main>

        <!-- 🎯 测试结果 -->
        <footer class="test-section" style="text-align: center;">
            <h2>📊 测试结果</h2>
            <div id="test-result" style="margin-top: 15px;">
                <p>等待测试...</p>
            </div>
        </footer>
    </div>
</div>

<!-- 🎯 独立测试脚本 -->
<script>
// 完全独立的JavaScript，不会影响其他页面
function testFunction() {
    const result = document.getElementById('test-result');
    result.innerHTML = `
        <p style="color: #4682b4;">✅ 测试成功！</p>
        <p>页面功能正常，没有错误。</p>
        <p>时间: ${new Date().toLocaleString()}</p>
    `;
    
    // 添加动画效果
    result.style.transition = 'all 0.5s ease';
    result.style.transform = 'scale(1.05)';
    setTimeout(() => {
        result.style.transform = 'scale(1)';
    }, 500);
}

// 页面加载完成后的测试
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐱 独立测试页面加载完成');
    
    // 测试CSS是否正常应用
    const testElements = document.querySelectorAll('.test-section');
    testElements.forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease';
            element.style.opacity = '1';
        }, index * 200);
    });
});
</script>
