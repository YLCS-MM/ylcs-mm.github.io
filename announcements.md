---
layout: page
title: 公告历史
permalink: /announcements/
description: 博客更新公告和历史记录
---

<!-- 添加首页顶部样式 -->
<style>
/* 🎯 首页顶部背景图片样式 */
.neko-announcements-top {
    background-image: url('https://raw.githubusercontent.com/YLCS-MM/ylcs-mm2.gthub.io/refs/heads/miao/84b1ade4028efc77b2dd33f136c7712c.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;
    padding: 40px 0;
    margin: 20px auto;
    max-width: 95%;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.neko-announcements-top::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6);
    z-index: 0;
    border-radius: 20px;
}

.neko-announcements-top > * {
    position: relative;
    z-index: 1;
}

/* 首页顶部内容样式 */
.neko-top-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #ffb6c1;
    box-shadow: 0 0 25px rgba(255, 182, 193, 0.5);
    margin: 0 auto 15px;
}

.neko-top-title {
    color: #ff69b4;
    font-size: 2.5em;
    font-weight: bold;
    margin: 10px 0 5px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.neko-top-location {
    color: #87ceeb;
    font-size: 1.2em;
    margin-bottom: 25px;
    font-weight: 500;
}

.neko-top-nav {
    display: inline-flex;
    gap: 25px;
    background: rgba(255, 255, 255, 0.85);
    padding: 12px 25px;
    border-radius: 30px;
    margin-top: 15px;
    backdrop-filter: blur(10px);
}

.neko-top-nav a {
    color: #666;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 25px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.neko-top-nav a:hover {
    color: #ff69b4;
    background: rgba(255, 182, 193, 0.25);
    transform: translateY(-2px);
}

/* 移动端适配 */
@media (max-width: 768px) {
    .neko-announcements-top {
        padding: 25px 0;
        margin: 15px auto;
    }
    .neko-top-title {
        font-size: 2em;
    }
    .neko-top-nav {
        flex-wrap: wrap;
        gap: 15px;
        padding: 10px 15px;
    }
}
</style>

<!-- 首页样式顶部区域 -->
<div class="neko-announcements-top">
    <img src="https://avatars.githubusercontent.com/u/193340716?v=4" 
         alt="成霜喵喵" class="neko-top-avatar">
    
    <h1 class="neko-top-title">成霜喵喵の小窝</h1>
    <p class="neko-top-location">湖南,郴州 · ylcs-mm</p>
    
    <nav class="neko-top-nav">
        <a href="/">首页</a>
        <a href="/categories/">分类</a>
        <a href="/about/">关于</a>
        <a href="/announcements/">公告</a>
    </nav>
</div>


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


<!-- 公告弹窗脚本 -->
<script src="/assets/js/announcement.js"></script>

<!-- 看板娘脚本 -->
<script>
// 看板娘加载代码
(function() {
    console.log('🚀 开始加载看板娘...');
    
    const live2d_path = 'https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0-rc.7/dist/';
    
    function loadExternalResource(url, type) {
        return new Promise((resolve, reject) => {
            let tag;
            if (type === 'css') {
                tag = document.createElement('link');
                tag.rel = 'stylesheet';
                tag.href = url;
            }
            else
            else if (type === 'js') {
                tag = document.createElement('script');
                tag.type = 'module';
                tag.src = url;
            }
            if (tag) {
                tag.onload = () => resolve(url);
                tag.onerror = () => reject(url);
                document.head.appendChild(tag);
            }
        });
    }

    (async () => {
        try {
            await Promise.all([
                loadExternalResource(live2d_path + 'waifu.css', 'css'),
                loadExternalResource(live2d_path + 'waifu-tips.js', 'js')
            ]);
            
            if (typeof initWidget !== 'undefined') {
                initWidget({
                    waifuPath: live2d_path + 'waifu-tips.json',
                    cubism2Path: live2d_path + 'live2d.min.js',
                    cubism5Path: 'https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js',
                    tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
                    logLevel: 'warn',
                    drag: false,
                });
                console.log('✅ 看板娘加载成功！');
            }
        } catch (e) {
            console.log('❌ 看板娘加载失败:', e);
        }
    })();
})();
</script>

<!-- 看板娘样式确保 -->
<style>
#waifu, .live2d-widget {
    position: fixed !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 9999 !important;
    pointer-events: auto !important;
}

/* 移动端看板娘适配 */
@media (max-width: 768px) {
    #waifu, .live2d-widget {
        right: -10px !important;
        bottom: -10px !important;
        transform: scale(0.8);
    }
}
</style>
