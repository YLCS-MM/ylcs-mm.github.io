---
layout: page
title: 公告历史
permalink: /announcements/
description: 博客更新公告和历史记录
---

<div class="announcements-page">
  <h2>📢 公告历史</h2>
  
  {% if site.data.announcement-history %}
    {% assign sorted_announcements = site.data.announcement-history | sort: "date" | reverse %}
    <div class="announcement-list">
      {% for announcement in sorted_announcements %}
        <article class="announcement-item announcement-{{ announcement.type | default: 'default' }}">
          <header class="announcement-header">
            <div class="announcement-title-section">
              <h3 class="announcement-title">
                <span class="announcement-icon">
                  {% case announcement.type %}
                    {% when "feature" %}✨
                    {% when "maintenance" %}🚧
                    {% when "release" %}🎉
                    {% else %}📢
                  {% endcase %}
                </span>
                {{ announcement.title }}
              </h3>
              {% if forloop.first %}
                <span class="current-badge">最新</span>
              {% endif %}
            </div>
            <span class="announcement-date">{{ announcement.date }}</span>
          </header>
          
          <div class="announcement-content">
            {{ announcement.content | markdownify }}
          </div>
          
          <footer class="announcement-footer">
            <button class="read-more-btn" onclick="toggleAnnouncement({{ forloop.index0 }})">
              <span class="btn-text">展开详情</span>
              <span class="btn-icon">↓</span>
            </button>
          </footer>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p class="no-announcements">还没有公告喵～ฅ(^•ω•^)ฅ</p>
  {% endif %}
</div>

<style>
.announcements-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.announcement-item {
  background: linear-gradient(135deg, #fff9e6, #fff0f5);
  border: 2px dashed #ffb6c1;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
}

.announcement-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 182, 193, 0.2);
}

.announcement-item::before {
  content: '❤';
  position: absolute;
  top: -10px;
  left: 20px;
  color: #ffb6c1;
  font-size: 18px;
  background: white;
  padding: 0 5px;
}

.announcement-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.announcement-title-section {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.announcement-title {
  margin: 0;
  font-size: 1.3rem;
  color: #ff69b4;
  display: flex;
  align-items: center;
  gap: 8px;
}

.announcement-icon {
  font-size: 1.2em;
}

.announcement-date {
  color: #ff69b4;
  font-weight: bold;
  font-size: 0.9rem;
  white-space: nowrap;
}

.current-badge {
  background: #ff69b4;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
}

.announcement-content {
  color: #666;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.announcement-content.expanded {
  max-height: 500px;
}

.announcement-footer {
  margin-top: 15px;
  text-align: center;
}

.read-more-btn {
  background: #ffa500;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
}

.read-more-btn:hover {
  background: #ff8c00;
  transform: scale(1.05);
}

.btn-icon {
  transition: transform 0.3s;
}

.btn-icon.expanded {
  transform: rotate(180deg);
}

.no-announcements {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 40px 0;
}

/* 不同类型公告的样式 */
.announcement-feature {
  border-color: #a8e6cf;
}

.announcement-feature::before {
  color: #a8e6cf;
}

.announcement-maintenance {
  border-color: #ffd3b6;
}

.announcement-maintenance::before {
  color: #ffd3b6;
}

.announcement-release {
  border-color: #ffaaa5;
}

.announcement-release::before {
  color: #ffaaa5;
}
</style>

<script>
function toggleAnnouncement(index) {
  const contents = document.querySelectorAll('.announcement-content');
  const buttons = document.querySelectorAll('.read-more-btn');
  const btnIcons = document.querySelectorAll('.btn-icon');
  const btnTexts = document.querySelectorAll('.btn-text');
  
  if (index < contents.length) {
    const content = contents[index];
    const btnIcon = btnIcons[index];
    const btnText = btnTexts[index];
    
    if (content.classList.contains('expanded')) {
      content.classList.remove('expanded');
      btnText.textContent = '展开详情';
      btnIcon.classList.remove('expanded');
    } else {
      // 先收起所有其他展开的内容
      contents.forEach((content, i) => {
        if (i !== index && content.classList.contains('expanded')) {
          content.classList.remove('expanded');
          btnTexts[i].textContent = '展开详情';
          btnIcons[i].classList.remove('expanded');
        }
      });
      
      content.classList.add('expanded');
      btnText.textContent = '收起详情';
      btnIcon.classList.add('expanded');
    }
  }
}

// 页面加载时默认展开第一个公告
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const firstButton = document.querySelector('.read-more-btn');
    if (firstButton) firstButton.click();
  }, 500);
});
</script>
