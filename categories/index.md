---
layout: page
title: "📚 分类库"
permalink: /categories/
---

<!-- 🎀 甘城猫猫风格分类页面样式 -->
<style>
/* 🎯 顶部区域 - 浅蓝为主色调 */
.categories-header {
    background: linear-gradient(135deg, #e6f7ff, #f0f8ff);
    padding: 25px 0;
    margin: 0;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 15px rgba(135, 206, 235, 0.3);
    position: relative;
    overflow: hidden;
    border-bottom: 3px solid #87ceeb;
    text-align: center;
}

/* 🎯 左上角头像区域 */
.header-avatar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 15px;
}

.header-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #87ceeb;
    box-shadow: 0 0 15px rgba(135, 206, 235, 0.4);
    transition: all 0.3s ease;
}

.header-avatar:hover {
    border-color: #ffb6c1;
    transform: scale(1.05);
}

.categories-title {
    color: #4682b4;
    font-size: 2.2em;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.categories-subtitle {
    color: #5f9ea0;
    font-size: 1.1em;
    margin-top: 5px;
}

/* 🎯 分类标签 - 蓝色为主 */
.category-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin: 25px auto;
    max-width: 90%;
}

.category-tag {
    display: inline-block;
    background: linear-gradient(45deg, #87ceeb, #4682b4);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 1em;
    transition: all 0.3s ease;
    box-shadow: 0 3px 10px rgba(135, 206, 235, 0.4);
}

.category-tag:hover {
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
}

.category-count {
    background: rgba(255, 255, 255, 0.3);
    padding: 2px 6px;
    border-radius: 10px;
    margin-left: 5px;
    font-size: 0.85em;
}

/* 🎯 分类内容区 - 浅蓝背景 */
.category-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 25px;
    margin: 20px auto;
    max-width: 90%;
    box-shadow: 0 5px 15px rgba(135, 206, 235, 0.2);
    border: 2px solid #b0e0e6;
}

.category-name {
    color: #4682b4;
    font-size: 1.6em;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid #87ceeb;
}

/* 🎯 文章卡片 - 蓝色主题 */
.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    margin-top: 15px;
}

.post-card {
    background: linear-gradient(135deg, #f8fdff, #f0f8ff);
    border: 2px solid #b0e0e6;
    border-radius: 12px;
    padding: 18px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.post-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #87ceeb, #4682b4);
}

.post-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(135, 206, 235, 0.4);
    border-color: #87ceeb;
}

.post-title {
    margin: 0 0 8px 0;
}

.post-title a {
    color: #4682b4;
    font-size: 1.2em;
    text-decoration: none;
    font-weight: 600;
}

.post-title a:hover {
    color: #ff69b4;
    text-decoration: underline;
}

.post-excerpt {
    color: #666;
    line-height: 1.5;
    margin-bottom: 12px;
    padding: 8px;
    background: rgba(135, 206, 235, 0.05);
    border-left: 3px solid #87ceeb;
    border-radius: 4px;
}

.post-meta {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.meta-item {
    background: rgba(135, 206, 235, 0.15);
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.85em;
    color: #5f9ea0;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .categories-header {
        padding: 20px 0 !important;
    }
    
    .header-avatar {
        width: 50px;
        height: 50px;
    }
    
    .categories-title {
        font-size: 1.8em;
    }
    
    .posts-grid {
        grid-template-columns: 1fr;
    }
    
    .category-section {
        padding: 20px;
    }
}
</style>

<!-- 🎯 顶部区块 - 浅蓝主题 -->
<header class="categories-header">
    <div class="header-avatar-container">
        <img src="https://avatars.githubusercontent.com/u/193340716?v=4" 
             alt="成霜喵喵" class="header-avatar">
        <h1 class="categories-title">📚 分类库</h1>
    </div>
    <p class="categories-subtitle">按主题浏览所有内容</p>
</header>

<!-- 🎯 分类云 -->
<div class="category-cloud">
    {% for category in site.categories %}
    <a href="#{{ category[0] | slugify }}" class="category-tag">
        {{ category[0] }}
        <span class="category-count">{{ category[1].size }}</span>
    </a>
    {% endfor %}
</div>

<!-- 🎯 分类文章列表 -->
<div class="categories-content">
    {% for category in site.categories %}
    <section class="category-section" id="{{ category[0] | slugify }}">
        <h2 class="category-name">
            {{ category[0] }}
            <span class="category-count">({{ category[1].size }}篇)</span>
        </h2>
        
        <div class="posts-grid">
            {% for post in category[1] %}
            <article class="post-card">
                <h3 class="post-title">
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </h3>
                
                <p class="post-excerpt">
                    {{ post.excerpt | strip_html | strip | truncate: 120 }}
                </p>
                
                <div class="post-meta">
                    <span class="meta-item">
                        📅 {{ post.date | date: "%Y/%m/%d" }}
                    </span>
                    {% if post.tags %}
                    <span class="meta-item">
                        🏷️ {{ post.tags | join: ", " }}
                    </span>
                    {% endif %}
                </div>
            </article>
            {% endfor %}
        </div>
    </section>
    {% endfor %}
</div>

<!-- 🎯 平滑滚动效果 -->
<script>
// 分类云链接平滑滚动
document.querySelectorAll('.category-tag[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 添加加载动画
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.post-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
</script>
