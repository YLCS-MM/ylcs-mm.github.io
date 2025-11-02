---
layout: announcements  # 改为使用新的布局
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
        <!-- 原有的公告内容保持不变 -->
      {% endfor %}
    </div>
  {% else %}
    <p class="no-announcements">还没有公告喵～ฅ(^•ω•^)ฅ</p>
  {% endif %}
</div>

<!-- 只需要保留公告特有的样式，不需要顶部样式 -->
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

/* ... 其他公告特有样式保持不变 ... */
</style>

<script>
// 公告页面特有的交互脚本
function toggleAnnouncement(index) {
  // ... 原有的脚本保持不变 ...
}

// 页面加载时默认展开第一个公告
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const firstButton = document.querySelector('.read-more-btn');
    if (firstButton) firstButton.click();
  }, 500);
});
</script>
