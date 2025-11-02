---
layout: categories
title: 🐱 喵喵基因库 🧬
description: 嘻嘻，你找到了我的喵喵秘密基地！这里收藏了所有喵星人的智慧结晶～
keywords: 喵喵分类, 文章基因库, 博客分类
comments: false
menu: 🐾 喵喵分类
permalink: /categories/
---

<section class="container posts-content">
{% assign sorted_categories = site.categories | sort %}
{% for category in sorted_categories %}
<!-- 给每个分类标题加上猫猫装饰 -->
<h3 id="{{ category[0] }}" class="neko-category-header">
  <span class="neko-paw">🐾</span>
  {{ category | first }}
  <span class="neko-badge">{{ category.last | size }}篇喵文</span>
</h3>
<ol class="posts-list">
{% for post in category.last %}
<li class="posts-list-item">
  <span class="posts-list-meta">{{ post.date | date:"%Y-%m-%d" }}</span>
  <a class="posts-list-name" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ol>
{% endfor %}
</section>

<style>
/* 甘城猫猫风格样式喵～ */
.neko-category-header {
  color: #ff69b4;
  border-bottom: 2px dashed #ffb6c1;
  padding: 10px 0;
  margin: 30px 0 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.neko-paw {
  font-size: 1.2em;
  animation: bounce 2s infinite;
}

.neko-badge {
  background: linear-gradient(135deg, #ffa500, #ff6b6b);
  color: white;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.7em;
  font-weight: normal;
  margin-left: auto;
}

.posts-list-item {
  transition: all 0.3s ease;
  padding: 8px 5px;
  border-left: 3px solid transparent;
}

.posts-list-item:hover {
  background: #fff9e6;
  border-left-color: #ff69b4;
  transform: translateX(5px);
}

.posts-list-name {
  color: #555;
  transition: color 0.3s ease;
}

.posts-list-name:hover {
  color: #ff69b4;
  text-decoration: none;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

/* 页面整体美化 */
.posts-content {
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(255, 182, 193, 0.1);
}
</style>
