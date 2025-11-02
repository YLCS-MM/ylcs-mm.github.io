---
layout: default
title: "📚 喵喵分类库"
permalink: /categories/
---

<!-- 🎀 甘城猫猫风格分类页面 -->
<style>
/* 页面整体样式 */
.categories-container {
    background: linear-gradient(135deg, #fff0f5, #e6f7ff);
    min-height: 100vh;
    padding: 20px;
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
}

/* 页面头部 */
.categories-header {
    text-align: center;
    padding: 30px 20px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    margin: 20px 0;
    box-shadow: 0 10px 30px rgba(255, 182, 193, 0.3);
    border: 2px dashed #ffb6c1;
}

.categories-title {
    color: #ff69b4;
    font-size: 2.2em;
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
    gap: 12px;
    margin: 30px 0;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    box-shadow: 0 5px 20px rgba(135, 206, 235, 0.2);
}

.category-tag {
    display: inline-block;
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    color: white;
    padding: 10px 18px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
}

.category-tag:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);
}

.category-count {
    background: rgba(255, 255, 255, 0.3);
    padding: 3px 8px;
    border-radius: 12px;
    margin-left: 5px;
    font-size: 0.9em;
}

/* 分类内容区 */
.category-content {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 10px 30px rgba(255, 182, 193, 0.2);
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
}

/* 文章列表 */
.posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.post-card {
    background: linear-gradient(135deg, #ffffff, #fff9f9);
    border: 2px solid #ffb6c1;
    border-radius: 15px;
    padding: 18px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 182, 193, 0.2);
}

.post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 182, 193, 0.4);
}

.post-title {
    margin: 0 0 10px 0;
}

.post-title a {
    color: #ff69b4;
    font-size: 1.3em;
    text-decoration: none;
    font-weight: bold;
}

.post-title a:hover {
    color: #ff1493;
    text-decoration: underline wavy #ffb6c1;
}

.post-excerpt {
    color: #666;
    line-height: 1.5;
    margin-bottom: 12px;
    padding: 10px;
    background: rgba(255, 182, 193, 0.05);
    border-left: 3px solid #87ceeb;
    border-radius: 5px;
}

.post-meta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.meta-item {
    background: rgba(135, 206, 235, 0.1);
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.9em;
    color: #87ceeb;
}

/* 空状态样式 */
.empty-categories {
    text-align: center;
    padding: 40px 20px;
    color: #666;
}

.empty-icon {
    font-size: 3em;
    margin-bottom: 15px;
    color: #ffb6c1;
}

/* 移动端优化 */
@media (max-width: 768px) {
    .categories-container {
        padding: 15px;
    }
    
    .categories-header {
        padding: 25px 15px;
        margin: 15px 0;
    }
    
    .categories-title {
        font-size: 1.8em;
    }
    
    .category-cloud {
        padding: 15px;
        gap: 10px;
    }
    
    .category-tag {
        padding: 8px 15px;
        font-size: 0.9em;
    }
    
    .category-content {
        padding: 20px;
        margin: 15px 0;
    }
    
    .category-name {
        font-size: 1.5em;
    }
    
    .post-card {
        padding: 15px;
    }
}
</style>

<div class="categories-container">
    <!-- 页面头部 -->
    <header class="categories-header">
        <h1 class="categories-title">📚 喵喵分类库</h1>
        <p class="categories-subtitle">按主题浏览所有喵文～</p>
    </header>

    <!-- 分类云 -->
    <div class="category-cloud">
        {% for category in site.categories %}
        <a href="#{{ category[0] | slugify }}" class="category-tag">
            {{ category[0] }}
            <span class="category-count">{{ category[1].size }}</span>
        </a>
        {% endfor %}
    </div>

    <!-- 分类内容 -->
    <main class="categories-content">
        {% for category in site.categories %}
        <section class="category-content" id="{{ category[0] | slugify }}">
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
        
        <!-- 空状态处理 -->
        {% if site.categories.size == 0 %}
        <div class="empty-categories">
            <div class="empty-icon">📭</div>
            <h3>还没有分类哦</h3>
            <p>快去写一些喵文并添加分类吧～</p>
        </div>
        {% endif %}
    </main>
</div>

<!-- 平滑滚动脚本 -->
<script>
// 分类标签平滑滚动
document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-tag[href^="#"]');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 文章卡片加载动画
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
</script>
