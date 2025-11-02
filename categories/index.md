---
layout: default
title: "成霜·喵喵の分类库"
permalink: /categories/
---

<style>
/* 🎀 与主页一致的甘城猫猫风格 */
:root {
    --main-blue: #87ceeb;
    --dark-blue: #4682b4;
    --main-pink: #ffb6c1;
    --dark-pink: #ff69b4;
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

/* 🎯 与主页相同的头部样式 */
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
    color: var(--main-blue);
    font-size: 1.1em;
}

/* 🎯 分类按钮云 - 水平排列 */
.category-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: 30px 0;
}

.category-button {
    background: linear-gradient(45deg, var(--main-blue), var(--dark-blue));
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(135, 206, 235, 0.3);
}

.category-button:hover {
    background: linear-gradient(45deg, var(--main-pink), var(--dark-pink));
    transform: translateY(-2px);
}

/* 🎯 与主页相同的卡片样式 */
.category-card {
    background: rgba(255, 255, 255, 0.98);
    border-radius: 12px;
    padding: 25px;
    margin: 25px 0;
    box-shadow: 0 5px 20px rgba(135, 206, 235, 0.15);
    border: 1px solid #e0f7fa;
}

.category-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px dashed var(--main-pink);
}

.category-name {
    color: var(--dark-blue);
    font-size: 1.6em;
    margin: 0;
}

.category-count {
    color: var(--dark-pink);
    margin-left: 10px;
}

/* 🎯 文章列表样式 */
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
    border-color: var(--main-blue);
}

.post-title a {
    color: var(--dark-blue);
    text-decoration: none;
    font-weight: 600;
}

.post-title a:hover {
    color: var(--dark-pink);
}

.post-meta {
    color: #666;
    font-size: 0.9em;
    margin-top: 5px;
}

/* 🎯 看板娘强制右下角定位 */
#waifu, .live2d-widget {
    position: fixed !important;
    right: 20px !important;
    bottom: 20px !important;
    left: auto !important;
    top: auto !important;
    z-index: 9999 !important;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .categories-page {
        padding: 15px;
    }
    
    .categories-title {
        font-size: 1.8em;
    }
    
    .category-buttons {
        gap: 8px;
    }
    
    .category-button {
        padding: 8px 16px;
        font-size: 0.9em;
    }
    
    #waifu, .live2d-widget {
        right: 10px !important;
        bottom: 10px !important;
        transform: scale(0.8) !important;
    }
}
</style>

<div class="categories-page">
    <div class="categories-container">
        <!-- 🎯 修改后的标题 -->
        <header class="categories-header">
            <h1 class="categories-title">成霜·喵喵の分类库</h1>
            <p class="categories-subtitle">按主题浏览所有喵文～</p>
        </header>

        <!-- 🎯 分类按钮云 -->
        {% if site.categories.size > 0 %}
        <nav class="category-buttons">
            {% for category in site.categories %}
            <a href="#{{ category[0] | slugify }}" class="category-button">
                {{ category[0] }} ({{ category[1].size }})
            </a>
            {% endfor %}
        </nav>
        {% endif %}

        <!-- 🎯 分类内容 -->
        <main class="categories-content">
            {% if site.categories.size > 0 %}
                {% for category in site.categories %}
                <section class="category-card" id="{{ category[0] | slugify }}">
                    <div class="category-header">
                        <h2 class="category-name">
                            {{ category[0] }}
                            <span class="category-count">({{ category[1].size }}篇)</span>
                        </h2>
                    </div>
                    
                    <div class="posts-list">
                        {% for post in category[1] %}
                        <article class="post-item">
                            <h3 class="post-title">
                                <a href="{{ post.url }}">{{ post.title }}</a>
                            </h3>
                            <div class="post-meta">
                                <span>📅 {{ post.date | date: "%Y/%m/%d" }}</span>
                                {% if post.tags %}
                                <span> | 🏷️ {{ post.tags | join: ", " }}</span>
                                {% endif %}
                            </div>
                        </article>
                        {% endfor %}
                    </div>
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
// 平滑滚动效果
document.addEventListener('DOMContentLoaded', function() {
    // 分类按钮点击平滑滚动
    const buttons = document.querySelectorAll('.category-button[href^="#"]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
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
});
</script>
