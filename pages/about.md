---
layout: page
title: 关于
permalink: /about/
comments: false
---

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .about-container {
        max-width: 800px;
        margin: 30px auto;
        padding: 40px;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
        text-align: center;
    }
    
    /* 头像区域 */
    .avatar-section {
        margin-bottom: 30px;
    }
    
    .avatar-container {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 4px solid white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        margin: 0 auto 20px;
        overflow: hidden;
        background: #ffd700;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .name {
        font-size: 2.2rem;
        color: #ff69b4;
        margin: 10px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    .title {
        font-size: 1.3rem;
        color: #ff1493;
        margin-bottom: 25px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    /* 文本内容 */
    .content-text {
        line-height: 1.8;
        margin-bottom: 20px;
        font-size: 1.1rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    blockquote {
        border-left: 5px solid #ffb6c1;
        padding: 15px 20px;
        background: rgba(255, 228, 225, 0.5);
        margin: 20px 0;
        border-radius: 0 10px 10px 0;
        font-style: italic;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    /* 个人特质标签 */
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
        justify-content: center;
    }
    
    .tag {
        background: rgba(255,182,193,0.2);
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    /* 联系卡片 */
    .contact-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin-top: 30px;
    }
    
    .contact-card {
        background: rgba(255,182,193,0.1);
        border: 2px dashed #ffb6c1;
        border-radius: 15px;
        padding: 20px;
        text-align: center;
        min-width: 200px;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .contact-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(255,182,193,0.4);
    }
    
    .contact-title {
        font-weight: bold;
        color: #ff69b4;
        margin-bottom: 10px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    .contact-link {
        color: #ff69b4;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    .contact-link:hover {
        text-decoration: underline;
    }
    
    /* 漂浮猫爪动画 */
    .floating {
        position: absolute;
        font-size: 24px;
        color: #ff69b4;
        animation: float 3s infinite ease-in-out;
        z-index: 0;
    }
    
    .paw1 { top: 20%; left: 15%; }
    .paw2 { top: 30%; right: 20%; animation-delay: 1s; }
    .paw3 { bottom: 25%; left: 25%; animation-delay: 2s; }
    
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
        .about-container {
            padding: 25px;
        }
        
        .avatar-container {
            width: 120px;
            height: 120px;
        }
        
        .name {
            font-size: 1.8rem;
        }
        
        .contact-cards {
            flex-direction: column;
        }
    }
</style>

<div class="about-container">
    <!-- 漂浮爪印 -->
    <div class="floating paw1">🐾</div>
    <div class="floating paw2">🐾</div>
    <div class="floating paw3">🐾</div>
    
    <!-- 头像区域 -->
    <div class="avatar-section">
        <div class="avatar-container">
            <img src="https://avatars.githubusercontent.com/u/193340716?v=4" alt="成霜·喵喵的头像" class="avatar">
        </div>
        <h1 class="name">成霜·喵喵</h1>
        <p class="title">高考奋斗中の成霜·喵喵🐾</p>
    </div>
    
    <!-- 关于我段落 -->
    <div class="content-text">
        <p>窝是成霜·喵喵，在为高考而奋斗喵～ 也许眼前充满苟且，但学习是为了 <strong>诗和远方</strong> 🐾。</p>
        <p>本站于 <strong>2025年6月19日</strong> 正式上线，记录技术思考与生活点滴~</p>
    </div>
    
    <blockquote>
        "每一天都要像猫咪追逐阳光一样追逐知识喵！✨" <br>
        —— 成霜·喵喵的学习信条
    </blockquote>

    <!-- 个人特质标签 -->
    <div class="tags">
        <span class="tag">🐱学习型猫猫</span>
        <span class="tag">💻技术爱好者</span>
        <span class="tag">🎀软萌爱好者</span>
        <span class="tag">👂猫耳收藏家</span>
        <span class="tag">📋2305班信息委员</span>
    </div>

    <!-- 联系卡片 -->
    <div class="contact-cards">
        <div class="contact-card">
            <p class="contact-title">GitHub</p>
            <a href="https://github.com/YLCS-MM" class="contact-link" target="_blank">@YLCS-MM</a>
        </div>
        <div class="contact-card">
            <p class="contact-title">邮箱</p>
            <a href="mailto:15873505918@163.com" class="contact-link">15873505918@163.com</a>
        </div>
    </div>
</div>

<script>
    // 为联系卡片添加点击效果
    document.addEventListener('DOMContentLoaded', function() {
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach(card => {
            card.addEventListener('click', function() {
                const link = this.querySelector('a');
                if (link) {
                    window.open(link.href, '_blank');
                }
            });
        });
    });
</script>
