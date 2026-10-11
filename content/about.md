---
title: "🐱 关于"
date: 2025-06-19
type: "about"
description: "关于成霜·喵喵"
---

<div class="about-container">
  <div class="about-decor">
    <span class="about-paw" style="top:5%;left:8%;animation-delay:0s">🐾</span>
    <span class="about-paw" style="top:18%;right:6%;animation-delay:1.2s">🐾</span>
    <span class="about-paw" style="top:50%;left:5%;animation-delay:2.4s">🐾</span>
    <span class="about-paw" style="top:62%;right:8%;animation-delay:0.6s">🐾</span>
    <span class="about-paw" style="top:82%;left:12%;animation-delay:1.8s">🐾</span>
    <span class="about-paw" style="top:90%;right:10%;animation-delay:3.0s">🐾</span>
    <span class="about-star" style="top:25%;left:15%;animation-delay:0.3s">✦</span>
    <span class="about-star" style="top:40%;right:14%;animation-delay:1.5s">✧</span>
    <span class="about-star" style="top:70%;left:20%;animation-delay:2.1s">⋆</span>
  </div>

  <div class="about-avatar-section">
    <div class="about-avatar-wrap">
      <div class="about-avatar-ring"></div>
      <div class="about-avatar">
        <img src="https://avatars.githubusercontent.com/u/193340716?v=4" alt="成霜·喵喵的头像">
      </div>
    </div>
    <h1 class="about-name">成霜·喵喵</h1>
    <p class="about-title">高考奋斗中の成霜·喵喵 🐾</p>
  </div>

  <div class="about-bio card">
    <p>窝是成霜·喵喵，在为高考而奋斗喵～ 也许眼前充满苟且，但学习是为了 <strong>诗和远方</strong> 🐾。</p>
    <p>本站于 <strong>2025年6月19日</strong> 正式上线，记录技术思考与生活点滴~</p>
  </div>

  <blockquote class="about-quote">
    <span class="about-quote-mark">"</span>
    每一天都要像猫咪追逐阳光一样追逐知识喵！✨<br>
    <span class="about-quote-author">—— 成霜·喵喵的学习信条</span>
  </blockquote>

  <div class="about-tags">
    <span class="about-tag">🐱 学习型猫猫</span>
    <span class="about-tag">💻 技术爱好者</span>
    <span class="about-tag">🎀 软萌爱好者</span>
    <span class="about-tag">👂 猫耳收藏家</span>
    <span class="about-tag">📋 2305班信息委员</span>
  </div>

  <div class="about-contact">
    <a class="about-contact-card" href="https://github.com/YLCS-MM" target="_blank" rel="noopener">
      <span class="contact-icon">🐈</span>
      <div class="contact-label">GitHub</div>
      <div class="contact-value">@YLCS-MM</div>
    </a>
    <a class="about-contact-card" href="mailto:2992412549@qq.com">
      <span class="contact-icon">✉️</span>
      <div class="contact-label">邮箱</div>
      <div class="contact-value">2992412549@qq.com</div>
    </a>
  </div>
</div>

<style>
.about-container {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.about-decor {
  position: absolute;
  inset: -20px -40px -40px;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.about-paw {
  position: absolute;
  font-size: 1.4em;
  opacity: 0;
  animation: aboutPawFloat 4s infinite ease-in-out;
}
@keyframes aboutPawFloat {
  0%, 100% { opacity: 0; transform: translateY(0) rotate(0deg); }
  20% { opacity: 0.45; }
  50% { opacity: 0.15; transform: translateY(-18px) rotate(15deg); }
}
.about-star {
  position: absolute;
  color: var(--neko-light-pink);
  font-size: 1.1em;
  opacity: 0;
  animation: aboutStarTwinkle 3s infinite ease-in-out;
}
@keyframes aboutStarTwinkle {
  0%, 100% { opacity: 0; transform: scale(0.8); }
  40% { opacity: 0.6; transform: scale(1.2); }
  70% { opacity: 0.2; }
}

.about-avatar-section {
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}
.about-avatar-wrap {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 18px;
}
.about-avatar-ring {
  width: 148px; height: 148px;
  border-radius: 50%;
  border: 2px dashed var(--neko-light-pink);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ringSpin 20s linear infinite;
  opacity: 0.5;
}
@keyframes ringSpin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
.about-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 3px solid var(--neko-light-pink);
  box-shadow: 0 0 40px var(--neko-pink-glow), 0 0 0 10px rgba(255, 182, 193, 0.05);
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: aboutFloat 3s ease-in-out infinite;
  z-index: 1;
}
@keyframes aboutFloat {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-7px); }
}
.about-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about-name {
  font-size: 1.8em;
  color: var(--neko-pink);
  font-weight: 700;
  margin-bottom: 4px;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
}
.about-title {
  font-size: 0.95em;
  color: var(--neko-gray);
  margin-bottom: 0;
  position: relative;
  z-index: 1;
}

