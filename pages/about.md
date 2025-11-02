---
layout: default
title: 关于
permalink: /about/
comments: false
---

<!-- 添加首页顶部样式 -->
<style>
/* 🎯 首页顶部背景图片样式 */
.neko-about-top {
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

.neko-about-top::before {
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

.neko-about-top > * {
    position: relative;
    z-index: 1;
}

/* 首页顶部内容样式 */
.neko-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #ffb6c1;
    box-shadow: 0 0 25px rgba(255, 182, 193, 0.5);
    margin: 0 auto 15px;
}

.neko-site-title {
    color: #ff69b4;
    font-size: 2.5em;
    font-weight: bold;
    margin: 10px 0 5px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.neko-site-location {
    color: #87ceeb;
    font-size: 1.2em;
    margin-bottom: 25px;
    font-weight: 500;
}

.neko-nav {
    display: inline-flex;
    gap: 25px;
    background: rgba(255, 255, 255, 0.85);
    padding: 12px 25px;
    border-radius: 30px;
    margin-top: 15px;
    backdrop-filter: blur(10px);
}

.neko-nav a {
    color: #666;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 25px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.neko-nav a:hover {
    color: #ff69b4;
    background: rgba(255, 182, 193, 0.25);
    transform: translateY(-2px);
}

/* 移动端适配 */
@media (max-width: 768px) {
    .neko-about-top {
        padding: 25px 0;
        margin: 15px auto;
    }
    .neko-site-title {
        font-size: 2em;
    }
    .neko-nav {
        flex-wrap: wrap;
        gap: 15px;
        padding: 10px 15px;
    }
}
</style>

<!-- 首页样式顶部区域 -->
<div class="neko-about-top">
    <img src="https://avatars.githubusercontent.com/u/193340716?v=4" 
         alt="成霜喵喵" class="neko-avatar">
    
    <h1 class="neko-site-title">成霜喵喵の小窝</h1>
    <p class="neko-site-location">湖南,郴州 · ylcs-mm</p>
    
    <nav class="neko-nav">
        <a href="/">首页</a>
        <a href="/categories/">分类</a>
        <a href="/about/">关于</a>
        <a href="/announcements/">公告</a>
    </nav>
</div>

<!-- 原有的关于内容保持不变 -->
<div style="max-width: 800px; margin: 30px auto; padding: 25px; background: linear-gradient(135deg,#fff0f5,#e6e6fa); border-radius: 20px; box-shadow: 0 5px 15px rgba(255,182,193,0.3); position: relative;">

  <!-- 顶部猫耳装饰 -->
  <div style="position: absolute; top: -30px; left: 50%; transform: translateX(-50%); display: flex; gap: 80px;">
    <div style="width: 40px; height: 60px; background: #ffb6c1; clip-path: polygon(50% 0%,0% 100%,100% 100%);"></div>
    <div style="width: 40px; height: 60px; background: #ffb6c1; clip-path: polygon(50% 0%,0% 100%,100% 100%);"></div>
  </div>

  <!-- 头像+昵称区域 -->
  <div style="text-align: center; margin-bottom: 30px;">
    <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(45deg,#ffb6c1,#e6e6fa); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 50px; color: white; border: 4px solid white; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">🐱</div>
    <h1 style="font-size: 2rem; color: #ff69b4; margin: 10px 0;">成霜喵喵</h1>
    <p style="font-size: 1.2rem; color: #ff1493;">高考奋斗中の成霜喵喵🐾</p>
  </div>

  <!-- 关于我段落 -->
  <p style="line-height: 1.8; margin-bottom: 15px;">
    😸是成霜喵喵，在为高考而奋斗喵～ 也许眼前充满苟且，但学习是为了 <strong>诗和远方</strong> 🐾。<br>
    本站于 <strong>2025年6月19日</strong> 正式上线，记录技术思考与生活点滴~
  </p>
  <blockquote style="border-left: 5px solid #ffb6c1; padding: 10px 15px; background: #ffe4e1; margin: 15px 0;">
    "每一天都要像猫咪追逐阳光一样追逐知识喵！✨" <br>
    —— 成霜喵喵的学习信条
  </blockquote>

  <!-- 个人特质标签 -->
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">🐱学习型猫猫</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">💻技术爱好者</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">🎀软萌爱好者</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">👂猫耳收藏家</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">📋2305班信息委员</span>
  </div>

  <!-- 联系卡片 -->
  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
    <div style="background: rgba(255,182,193,0.1); border: 2px dashed #ffb6c1; border-radius: 15px; padding: 20px; text-align: center; min-width: 200px; transition: all 0.3s ease; cursor: pointer;">
      <p style="font-weight: bold; color: #ff69b4; margin-bottom: 8px;">GitHub</p>
      <a href="https://github.com/YLCS-MM" target="_blank" style="color: #ff69b4; text-decoration: none;">@YLCS-MM</a>
    </div>
    <div style="background: rgba(255,182,193,0.1); border: 2px dashed #ffb6c1; border-radius: 15px; padding: 20px; text-align: center; min-width: 200px; transition: all 0.3s ease; cursor: pointer;">
      <p style="font-weight: bold; color: #ff69b4; margin-bottom: 8px;">邮箱</p>
      <a href="mailto:15873505918@163.com" style="color: #ff69b4; text-decoration: none;">15873505918@163.com</a>
    </div>
  </div>

  <!-- 漂浮猫爪动画 -->
  <span style="position: absolute; top: 20%; left: 15%; font-size: 24px; color: #ff69b4; animation: float 3s infinite ease-in-out;">🐾</span>
  <span style="position: absolute; top: 30%; right: 20%; font-size: 24px; color: #ff69b4; animation: float 3s infinite ease-in-out; animation-delay: 1s;">🐾</span>
  <span style="position: absolute; bottom: 25%; left: 25%; font-size: 24px; color: #ff69b4; animation: float 3s infinite ease-in-out; animation-delay: 2s;">🐾</span>
  <style>
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0); }
    }
  </style>
</div>

