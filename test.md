---
layout: default
title: "🐱 测试关于页面"
permalink: /test/
description: "成霜喵喵的测试关于页面 - 甘城猫猫风格"
---

<!-- 🎀 甘城猫猫风格CSS -->
<style>
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

.test-about-container {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    padding: 40px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 20px 40px rgba(255, 182, 193, 0.3);
    border: 3px solid #ffb6c1;
    text-align: center;
}

.avatar-section {
    margin-bottom: 20px;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ffb6c1, #87ceeb);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 40px;
    border: 3px solid #87ceeb;
}

.name {
    color: #4682b4;
    font-size: 2.2em;
    margin-bottom: 5px;
}

.subtitle {
    color: #ff69b4;
    font-size: 1.1em;
    margin-bottom: 20px;
}

.intro-text {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: left;
}

.motto-section {
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

.tags-cloud {
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

.contact-info {
    margin: 25px 0;
}

.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    color: #666;
}

.popular-repos {
    margin: 25px 0;
    text-align: left;
}

.repo-item {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #e0f7fa;
    border-radius: 10px;
    padding: 12px;
    margin: 10px 0;
    transition: all 0.3s ease;
}

.repo-item:hover {
    border-color: #87ceeb;
    transform: translateX(5px);
}

.repo-name {
    color: #4682b4;
    font-weight: bold;
    margin-bottom: 5px;
}

.repo-meta {
    color: #888;
    font-size: 0.9em;
    display: flex;
    gap: 15px;
}

.footer {
    color: #999;
    margin-top: 30px;
    padding-top: 15px;
    border-top: 1px dashed #ccc;
    font-size: 0.9em;
}

@media (max-width: 768px) {
    .test-about-container {
        padding: 30px 20px;
        margin: 10px;
    }
    
    .name {
        font-size: 1.8em;
    }
}
</style>

<div class="test-about-container">
    <!-- 🎯 头像和名称 -->
    <div class="avatar-section">
        <div class="avatar">🐱</div>
        <h1 class="name">成霜喵喵</h1>
        <p class="subtitle">高考奋斗中的成霜喵喵</p>
    </div>

    <!-- 🎯 介绍文本 -->
    <div class="intro-text">
        <p>是成霜喵喵，在为高考而奋斗喵~也许眼前充满苟且，但学习是为了诗和远方</p>
        <p>本站于2025年6月19日正式上线，记录技术思考与生活点滴~</p>
    </div>

    <!-- 🎯 学习信条 -->
    <div class="motto-section">
        <p class="motto-text">"每一天都要像猫咪追逐阳光一样追逐知识喵！"</p>
        <p class="motto-author">——成霜喵喵的学习信条</p>
    </div>

    <!-- 🎯 身份标签 -->
    <div class="tags-cloud">
        <span class="tag">学习型猫猫</span>
        <span class="tag">技术爱好者</span>
        <span class="tag">软萌爱好者</span>
        <span class="tag">猫耳收藏家</span>
        <span class="tag">2305班信息委员</span>
    </div>

    <!-- 🎯 联系方式 -->
    <div class="contact-info">
        <div class="contact-item">
            <span style="margin-right: 8px;">🐙</span>
            <span>GitHub: @YLCS-MM</span>
        </div>
        <div class="contact-item">
            <span style="margin-right: 8px;">📧</span>
            <span>邮箱: 15873505918@163.com</span>
        </div>
    </div>

    <!-- 🎯 热门仓库 -->
    <div class="popular-repos">
        <h3 style="color: #4682b4; margin-bottom: 15px;">我的热门仓库喵</h3>
        
        <div class="repo-item">
            <div class="repo-name">ylcs-mm1.github.io</div>
            <div class="repo-meta">
                <span>⭐ 1</span>
                <span>🔄 0</span>
                <span>📅 2025-06-20</span>
            </div>
        </div>
        
        <div class="repo-item">
            <div class="repo-name">ylcs-mm2.github.io</div>
            <div class="repo-meta">
                <span>⭐ 0</span>
                <span>🔄 0</span>
                <span>📅 2025-06-20</span>
            </div>
        </div>
        
        <div class="repo-item">
            <div class="repo-name">ylcs-mm.github.io</div>
            <div class="repo-meta">
                <span>⭐ 0</span>
                <span>🔄 0</span>
                <span>📅 2025-11-02</span>
            </div>
            <div style="color: #666; font-size: 0.9em; margin-top: 5px;">
                Jekyll Themes / GitHub Pages 博客模板
            </div>
        </div>
        
        <div class="repo-item">
            <div class="repo-name">kssj.github.io</div>
            <div class="repo-meta">
                <span>⭐ 0</span>
                <span>🔄 0</span>
                <span>📅 2025-08-04</span>
            </div>
            <div style="color: #666; font-size: 0.9em; margin-top: 5px;">
                班级电脑用考试时间展示
            </div>
        </div>
    </div>

    <!-- 🎯 页脚 -->
    <div class="footer">
        <p>访问地址: ylcs-mm.github.io</p>
        <p>©2025 成霜喵喵</p>
    </div>
</div>

<!-- 🎯 交互脚本 -->
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
    
    // 仓库卡片动画
    const repos = document.querySelectorAll('.repo-item');
    repos.forEach((repo, index) => {
        repo.style.opacity = '0';
        repo.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            repo.style.transition = 'all 0.5s ease';
            repo.style.opacity = '1';
            repo.style.transform = 'translateX(0)';
        }, index * 200);
    });
    
    // 页面加载动画
    const container = document.querySelector('.test-about-container');
    container.style.opacity = '0';
    container.style.transform = 'scale(0.9)';
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
    }, 300);
});
</script>
