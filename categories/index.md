---
layout: page
title: "🐱 喵喵分类库"
permalink: /categories/
description: "按主题浏览所有喵文～"
---

<!-- 🎀 甘城猫猫风格CSS -->
<style>
/* 页面基础样式 */
.categories-container {
    background: linear-gradient(135deg, #f0f8ff, #fff0f5);
    min-height: 100vh;
    padding: 20px;
    position: relative;
    z-index: 1;
}

/* 🎯 看板娘强制定位到右下角 */
#waifu, .live2d-widget {
    position: fixed !important;
    right: 20px !important;
    bottom: 20px !important;
    left: auto !important;
    top: auto !important;
    z-index: 9999 !important;
    pointer-events: auto !important;
}

/* 移动端看板娘调整 */
@media (max-width: 768px) {
    #waifu, .live2d-widget {
        right: 10px !important;
        bottom: 10px !important;
        transform: scale(0.7) !important;
    }
}

/* 页面内容样式 */
.categories-header {
    text-align: center;
    padding: 40px 0;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    margin: 0 auto 30px;
    max-width: 90%;
    box-shadow: 0 10px 30px rgba(135, 206, 235, 0.2);
}

.category-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin: 30px auto;
}

.category-tag {
    background: linear-gradient(45deg, #87ceeb, #4682b4);
    color: white;
    padding: 10px 18px;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.category-tag:hover {
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    transform: translateY(-2px);
}
</style>

<div class="categories-container">
    <header class="categories-header">
        <h1>🐱 喵喵分类库</h1>
        <p>按主题浏览所有喵文～</p>
    </header>

    <!-- 🎯 单一分类云（避免重复） -->
    <div class="category-cloud">
        {% for category in site.categories %}
        <a href="#{{ category[0] | slugify }}" class="category-tag">
            {{ category[0] }} ({{ category[1].size }})
        </a>
        {% endfor %}
    </div>

    <!-- 🎯 单一内容区（避免重复） -->
    <main>
        {% for category in site.categories %}
        <section class="category-section" id="{{ category[0] | slugify }}">
            <h2>{{ category[0] }} ({{ category[1].size }}篇)</h2>
            {% for post in category[1] %}
            <article>
                <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                <p>{{ post.date | date: "%Y/%m/%d" }}</p>
            </article>
            {% endfor %}
        </section>
        {% endfor %}
    </main>
</div>

<!-- 🎯 看板娘位置修复脚本 -->
<script>
// 等待页面完全加载
window.addEventListener('load', function() {
    // 强制看板娘位置
    const waifuElements = document.querySelectorAll('#waifu, .live2d-widget, [class*="waifu"], [class*="live2d"]');
    waifuElements.forEach(el => {
        el.style.cssText = 'position:fixed !important; right:0 !important; bottom:0 !important; z-index:9999 !important;';
    });
    
    // 防止内容重复
    const mainSections = document.querySelectorAll('.category-section');
    if (mainSections.length > 1) {
        for (let i = 1; i < mainSections.length; i++) {
            mainSections[i].remove();
        }
    }
});
</script>
