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
    {% assign sorted_announcements = site.data.announcement-history | sort: "date" | reverse %}
    
    <div class="announcements-stats">
      <div class="stat-item">
        <span class="stat-number">{{ sorted_announcements.size }}</span>
        <span class="stat-label">总公告数</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ sorted_announcements.first.date }}</span>
        <span class="stat-label">最新公告</span>
      </div>
    </div>

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
/* 🐱 公告历史页面样式 */
.announcements-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 80vh;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px dashed #ffb6c1;
}

.page-header h1 {
  color: #ff69b4;
  font-size: 2.2em;
  margin-bottom: 10px;
}

.page-description {
  color: #87ceeb;
  font-size: 1.1em;
}

/* 统计信息 */
.announcements-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 25px 0;
  padding: 15px;
  background: linear-gradient(135deg, #fff0f5, #fff9fd);
  border-radius: 12px;
  border: 1px solid #ffb6c1;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.8em;
  font-weight: bold;
  color: #ff69b4;
}

.stat-label {
  font-size: 0.9em;
  color: #87ceeb;
}

/* 公告列表 */
.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.announcement-item {
  background: linear-gradient(135deg, #fff9e6, #fff0f5);
  border: 2px dashed #ffb6c1;
  border-radius: 15px;
  padding: 0;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.announcement-item.latest-announcement {
  border: 2px solid #ff69b4;
  box-shadow: 0 5px 20px rgba(255, 105, 180, 0.2);
}

.announcement-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 182, 193, 0.3);
}

.announcement-header {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #ffb6c1;
}

.announcement-title {
  color: #ff69b4;
  font-size: 1.3em;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.announcement-icon {
  font-size: 1.2em;
}

.announcement-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.announcement-date {
  color: #87ceeb;
  font-size: 0.9em;
}

.latest-badge {
  background: #ff69b4;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

.announcement-content {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.announcement-content.expanded {
  padding: 20px;
  max-height: 1000px;
}

.announcement-footer {
  padding: 0 20px 20px;
  text-align: center;
}

.read-more-btn {
  background: linear-gradient(135deg, #ffa726, #fb8c00);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
}

.read-more-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 167, 38, 0.4);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.btn-icon.rotated {
  transform: rotate(180deg);
}

/* 空状态 */
.no-announcements {
  text-align: center;
  padding: 60px 20px;
}

.empty-state {
  color: #87ceeb;
}

.empty-icon {
  font-size: 4em;
  display: block;
  margin-bottom: 20px;
}

.empty-state h3 {
  color: #ff69b4;
  margin-bottom: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .announcements-page {
    padding: 15px 10px;
  }
  
  .page-header h1 {
    font-size: 1.8em;
  }
  
  .announcements-stats {
    flex-direction: column;
    gap: 15px;
  }
  
  .announcement-header {
    padding: 15px 15px 8px;
  }
  
  .announcement-title {
    font-size: 1.1em;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .announcement-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}
</style>

<script>
// 🐱 公告交互功能
function toggleAnnouncement(index) {
  const content = document.querySelectorAll('.announcement-content')[index];
  const button = document.querySelectorAll('.read-more-btn')[index];
  const icon = button.querySelector('.btn-icon');
  const text = button.querySelector('.btn-text');
  
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    icon.classList.remove('rotated');
    text.textContent = '📖 展开详情';
  } else {
    content.classList.add('expanded');
    icon.classList.add('rotated');
    text.textContent = '📕 收起详情';
  }
}

// 页面加载时默认展开第一个公告
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const firstButton = document.querySelector('.read-more-btn');
    if (firstButton) firstButton.click();
  }, 500);
});

// 平滑滚动到公告
function scrollToAnnouncement(index) {
  const announcement = document.querySelectorAll('.announcement-item')[index];
  announcement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>
