---
layout: default
title: "🐱 分类测试页"
permalink: /categories/
---

<!-- 🎯 这是完全空白的测试页面 -->
<div style="text-align: center; padding: 50px; font-family: 'Comic Sans MS', '微软雅黑', sans-serif;">
    <h1 style="color: #4682b4;">🐱 空白测试页面</h1>
    <p style="color: #666;">这是一个干净的测试页面，没有任何复杂代码</p>
    <div style="margin: 30px; padding: 20px; background: #f0f8ff; border-radius: 15px;">
        <p>✅ 页面加载成功！</p>
        <p>📝 接下来可以逐步添加功能</p>
    </div>
</div>

<!-- 🎯 基础样式重置 -->
<style>
/* 确保没有外部样式干扰 */
body {
    background: white !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Comic Sans MS', '微软雅黑', sans-serif !important;
}

/* 隐藏所有可能存在的侧边栏 */
.sidebar, .column.one-third, .aside, [class*="sidebar"] {
    display: none !important;
}

/* 确保主要内容全宽 */
.container, .content, .columns, .column.two-thirds {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    float: none !important;
}
</style>

<!-- 🎯 控制台检测脚本 -->
<script>
console.log('🐱 空白测试页面加载成功');
console.log('📋 当前布局:', 'default');
console.log('🔗 页面路径:', window.location.pathname);

// 检查是否有残留元素
document.addEventListener('DOMContentLoaded', function() {
    const sidebars = document.querySelectorAll('.sidebar, .aside, [class*="sidebar"]');
    if (sidebars.length > 0) {
        console.warn('发现侧边栏元素:', sidebars.length);
        sidebars.forEach(sidebar => sidebar.remove());
    }
    
    console.log('✅ 页面清理完成');
});
</script>
