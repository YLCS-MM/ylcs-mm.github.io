---
layout: page
title: "🐾成霜·喵喵分类库🐾"
permalink: /categories/
description: "按主题浏览所有喵文～"
---

<!-- 🎀 甘城猫猫风格 - 浅蓝为主色调 -->
<style>
/* 页面整体样式 */
.categories-container {
    background: linear-gradient(135deg, #f0f8ff, #e6f7ff);
    min-height: 100vh;
    padding: 20px;
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
}

/* 页面头部 */
.categories-header {
    text-align: center;
    padding: 40px 0 30px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    margin: 0 auto 30px;
    max-width: 90%;
    box-shadow: 0 10px 30px rgba(135, 206, 235, 0.2);
    border: 2px solid #87ceeb;
}

.categories-title {
    color: #4682b4;
    font-size: 2.5em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.categories-subtitle {
    color: #5f9ea0;
    font-size: 1.2em;
    margin-bottom: 15px;
}

/* 分类云 - 浅蓝色主题 */
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
    background: linear-gradient(45deg, #87ceeb, #4682b4);
    color: white;
    padding: 10px 18px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(135, 206, 235, 0.3);
    position: relative;
}

.category-tag:hover {
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.3);
}

.category-count {
    background: rgba(255, 255, 255, 0.3);
    padding: 3px 8px;
    border-radius: 12px;
    margin-left: 5px;
    font-size: 0.9em;
}

/* 分类内容区 - 白色卡片 */
.category-section {
    background: rgba(255, 255, 255, 0.98);
    border-radius: 15px;
    padding: 25px;
    margin: 25px auto;
    max-width: 90%;
    box-shadow: 0 5px 20px rgba(135, 206, 235, 0.15);
    border: 2px solid #b0e0e6;
}

.category-name {
    color: #4682b4;
    font-size: 1.8em;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #87ceeb;
    display: flex;
    align-items: center;
}

.category-name::before {
    content: '📁';
    margin-right: 10px;
    font-size: 1.2em;
}

/* 文章列表 */
.posts-list {
    list-style: none;
    padding: 0;
}

.post-item {
    background: linear-gradient(135deg, #ffffff, #f8fdff);
    border: 1px solid #b0e0e6;
    border-radius: 10px;
    padding: 15px;
    margin: 12px 0;
    transition: all 0.3s ease;
    position: relative;
}

.post-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(135, 206, 235, 0.2);
    border-color: #87ceeb;
}

.post-link {
    color: #4682b4;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1em;
    display: block;
    margin-bottom: 5px;
}

.post-link:hover {
    color: #ff69b4;
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
    background: rgba(135, 206, 235, 0.1);
    padding: 3px 8px;
    border-radius: 10px;
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
    color: #87ceeb;
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
    
    .category-section {
        padding: 20px;
        margin: 20px auto;
    }
    
    .post-item {
        padding: 12px;
    }
    
    .post-meta {
        gap: 10px;
    }
}
</style>

<div class="categories-container">
    <!-- 🎯 页面头部 -->
    <header class="categories-header">
        <h1 class="categories-title">🐱 喵喵分类库</h1>
        <p class="categories-subtitle">按主题浏览所有喵文～</p>
    </header>

    <!-- 🎯 分类云 -->
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

    <!-- 🎯 分类内容 -->
    <main class="categories-content">
        {% if site.categories.size > 0 %}
            {% for category in site.categories %}
            <section class="category-section" id="{{ category[0] | slugify }}">
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
            <!-- 🎯 空状态 -->
            <div class="empty-categories">
                <div class="empty-icon">📭</div>
                <h3>还没有分类哦</h3>
                <p>快去写一些喵文并添加分类吧～</p>
            </div>
        {% endif %}
    </main>
</div>

<!-- 🎯 平滑滚动效果 -->
<script>
// 分类云链接平滑滚动
document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-tag[href^="#"]');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
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
});
</script>
