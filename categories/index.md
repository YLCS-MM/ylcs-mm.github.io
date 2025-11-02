---
layout: page
title: " 🐾喵喵分类库 🐾"
permalink: /categories/
description: "按主题浏览所有喵文～"
---

<!-- 🎀 甘城猫猫风格样式 -->
<style>
.categories-container {
    background: linear-gradient(135deg, #fff0f5, #f0f8ff);
    min-height: 100vh;
    padding: 20px;
}

.categories-header {
    text-align: center;
    padding: 30px 0;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(255, 182, 193, 0.2);
    border: 2px dashed #ffb6c1;
}

.categories-title {
    color: #ff69b4;
    font-size: 2.5em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.categories-subtitle {
    color: #87ceeb;
    font-size: 1.2em;
}

/* 分类云样式 */
.category-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
}

.category-tag {
    display: inline-block;
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
    position: relative;
}

.category-tag:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);
    background: linear-gradient(45deg, #ff69b4, #ff1493);
}

.category-count {
    background: rgba(255, 255, 255, 0.3);
    padding: 3px 8px;
    border-radius: 15px;
    margin-left: 5px;
    font-size: 0.9em;
}

/* 分类内容区 */
.category-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 25px;
    margin: 25px 0;
    box-shadow: 0 5px 20px rgba(255, 182, 193, 0.2);
    border: 2px solid #ffb6c1;
}

.category-name {
    color: #ff69b4;
    font-size: 1.8em;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px dotted #87ceeb;
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
    background: linear-gradient(135deg, #ffffff, #fff9f9);
    border: 1px solid #ffd6e0;
    border-radius: 12px;
    padding: 15px;
    margin: 12px 0;
    transition: all 0.3s ease;
    position: relative;
}

.post-item::before {
    content: '📝';
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
}

.post-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(255, 182, 193, 0.3);
    border-color: #ff69b4;
}

.post-link {
    color: #ff69b4;
    text-decoration: none;
    font-weight: bold;
    margin-left: 30px;
    display: block;
}

.post-link:hover {
    color: #ff1493;
    text-decoration: underline wavy #ffb6c1;
}

.post-meta {
    color: #87ceeb;
    font-size: 0.9em;
    margin-left: 30px;
    margin-top: 5px;
}

/* 空状态 */
.empty-categories {
    text-align: center;
    padding: 40px;
    color: #666;
}

.empty-icon {
    font-size: 3em;
    margin-bottom: 15px;
    color: #ffb6c1;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .categories-container {
        padding: 15px;
    }
    
    .categories-title {
        font-size: 2em;
    }
    
    .category-cloud {
        gap: 10px;
    }
    
    .category-tag {
        padding: 8px 15px;
        font-size: 0.9em;
    }
    
    .category-section {
        padding: 20px;
        margin: 20px 0;
    }
    
    .post-item {
        padding: 12px;
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
                    <span class="category-count">({{ category[1].size }}篇喵文)</span>
                </h2>
                
                <ul class="posts-list">
                    {% for post in category[1] %}
                    <li class="post-item">
                        <a href="{{ post.url }}" class="post-link">{{ post.title }}</a>
                        <div class="post-meta">
                            📅 {{ post.date | date: "%Y/%m/%d" }}
                            {% if post.tags %}
                            · 🏷️ {{ post.tags | join: ", " }}
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
