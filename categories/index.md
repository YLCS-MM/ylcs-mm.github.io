---
layout: default
title: "喵喵分类库"
permalink: /categories/
---

<style>
/* 🎀 与主页一致的甘城猫猫风格 */
:root {
    --primary-blue: #87ceeb;
    --dark-blue: #4682b4;
    --accent-pink: #ffb6c1;
    --text-dark: #333;
    --text-light: #666;
}

.categories-page {
    background: linear-gradient(135deg, #f8fdff, #faf0f5);
    min-height: 100vh;
    padding: 20px;
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
}

.categories-container {
    max-width: 1000px;
    margin: 0 auto;
}

/* 🎯 与主页一致的头部样式 */
.categories-header {
    text-align: center;
    padding: 40px 0 30px;
}

.categories-title {
    color: var(--dark-blue);
    font-size: 2.2em;
    margin-bottom: 10px;
    font-weight: bold;
}

.categories-subtitle {
    color: var(--primary-blue);
    font-size: 1.1em;
    margin-bottom: 30px;
}

/* 🎯 分类标签云 - 水平排列 */
.category-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: 30px 0;
    padding: 0 20px;
}

.category-tag {
    background: linear-gradient(45deg, var(--primary-blue), var(--dark-blue));
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(135, 206, 235, 0.3);
}

.category-tag:hover {
    background: linear-gradient(45deg, var(--accent-pink), #ff69b4);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.3);
}

/* 🎯 与主页相同的卡片样式 */
.category-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 25px;
    margin: 25px 0;
    box-shadow: 0 5px 20px rgba(135, 206, 235, 0.15);
    border: 1px solid #e0f7fa;
    transition: all 0.3s ease;
}

.category-section:hover {
    box-shadow: 0 8px 25px rgba(135, 206, 235, 0.25);
}

.section-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px dashed var(--accent-pink);
}

.section-icon {
    font-size: 1.5em;
    margin-right: 12px;
    color: var(--accent-pink);
}

.section-title {
    color: var(--dark-blue);
    font-size: 1.6em;
    margin: 0;
}

.post-count {
    color: var(--accent-pink);
    margin-left: 10px;
    font-size: 0.9em;
}

/* 🎯 文章列表样式 - 与主页一致 */
.posts-list {
    list-style: none;
    padding: 0;
}

.post-item {
    background: linear-gradient(135deg, #ffffff, #fafafa);
    border: 1px solid #e0f0f5;
    border-radius: 8px;
    padding: 15px;
    margin: 12px 0;
    transition: all 0.3s ease;
}

.post-item:hover {
    transform: translateX(5px);
    border-color: var(--primary-blue);
    box-shadow: 0 5px 15px rgba(135, 206, 235, 0.2);
}

.post-title {
    margin: 0 0 5px 0;
}

.post-title a {
    color: var(--dark-blue);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1em;
}

.post-title a:hover {
    color: #ff69b4;
    text-decoration: underline;
}

.post-meta {
    color: var(--text-light);
    font-size: 0.9em;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

/* 🎯 看板娘定位修复 */
#waifu, .live2d-widget {
    position: fixed !important;
    right: 20px !important;
    bottom: 20px !important;
    left: auto !important;
    top: auto !important;
    z-index: 9999 !important;
}

/* 🎯 防止内容重复 */
.categories-content > *:nth-child(n+2) {
    display: none !important;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .categories-page {
        padding: 15px;
    }
    
    .categories-title {
        font-size: 1.8em;
    }
    
    .category-tags {
        gap: 8px;
        padding: 0 10px;
    }
    
    .category-tag {
        padding: 8px 16px;
        font-size: 0.9em;
    }
    
    .category-section {
        padding: 20px;
        margin: 20px 0;
    }
    
    #waifu, .live2d-widget {
        right: 10px !important;
        bottom: 10px !important;
    }
}

/* 🎯 加载动画 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.category-section {
    animation: fadeInUp 0.6s ease;
}
</style>

<div class="categories-page">
    <div class="categories-container">
        <!-- 🎯 修改后的标题 -->
        <header class="categories-header">
            <h1 class="categories-title">喵喵分类库</h1>
            <p class="categories-subtitle">按主题浏览所有喵文～</p>
        </header>

        <!-- 🎯 分类标签云 -->
        {% if site.categories.size > 0 %}
        <nav class="category-tags">
            {% for category in site.categories %}
            <a href="#{{ category[0] | slugify }}" class="category-tag">
                {{ category[0] }} ({{ category[1].size }})
            </a>
            {% endfor %}
        </nav>
        {% endif %}

        <!-- 🎯 分类内容 - 确保只渲染一次 -->
        <main class="categories-content">
            {% if site.categories.size > 0 %}
                {% for category in site.categories %}
                <section class="category-section" id="{{ category[0] | slugify }}">
                    <div class="section-header">
                        <span class="section-icon">📁</span>
                        <h2 class="section-title">
                            {{ category[0] }}
                            <span class="post-count">({{ category[1].size }}篇喵文)</span>
                        </h2>
                    </div>
                    
                    <ul class="posts-list">
                        {% for post in category[1] %}
                        <li class="post-item">
                            <h3 class="post-title">
                                <a href="{{ post.url }}">{{ post.title }}</a>
                            </h3>
                            <div class="post-meta">
                                <span class="meta-item">
                                    <span>📅</span>
                                    {{ post.date | date: "%Y/%m/%d" }}
                                </span>
                                {% if post.tags %}
                                <span class="meta-item">
                                    <span>🏷️</span>
                                    {{ post.tags | join: ", " }}
                                </span>
                                {% endif %}
                            </div>
                        </li>
                        {% endfor %}
                    </ul>
                </section>
                {% endfor %}
            {% else %}
                <div style="text-align: center; padding: 40px; color: #666;">
                    <div style="font-size: 3em; margin-bottom: 15px;">📭</div>
                    <h3>还没有分类哦</h3>
                    <p>快去写一些喵文并添加分类吧～</p>
                </div>
            {% endif %}
        </main>
    </div>
</div>

<script>
// 确保内容只加载一次
document.addEventListener('DOMContentLoaded', function() {
    // 移除可能的重复元素
    const sections = document.querySelectorAll('.category-section');
    if (sections.length > 1) {
        for (let i = 1; i < sections.length; i++) {
            sections[i].remove();
        }
    }
    
    // 平滑滚动效果
    const tags = document.querySelectorAll('.category-tag[href^="#"]');
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop - headerOffset;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 看板娘位置强制修复
    setTimeout(() => {
        const waifuElements = document.querySelectorAll('#waifu, .live2d-widget');
        waifuElements.forEach(el => {
            el.style.cssText = 'position:fixed !important; right:20px !important; bottom:20px !important; z-index:9999 !important;';
        });
    }, 1000);
});
</script>