.about-bio {
  max-width: 500px;
  margin: 0 auto 20px;
  padding: 22px 28px;
  line-height: 1.75;
  font-size: 0.95em;
  text-align: left;
  position: relative;
  z-index: 1;
}
.about-bio p { margin-bottom: 6px; }
.about-bio strong { color: var(--neko-pink); }

.about-quote {
  border-left: 4px solid var(--neko-light-pink);
  padding: 12px 22px 12px 18px;
  margin: 14px auto 20px;
  max-width: 500px;
  background: linear-gradient(135deg, rgba(255, 240, 245, 0.5), rgba(255, 249, 230, 0.5));
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-style: italic;
  color: var(--neko-gray);
  text-align: left;
  font-size: 0.92em;
  position: relative;
  z-index: 1;
}
.about-quote-mark {
  position: absolute;
  top: -4px;
  left: 8px;
  font-size: 2.2em;
  color: var(--neko-light-pink);
  opacity: 0.4;
  font-family: Georgia, serif;
  line-height: 1;
}
.about-quote-author { opacity: 0.65; font-size: 0.9em; display: inline-block; margin-top: 4px; }

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 16px 0 22px;
  position: relative;
  z-index: 1;
}
.about-tag {
  background: linear-gradient(135deg, var(--neko-pastel-pink), rgba(255, 240, 245, 0.5));
  color: var(--neko-pink);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.84em;
  border: 1px solid rgba(255, 182, 193, 0.3);
  transition: all var(--transition-fast);
}
.about-tag:hover {
  background: var(--neko-pink);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 3px 14px var(--neko-pink-glow);
}

.about-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  margin-top: 6px;
  position: relative;
  z-index: 1;
}
.about-contact-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 182, 193, 0.25);
  border-radius: var(--radius-md);
  padding: 20px 26px;
  text-align: center;
  min-width: 150px;
  transition: all var(--transition-smooth);
  text-decoration: none;
  display: block;
  box-shadow: var(--shadow-sm);
}
.about-contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow);
  border-color: var(--neko-pink);
}
.contact-icon {
  font-size: 1.6em;
  display: block;
  margin-bottom: 8px;
}
.contact-label {
  font-weight: 600;
  color: var(--neko-pink);
  margin-bottom: 3px;
  font-size: 0.9em;
}
.contact-value {
  font-size: 0.82em;
  color: var(--neko-gray);
}

@media (max-width: 768px) {
  .about-decor { inset: -10px -20px -20px; }
  .about-paw { font-size: 1.1em; }
  .about-star { font-size: 0.8em; }
  .about-avatar-wrap { width: 130px; height: 130px; }
  .about-avatar { width: 110px; height: 110px; }
  .about-avatar-ring { width: 126px; height: 126px; }
  .about-name { font-size: 1.45em; }
  .about-bio { padding: 18px 20px; }
}

@media (max-width: 480px) {
  .about-avatar-wrap { width: 100px; height: 100px; }
  .about-avatar { width: 88px; height: 88px; }
  .about-avatar-ring { display: none; }
  .about-name { font-size: 1.25em; }
  .about-title { font-size: 0.82em; }
  .about-bio { padding: 14px 16px; font-size: 0.88em; }
  .about-tag { padding: 4px 12px; font-size: 0.74em; }
  .about-contact-card { min-width: 100%; padding: 14px 20px; }
  .about-decor { display: none; }
}
</style>