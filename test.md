---
layout: default
title: "关于成霜喵喵"
permalink: /about/
description: "高考奋斗中的成霜喵喵 - 技术思考与生活点滴"
---

<!-- 🎀 甘城猫猫风格 - 居中名片设计 -->
<style>
/* 🎯 全局重置与基础样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Comic Sans MS", "微软雅黑", sans-serif;
    background: linear-gradient(135deg, #fff0f5, #f0f8ff);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/* 🎯 主名片容器 - 完全居中 */
.profile-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    padding: 40px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 20px 40px rgba(255, 182, 193, 0.3);
    border: 3px solid #ffb6c1;
    text-align: center;
    position: relative;
    overflow: hidden;
}

/* 🎯 名片装饰效果 */
.profile-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ffb6c1, #87ceeb, #ffb6c1);
}

/* 🎯 头像区域 */
.avatar-section {
    margin-bottom: 20px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #87ceeb;
    background: linear-gradient(45deg, #ffb6c1, #87ceeb);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 40px;
}

/* 🎯 姓名和标题 */
.name {
    color: #4682b4;
    font-size: 2.2em;
    margin-bottom: 5px;
    font-weight: bold;
}

.subtitle {
    color: #ff69b4;
    font-size: 1.1em;
    margin-bottom: 20px;
}

/* 🎯 介绍文本 */
.intro {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: left;
}

/* 🎯 信条部分 */
.motto {
    background: linear-gradient(135deg, #f8fdff, #fff9f9);
    border-left: 4px solid #87ceeb;
    padding: 15px;
    margin: 20px 0;
    border-radius: 10px;
    text-align: left;
}

.motto-text {
    color: #4682b4;
    font-style: italic;
    margin-bottom: 5px;
}

.motto-author {
    color: #ff69b4;
    text-align: right;
    font-size: 0.9em;
}

/* 🎯 标签云 */
.tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
}

.tag {
    background: linear-gradient(45deg, #87ceeb, #4682b4);
    color: white;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 0.9em;
    transition: all 0.3s ease;
}

.tag:hover {
    background: linear-gradient(45deg, #ffb6c1, #ff69b4);
    transform: translateY(-2px);
}

/* 🎯 联系信息 */
.contact-info {
    margin: 25px 0;
}

.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    color: #666;
}

.contact-icon {
    margin-right: 8px;
    color: #ff69b4;
}

/* 🎯 网站信息 */
.site-info {
    color: #999;
    font-size: 0.9em;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px dashed #ccc;
}

/* 🎯 页脚 */
.footer {
    color: #ccc;
    margin-top: 20px;
    font-size: 0.8em;
}

/* 🎯 移动端适配 */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }
    
    .profile-card {
        padding: 30px 20px;
        margin: 10px;
    }
    
    .name {
        font-size: 1.8em;
    }
    
    .tags {
        gap: 5px;
    }
    
    .tag {
        padding: 4px 10px;
        font-size: 0.8em;
    }
}

/* 🎯 加载动画 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.profile-card {
    animation: fadeInUp 0.8s ease;
}
</style>

<!-- 🎯 名片式内容 -->
<div class="profile-card">
    <!-- 头像区域 -->
    <div class="avatar-section">
        <div class="avatar">🐱</div>
        <h1 class="name">成霜喵喵</h1>
        <p class="subtitle">高考奋斗中的成霜喵喵</p>
    </div>

    <!-- 介绍文本 -->
    <div class="intro">
        <p>是成霜喵喵，在为高考而奋斗喵~也许眼前充满苟且，但学习是为了诗和远方</p>
        <p>本站于2025年6月19日正式上线，记录技术思考与生活点滴~</p>
    </div>

    <!-- 学习信条 -->
    <div class="motto">
        <p class="motto-text">"每一天都要像猫咪追逐阳光一样追逐知识喵！"</p>
        <p class="motto-author">——成霜喵喵的学习信条</p>
    </div>

    <!-- 标签云 -->
    <div class="tags">
        <span class="tag">学习型猫猫</span>
        <span class="tag">技术爱好者</span>
        <span class="tag">软萌爱好者</span>
        <span class="tag">猫耳收藏家</span>
        <span class="tag">2305班信息委员</span>
    </div>

    <!-- 联系信息 -->
    <div class="contact-info">
        <div class="contact-item">
            <span class="contact-icon">🐙</span>
            <span>GitHub: @YLCS-MM</span>
        </div>
        <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span>邮箱: 15873505918@163.com</span>
        </div>
    </div>

    <!-- 网站信息 -->
    <div class="site-info">
        <p>访问地址: ylcs-mm.github.io</p>
        <p>建立时间: 2025年6月19日</p>
    </div>

    <!-- 页脚 -->
    <div class="footer">
        <p>©2025 成霜喵喵</p>
    </div>
</div>

<!-- 🎯 交互效果 -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // 标签悬停效果
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 卡片加载动画
    const card = document.querySelector('.profile-card');
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    }, 100);
});
</script>
