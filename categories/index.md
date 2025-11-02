---
layout: page
title: "🐱 喵喵分类库"
permalink: /categories/
description: "按主题浏览所有喵文～"
---

<!-- 🎀 甘城猫猫风格 - 浅蓝为主，白色点缀，粉色辅助 -->
<style>
/* 页面整体样式 - 浅蓝渐变背景 */
.categories-container {
    background: linear-gradient(135deg, #e6f7ff, #f0f8ff);
    min-height: 100vh;
    padding: 20px;
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
}

/* 页面头部 - 白色卡片点缀 */
.categories-header {
    text-align: center;
    padding: 40px 0 30px;
    background: rgba(255, 255, 255, 0.98);
    border-radius: 20px;
    margin: 0 auto 30px;
    max-width: 90%;
    box-shadow: 0 10px 30px rgba(135, 206, 235, 0.15);
    border: 2px solid #ffb6c1; /* 粉色边框点缀 */
}

.categories-title {
    color: #4682b4; /* 深蓝色标题 */
    font-size: 2.5em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.categories-subtitle {
    color: #5f9ea0;
    font-size: 1.2em;
}

/* 分类云 - 白色背景，粉色辅助 */
.category-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin: 30px auto;
    max-width: 90%;
}

.category-tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.95); /* 白色背景 */
    color: #4682b4; /* 蓝色文字 */
    padding: 10px 18px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 182, 193, 0.3); /* 粉色阴影 */
    border: 2px solid #ffb6c1; /* 粉色边框 */
}

.category-tag:hover {
    background: #ffb6c1; /* 粉色背景 */
    color: white; /* 白色文字 */
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
}

.category-count {
    background: rgba(255, 182, 193, 0.2); /* 浅粉色背景 */
    color: #ff69b4; /* 粉色文字 */
    padding: 3px 8px;
    border-radius: 12px;
    margin-left: 5px;
    font-size: 0.9em;
}

/* 分类内容区 - 白色卡片，粉色点缀 */
.category-content {
    background: rgba(255, 255, 255, 0.98); /* 纯白背景 */
    border-radius: 15px;
    padding: 25px;
    margin: 25px auto;
    max-width: 90%;
    box-shadow: 0 5px 20px rgba(255, 182, 193, 0.2); /* 粉色阴影 */
    border: 2px solid #ffb6c1; /* 粉色边框 */
}

.category-name {
    color: #4682b4; /* 蓝色标题 */
    font-size: 1.8em;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #ffb6c1; /* 粉色下划线 */
    display: flex;
    align-items: center;
}

.category-name::before {
    content: '📁';
    margin-right: 10px;
    font-size: 1.2em;
    color: #ff69b4; /* 粉色图标 */
}

/* 文章列表 - 白色卡片，粉色交互 */
.posts-list {
    list-style: none;
    padding: 0;
}

.post-item {
    background: rgba(255, 255, 255, 0.95); /* 白色背景 */
    border: 1px solid #ffd6e0; /* 浅粉色边框 */
    border-radius: 10px;
    padding: 15px;
    margin: 12px 0;
    transition: all 0.3s ease;
}

.post-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(255, 182, 193, 0.3);
    border-color: #ff69b4; /* 粉色边框 */
}

.post-link {
    color: #4682b4; /* 蓝色链接 */
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1em;
    display: block;
    margin-bottom: 5px;
}

.post-link:hover {
    color: #ff69b4; /* 粉色悬停 */
    text-decoration: underline;
}

.post-meta {
    color: #5f9ea0;
    font-size: 0.9em;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.meta-item {
    background: rgba(255, 182, 193, 0.1); /* 浅粉色背景 */
    padding: 3px 8px;
    border-radius: 10px;
    color: #ff69b4; /* 粉色文字 */
}

/* 空状态样式 */
.empty-categories {
    text-align: center;
    padding: 40px;
    color: #666;
}

.empty-icon {
    font-size: 3em;
    margin-bottom: 15px;
    color: #ffb6c1; /* 粉色图标 */
}

/* 移动端适配 */
@media (max-width: 768px) {
    .categories-container {
        padding: 15px;
    }
    
    .categories-header {
        padding: 30px 0 20px;
        margin: 0 auto 20px;
    }
    
    .categories-title {
        font-size: 2em;
    }
    
    .category-cloud {
        gap: 8px;
    }
    
    .category-tag {
        padding: 8px 15px;
        font-size: 0.9em;
    }
    
    .category-content {
        padding: 20px;
        margin: 20px auto;
    }
}
</style>

<div class="categories-container">
    <!-- 🎯 页面头部 - 白色卡片，粉色边框 -->
    <header class="categories-header">
        <h1 class="categories-title">🐱 喵喵分类库</h1>
        <p class="categories-subtitle">按主题浏览所有喵文～</p>
    </header>

    <!-- 🎯 分类云 - 白色背景，粉色边框 -->
    {% if site.categories.size > 0 %}
    <div class="category-cloud">
        {% for category in site.categories %}
        <a href="#{{ category[0] | slugify }}" class="category-tag">
            {{ category[0] }}
            <span class="category-count">{{ category[1].size }}</span>
        </a>
        {% endfor %}
    </div>
    {% endif %}

    <!-- 🎯 分类内容 - 白色卡片，粉色点缀 -->
    <main class="categories-main">
        {% if site.categories.size > 0 %}
            {% for category in site.categories %}
            <section class="category-content" id="{{ category[0] | slugify }}">
                <h2 class="category-name">
                    {{ category[0] }}
                    <span class="category-count">({{ category[1].size }}篇)</span>
                </h2>
                
                <ul class="posts-list">
                    {% for post in category[1] %}
                    <li class="post-item">
                        <a href="{{ post.url }}" class="post-link">{{ post.title }}</a>
                        <div class="post-meta">
                            <span class="meta-item">📅 {{ post.date | date: "%Y/%m/%d" }}</span>
                            {% if post.tags %}
                            <span class="meta-item">🏷️ {{ post.tags | join: ", " }}</span>
                            {% endif %}
                        </div>
                    </li>
                    {% endfor %}
                </ul>
            </section>
            {% endfor %}
        {% else %}
            <!-- 空状态 -->
            <div class="empty-categories">
                <div style="text-align: center; padding: 40px; color: #666;">
                    <div style="font-size: 3em; margin-bottom: 15px; color: #ffb6c1;">📭</div>
                    <h3>还没有分类哦</h3>
                    <p>快去写一些喵文并添加分类吧～</p>
                </div>
            </div>
        {% endif %}
    </main>
</div>

<!-- 🎯 平滑滚动效果 -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // 分类云平滑滚动
    const categoryLinks = document.querySelectorAll('.category-tag[href^="#"]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
});
</script>

<style>
/* 🎯 强制看板娘定位到右下角 */
#waifu, 
.live2d-widget,
[class*="live2d"],
[class*="waifu"] {
    position: fixed !important;
    right: 0 !important;
    bottom: 0 !important;
    left: auto !important;
    top: auto !important;
    z-index: 9999 !important;
    transform: none !important;
}

/* 🎯 防止看板娘被其他元素覆盖 */
body {
    position: relative;
}

/* 🎯 移动端看板娘位置调整 */
@media (max-width: 768px) {
    #waifu, 
    .live2d-widget {
        right: 10px !important;
        bottom: 10px !important;
        transform: scale(0.8) !important;
    }
}
</style>
