---
layout: page
title: 公告历史
permalink: /announcements/
description: 博客更新公告和历史记录
---

<div class="announcements-page">
  <h2>📢 公告历史</h2>
  
  {% if site.data.announcement.announcements %}
    <div class="announcement-list">
      {% for announcement in site.data.announcement.announcements %}
      <article class="announcement-item">
        <header class="announcement-header">
          <h3 class="announcement-title">
            <a href="javascript:void(0)" class="announcement-link" 
               onclick="showAnnouncementDetail('{{ forloop.index0 }}')">
              {{ announcement.title }}
            </a>
          </h3>
          <span class="announcement-date">{{ announcement.date }}</span>
        </header>
        <div class="announcement-excerpt">
          {{ announcement.content | markdownify | strip_html | truncatewords: 30 }}
        </div>
        <button class="read-more-btn" onclick="showAnnouncementDetail('{{ forloop.index0 }}')">
          查看详情
        </button>
      </article>
      {% endfor %}
    </div>
  {% else %}
    <p class="no-announcements">还没有公告喵～ฅ(^•ω•^)ฅ</p>
  {% endif %}
</div>

<!-- 公告详情弹窗 -->
<div id="announcement-detail-modal" class="announcement-detail-modal hidden">
  <div class="detail-modal-content">
    <div class="modal-header">
      <h3 id="detail-title"></h3>
      <button class="close-detail-modal">&times;</button>
    </div>
    <div class="modal-body">
      <p class="detail-date"></p>
      <div class="detail-content"></div>
    </div>
  </div>
</div>

<style>
.announcements-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.announcement-item {
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.announcement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.announcement-title {
  margin: 0;
  font-size: 1.3rem;
}

.announcement-link {
  color: #0366d6;
  text-decoration: none;
}

.announcement-link:hover {
  text-decoration: underline;
}

.announcement-date {
  color: #666;
  font-size: 0.9rem;
}

.announcement-excerpt {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more-btn {
  background: #0366d6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.read-more-btn:hover {
  background: #0256b3;
}

.no-announcements {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 40px 0;
}

/* 详情弹窗样式 */
.announcement-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.detail-modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
}

.detail-content {
  line-height: 1.6;
}

.hidden {
  display: none;
}
</style>

<script>
function showAnnouncementDetail(index) {
  const announcements = {% if site.data.announcement.announcements %}{{ site.data.announcement.announcements | jsonify }}{% else %}[]{% endif %};
  
  if (announcements[index]) {
    const announcement = announcements[index];
    document.getElementById('detail-title').textContent = announcement.title;
    document.querySelector('.detail-date').textContent = '发布日期：' + announcement.date;
    document.querySelector('.detail-content').innerHTML = announcement.content;
    
    const modal = document.getElementById('announcement-detail-modal');
    modal.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('.close-detail-modal');
  const modal = document.getElementById('announcement-detail-modal');
  
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function() {
      modal.classList.add('hidden');
    });
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
});
</script>
