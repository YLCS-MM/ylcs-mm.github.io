---
layout: announcements
title: "📢 公告历史"
permalink: /announcements/
description: "甘城猫猫博客的更新公告和历史记录"
---

<div class="announcements-page">
  <header class="page-header">
    <h1>📢 公告历史</h1>
    <p class="page-description">记录博客的每一次成长和更新喵～</p>
  </header>

  {% if site.data.announcement-history %}
    {% assign today = site.time | date: "%Y-%m-%d" %}
    {% assign past_announcements = site.data.announcement-history | where_exp: "item", "item.date <= today" %}
    {% assign sorted_announcements = past_announcements | sort: "date" | reverse %}
    
    <div class="announcements-stats">
      <div class="stat-item">
        <span class="stat-number">{{ site.data.announcement-history.size }}</span>
        <span class="stat-label">总公告数</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ sorted_announcements.size }}</span>
        <span class="stat-label">已发布公告</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ sorted_announcements.first.date }}</span>
        <span class="stat-label">最新公告</span>
      </div>
    </div>

    {% if sorted_announcements.size > 0 %}
      <div class="announcement-list">
        {% for announcement in sorted_announcements %}
          <article class="announcement-item {% if forloop.first %}latest-announcement{% endif %}">
            <header class="announcement-header">
              <h2 class="announcement-title">
                <span class="announcement-icon">
                  {% if forloop.first %}🎉{% else %}📌{% endif %}
                </span>
                {{ announcement.title }}
              </h2>
              <div class="announcement-meta">
                <span class="announcement-date">📅 {{ announcement.date }}</span>
                {% if announcement.date == today %}
                <span class="today-badge">今天</span>
                {% endif %}
                {% if forloop.first %}
                <span class="latest-badge">最新</span>
                {% endif %}
              </div>
            </header>

            <div class="announcement-content">
              {{ announcement.content | markdownify }}
            </div>

            <footer class="announcement-footer">
              <button class="read-more-btn" onclick="toggleAnnouncement({{ forloop.index0 }})">
                <span class="btn-text">📖 展开详情</span>
                <span class="btn-icon">▼</span>
              </button>
            </footer>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div class="no-current-announcements">
        <div class="empty-state">
          <span class="empty-icon">📅</span>
          <h3>当前没有已发布的公告喵～</h3>
          <p>所有公告都在等待未来的日期发布，请耐心等待喵！</p>
        </div>
      </div>
    {% endif %}
    
    {% comment %} 显示未来公告数量（可选） {% endcomment %}
    {% assign future_announcements = site.data.announcement-history | where_exp: "item", "item.date > today" %}
    {% if future_announcements.size > 0 %}
      <div class="future-announcements-info">
        <p>🎯 还有 <strong>{{ future_announcements.size }}</strong> 个公告将在未来发布喵～</p>
      </div>
    {% endif %}
    
  {% else %}
    <div class="no-announcements">
      <div class="empty-state">
        <span class="empty-icon">😴</span>
        <h3>还没有公告喵～</h3>
        <p>博客正在努力建设中，敬请期待！</p>
      </div>
    </div>
  {% endif %}
</div>

<style>
/* ... 原有的CSS样式保持不变 ... */

/* 添加今天的公告标记 */
.today-badge {
  background: #4cd964;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

/* 未来公告提示 */
.future-announcements-info {
  margin-top: 20px;
  padding: 10px 15px;
  background: linear-gradient(135deg, #e6f7ff, #f0f9ff);
  border: 1px solid #87ceeb;
  border-radius: 10px;
  text-align: center;
  color: #1e90ff;
  font-size: 0.9em;
}

.future-announcements-info strong {
  color: #ff69b4;
}

/* 无当前公告样式 */
.no-current-announcements {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fff0f5, #fff9fd);
  border: 2px dashed #ffb6c1;
  border-radius: 15px;
  margin: 20px 0;
}
</style>

<script>
// ... 原有的JavaScript代码保持不变 ...
</script>
