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

<script>
function toggleAnnouncement(index) {
  const contents = document.querySelectorAll('.announcement-content');
  const buttons = document.querySelectorAll('.read-more-btn');
  
  if (index < contents.length) {
    const content = contents[index];
    const button = buttons[index];
    const btnText = button.querySelector('.btn-text');
    const btnIcon = button.querySelector('.btn-icon');
    
    if (content.classList.contains('expanded')) {
      content.classList.remove('expanded');
      btnText.textContent = '展开详情';
      btnIcon.classList.remove('expanded');
    } else {
      content.classList.add('expanded');
      btnText.textContent = '收起详情';
      btnIcon.classList.add('expanded');
    }
  }
}

// 页面加载时默认展开第一个公告
document.addEventListener('DOMContentLoaded', function() {
  // 默认展开最新公告
  setTimeout(() => {
    const firstButton = document.querySelector('.read-more-btn');
    if (firstButton) firstButton.click();
  }, 500);
});
</script>
