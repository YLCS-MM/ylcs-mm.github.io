---
layout: categories  <!-- 使用您创建的布局 -->
title: "喵喵分类库"
subtitle: "按主题浏览所有喵文～"
permalink: /categories/
---

<!-- 🎀 分类页面内容样式 -->
<style>
.category-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin: 20px 0 30px;
}

.category-tag {
    background: linear-gradient(45deg, #87ceeb, #4682b4);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
}

.category-tag:hover {
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    transform: translateY(-2px);
}

.category-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #e0f7fa;
}

.post-item {
    padding: 10px 0;
    border-bottom: 1px dashed #e0f7fa;
}

.post-item:last-child {
    border-bottom: none;
}
</style>

<!-- 分类标签云 -->
{% if site.categories.size > 0 %}
<div class="category-tags">
    {% for category in site.categories %}
    <a href="#{{ category[0] | slugify }}" class="category-tag">
        {{ category[0] }} ({{ category[1].size }})
    </a>
    {% endfor %}
</div>
{% endif %}

<!-- 分类内容 -->
{% if site.categories.size > 0 %}
    {% for category in site.categories %}
    <section class="category-section" id="{{ category[0] | slugify }}">
        <h2>{{ category[0] }} ({{ category[1].size }}篇)</h2>
        {% for post in category[1] %}
        <div class="post-item">
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <p>📅 {{ post.date | date: "%Y/%m/%d" }}</p>
        </div>
        {% endfor %}
    </section>
    {% endfor %}
{% else %}
    <div style="text-align: center; padding: 40px; color: #666;">
        <p>还没有分类哦～快去写一些喵文吧！</p>
    </div>
{% endif %}

<script>
// 平滑滚动
document.querySelectorAll('.category-tag[href^="#"]').forEach(tag => {
    tag.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
</script>
