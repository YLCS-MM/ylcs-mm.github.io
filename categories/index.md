---
layout: default
title: "🐱 喵喵分类库"
permalink: /categories/
---

<style>
/* 🎀 甘城猫猫风格配色 */
:root {
    --neko-blue-light: #87ceeb;    /* 浅蓝 */
    --neko-blue-dark: #4682b4;     /* 深蓝 */
    --neko-pink: #ffb6c1;          /* 粉色 */
    --neko-pink-dark: #ff69b4;     /* 深粉 */
    --neko-white: #ffffff;         /* 白色 */
}

/* 页面基础样式 */
.categories-page {
    background: linear-gradient(135deg, #f0f8ff, #fff0f5);
    min-height: 100vh;
    padding: 20px;
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
}

.categories-container {
    max-width: 1000px;
    margin: 0 auto;
}

/* 页面头部 */
.categories-header {
    text-align: center;
    padding: 40px 0 30px;
}

.categories-title {
    color: var(--neko-blue-dark);
    font-size: 2.5em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.categories-subtitle {
    color: var(--neko-blue-light);
    font-size: 1.2em;
    margin-bottom: 30px;
}

/* 分类按钮云 - 水平排列 */
.category-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin: 30px 0;
    padding: 0 20px;
}

.category-button {
    display: inline-flex;
    align-items: center;
    background: linear-gradient(45deg, var(--neko-blue-light), var(--neko-blue-dark));
    color: var(--neko-white);
    padding: 12px 25px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(135, 206, 235, 0.3);
    position: relative;
    overflow: hidden;
}

.category-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
}

.category-button:hover::before {
    left: 100%;
}

.category-button:hover {
    background: linear-gradient(45deg, var(--neko-pink), var(--neko-pink-dark));
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
}

.button-count {
    background: rgba(255, 255, 255, 0.3);
    padding: 3px 8px;
    border-radius: 12px;
    margin-left: 8px;
    font-size: 0.9em;
}

/* 分类内容卡片 */
.categories-content {
    margin-top: 40px;
}

.category-card {
    background: var(--neko-white);
    border-radius: 15px;
    padding: 30px;
    margin: 30px 0;
    box-shadow: 0 10px 30px rgba(135, 206, 235, 0.15);
    border: 2px solid var(--neko-blue-light);
    position: relative;
    overflow: hidden;
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--neko-blue-light), var(--neko-pink));
}

.category-header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px dashed var(--neko-pink);
}

.category-icon {
    font-size: 2em;
    margin-right: 15px;
    color: var(--neko-pink);
}

.category-name {
    color: var(--neko-blue-dark);
    font-size: 1.8em;
    margin: 0;
}

.category-count {
    color: var(--neko-pink-dark);
    font-size: 1em;
    margin-left: 10px;
}

/* 文章列表 */
.posts-list {
    list-style: none;
    padding: 0;
}

.post-item {
    background: linear-gradient(135deg, #f8fdff, #faf0f5);
    border: 1px solid #e0f7fa;
    border-radius: 10px;
    padding: 15px 20px;
    margin: 15px 0;
    transition: all 0.3s ease;
    position: relative;
}

.post-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(135, 206, 235, 0.2);
    border-color: var(--neko-blue-light);
}

.post-item::before {
    content: '📄';
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
}

.post-content {
    margin-left: 40px;
}

.post-title {
    margin: 0 0 5px 0;
}

.post-title a {
    color: var(--neko-blue-dark);
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 600;
}

.post-title a:hover {
    color: var(--neko-pink-dark);
    text-decoration: underline wavy var(--neko-pink);
}

.post-meta {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    color: #666;
    font-size: 0.9em;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.meta-date {
    color: var(--neko-blue-light);
}

.meta-tags {
    color: var(--neko-pink-dark);
}

/* 空状态样式 */
.empty-categories {
    text-align: center;
    padding: 60px 20px;
    color: #666;
}

.empty-icon {
    font-size: 4em;
    margin-bottom: 20px;
    color: var(--neko-pink);
}

.empty-title {
    color: var(--neko-blue-dark);
    margin-bottom: 10px;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .categories-page {
        padding: 15px;
    }
    
    .categories-title {
        font-size: 2em;
    }
    
    .category-buttons {
        gap: 10px;
        padding: 0 10px;
    }
    
    .category-button {
        padding: 10px 20px;
        font-size: 1em;
    }
    
    .category-card {
        padding: 20px;
        margin: 20px 0;
    }
    
    .category-header {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .category-icon {
        margin-right: 0;
    }
    
    .post-item {
        padding: 12px 15px;
    }
    
    .post-content {
        margin-left: 30px;
    }
    
    .post-meta {
        gap: 10px;
    }
}

/* 平滑滚动锚点 */
.category-section {
    scroll-margin-top: 20px;
}
</style>

<div class="categories-page">
    <div class="categories-container">
        <!-- 🎯 页面头部 -->
        <header class="categories-header">
            <h1 class="categories-title">🐱 喵喵分类库</h1>
            <p class="categories-subtitle">按主题浏览所有喵文～</p>
        </header>

        <!-- 🎯 分类按钮云 -->
        {% if site.categories.size > 0 %}
        <nav class="category-buttons">
            {% for category in site.categories %}
            <a href="#{{ category[0] | slugify }}" class="category-button">
                {{ category[0] }}
                <span class="button-count">{{ category[1].size }}</span>
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
                        <span class="category-icon">📁</span>
                        <h2 class="category-name">
                            {{ category[0] }}
                            <span class="category-count">({{ category[1].size }}篇喵文)</span>
                        </h2>
                    </div>
                    
                    <ul class="posts-list">
                        {% for post in category[1] %}
                        <li class="post-item">
                            <div class="post-content">
                                <h3 class="post-title">
                                    <a href="{{ post.url }}">{{ post.title }}</a>
                                </h3>
                                <div class="post-meta">
                                    <span class="meta-item meta-date">
                                        <span>📅</span>
                                        {{ post.date | date: "%Y/%m/%d" }}
                                    </span>
                                    {% if post.tags %}
                                    <span class="meta-item meta-tags">
                                        <span>🏷️</span>
                                        {{ post.tags | join: ", " }}
                                    </span>
                                    {% endif %}
                                </div>
                            </div>
                        </li>
                        {% endfor %}
                    </ul>
                </section>
                {% endfor %}
            {% else %}
                <!-- 🎯 空状态 -->
                <div class="empty-categories">
                    <div class="empty-icon">📭</div>
                    <h3 class="empty-title">还没有分类哦</h3>
                    <p>快去写一些喵文并添加分类吧～</p>
                </div>
            {% endif %}
        </main>
    </div>
</div>

<!-- 🎯 交互效果 -->
<script>
// 平滑滚动效果
document.addEventListener('DOMContentLoaded', function() {
    // 分类按钮点击平滑滚动
    const categoryButtons = document.querySelectorAll('.category-button[href^="#"]');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // 计算偏移量，考虑固定头部
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop - headerOffset;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 文章卡片加载动画
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // URL哈希处理
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.getElementById(window.location.hash.substring(1));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop - headerOffset;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
        }, 500);
    }
});
</script>
