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
    {% assign future_announcements = site.data.announcement-history | where_exp: "item", "item.date > today" %}

    <div class="announcements-stats">
      <div class="stat-item">
        <span class="stat-number">{{ site.data.announcement-history.size }}</span>
        <span class="stat-label">总公告数</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ sorted_announcements.size }}</span>
        <span class="stat-label">已发布公告</span>
      </div>
      {% if sorted_announcements.size > 0 %}
      <div class="stat-item">
        <span class="stat-number">{{ sorted_announcements.first.date }}</span>
        <span class="stat-label">最新公告</span>
      </div>
      {% else %}
      <div class="stat-item">
        <span class="stat-number">—</span>
        <span class="stat-label">最新公告</span>
      </div>
      {% endif %}
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
                <span class="announcement-badges">
                  {% if announcement.date == today %}
                  <span class="today-badge">今天</span>
                  {% endif %}
                  {% if forloop.first %}
                  <span class="latest-badge">最新</span>
                  {% endif %}
                </span>
              </div>
            </header>

            <div class="announcement-content {% if forloop.first %}expanded{% endif %}">
              {{ announcement.content | markdownify }}
            </div>

            <footer class="announcement-footer">
              <button class="read-more-btn" onclick="toggleAnnouncement(this)" data-expanded="{% if forloop.first %}true{% else %}false{% endif %}">
                <span class="btn-text">{% if forloop.first %}📕 收起详情{% else %}📖 展开详情{% endif %}</span>
                <span class="btn-icon {% if forloop.first %}rotated{% endif %}">▼</span>
              </button>
            </footer>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div class="no-announcements">
        <div class="empty-state">
          <span class="empty-icon">📅</span>
          <h3>当前没有已发布的公告喵～</h3>
          <p>所有公告都在等待未来的日期发布，请耐心等待喵！</p>
        </div>
      </div>
    {% endif %}

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
.announcements-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 25px;
  padding-bottom: 18px;
  border-bottom: 2px dashed var(--neko-light-pink, #ffb6c1);
}

.page-header h1 {
  color: var(--neko-pink, #ff69b4);
  font-size: 2em;
  margin-bottom: 8px;
}

.page-description {
  color: var(--neko-blue, #87ceeb);
  font-size: 1.05em;
}

.announcements-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
  padding: 18px;
  background: linear-gradient(135deg, #fff0f5, #fff9fd);
  border-radius: 12px;
  border: 1px solid var(--neko-light-pink, #ffb6c1);
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  min-width: 80px;
}

.stat-number {
  display: block;
  font-size: 1.6em;
  font-weight: bold;
  color: var(--neko-pink, #ff69b4);
  word-break: break-all;
}

.stat-label {
  font-size: 0.85em;
  color: var(--neko-blue, #87ceeb);
}

.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.announcement-item {
  background: linear-gradient(135deg, #fff9e6, #fff0f5);
  border: 2px dashed var(--neko-light-pink, #ffb6c1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.announcement-item.latest-announcement {
  border: 2px solid var(--neko-pink, #ff69b4);
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.15);
}

.announcement-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 182, 193, 0.25);
}

.announcement-header {
  padding: 18px 20px 10px;
  border-bottom: 1px solid var(--neko-light-pink, #ffb6c1);
}

.announcement-title {
  color: var(--neko-pink, #ff69b4);
  font-size: 1.2em;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.announcement-icon {
  font-size: 1.1em;
  flex-shrink: 0;
}

.announcement-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.announcement-date {
  color: var(--neko-blue, #87ceeb);
  font-size: 0.88em;
}

.announcement-badges {
  display: flex;
  gap: 6px;
}

.latest-badge {
  background: var(--neko-pink, #ff69b4);
  color: white;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 0.78em;
  font-weight: bold;
}

.today-badge {
  background: #4cd964;
  color: white;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 0.78em;
  font-weight: bold;
}

.announcement-content {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  line-height: 1.7;
  color: var(--neko-dark, #4a4a4a);
}

.announcement-content.expanded {
  padding: 18px 20px;
  max-height: 2000px;
}

.announcement-content h2 {
  color: var(--neko-pink, #ff69b4);
  font-size: 1.15em;
  margin: 8px 0 6px;
}

.announcement-content h3 {
  color: var(--neko-blue, #87ceeb);
  font-size: 1.05em;
  margin: 6px 0 4px;
}

.announcement-content ul, .announcement-content ol {
  padding-left: 1.5em;
  margin: 4px 0;
}

.announcement-content li {
  margin-bottom: 3px;
}

.announcement-content a {
  color: var(--neko-pink, #ff69b4);
  text-decoration: underline;
}

.announcement-content a:hover {
  color: var(--neko-blue, #87ceeb);
}

.announcement-content hr {
  border: none;
  border-top: 1px dashed var(--neko-light-pink, #ffb6c1);
  margin: 12px 0;
}

.announcement-content p {
  margin-bottom: 6px;
}

.announcement-footer {
  padding: 0 20px 16px;
  text-align: center;
}

.read-more-btn {
  background: linear-gradient(135deg, #ffa726, #fb8c00);
  color: white;
  border: none;
  padding: 8px 22px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 167, 38, 0.35);
}

.btn-icon {
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 0.75em;
}

.btn-icon.rotated {
  transform: rotate(180deg);
}

.no-announcements {
  text-align: center;
  padding: 50px 20px;
}

.empty-state {
  color: var(--neko-blue, #87ceeb);
}

.empty-icon {
  font-size: 3.5em;
  display: block;
  margin-bottom: 16px;
}

.empty-state h3 {
  color: var(--neko-pink, #ff69b4);
  margin-bottom: 8px;
  font-size: 1.1em;
}

.future-announcements-info {
  margin-top: 18px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #e6f7ff, #f0f9ff);
  border: 1px solid var(--neko-blue, #87ceeb);
  border-radius: 10px;
  text-align: center;
  color: #1e90ff;
  font-size: 0.9em;
}

.future-announcements-info strong {
  color: var(--neko-pink, #ff69b4);
}

@media (max-width: 768px) {
  .announcements-page {
    padding: 5px 0;
  }

  .page-header h1 {
    font-size: 1.6em;
  }

  .announcements-stats {
    gap: 15px;
    padding: 14px 10px;
  }

  .stat-number {
    font-size: 1.3em;
  }

  .announcement-header {
    padding: 15px 15px 8px;
  }

  .announcement-title {
    font-size: 1.05em;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .announcement-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .announcement-content {
    padding: 0 15px;
  }

  .announcement-content.expanded {
    padding: 15px;
  }

  .announcement-footer {
    padding: 0 15px 14px;
  }
}
</style>

<script>
(function() {
  var contents = document.querySelectorAll('.announcement-content');
  var buttons = document.querySelectorAll('.read-more-btn');

  window.toggleAnnouncement = function(btn) {
    var item = btn.closest('.announcement-item');
    var content = item.querySelector('.announcement-content');
    var icon = btn.querySelector('.btn-icon');
    var text = btn.querySelector('.btn-text');
    var isExpanded = content.classList.contains('expanded');

    if (isExpanded) {
      content.classList.remove('expanded');
      icon.classList.remove('rotated');
      text.textContent = '📖 展开详情';
      btn.setAttribute('data-expanded', 'false');
    } else {
      content.classList.add('expanded');
      icon.classList.add('rotated');
      text.textContent = '📕 收起详情';
      btn.setAttribute('data-expanded', 'true');
    }
  };
})();
</script>