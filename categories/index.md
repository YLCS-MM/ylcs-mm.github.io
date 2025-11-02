---
layout: default
title: "喵喵分类库"
permalink: /categories/
---

<style>
/* 字符编码保护 */
body {
    font-family: "Microsoft YaHei", "微软雅黑", "PingFang SC", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}

.category-section h2, .post-item h3 {
    unicode-bidi: embed;
}
</style>

<div class="categories-container">
    <header class="categories-header">
        <h1 class="categories-title">喵喵分类库</h1>
        <p class="categories-subtitle">按主题浏览所有喵文～</p>
    </header>

    {% if site.categories.size > 0 %}
    <nav class="category-tags">
        {% for category in site.categories %}
        <a href="#{{ category[0] | slugify }}" class="category-tag">
            {{ category[0] }} ({{ category[1].size }})
        </a>
        {% endfor %}
    </nav>

    <main class="categories-content">
        {% for category in site.categories %}
        <section class="category-section" id="{{ category[0] | slugify }}">
            <div class="section-header">
                <h2 class="section-title">{{ category[0] }}（{{ category[1].size }}篇）</h2>
            </div>
            
            <div class="posts-list">
                {% for post in category[1] %}
                <article class="post-item">
                    <h3 class="post-title">
                        <a href="{{ post.url }}" title="{{ post.title }}">
                            {{ post.title }}
                        </a>
                    </h3>
                    <div class="post-meta">
                        <span>📅 {{ post.date | date: "%Y/%m/%d" }}</span>
                    </div>
                </article>
                {% endfor %}
            </div>
        </section>
        {% endfor %}
    </main>
    {% endif %}
</div>
