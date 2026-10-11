---
title: "🐱 关于"
date: 2025-06-19
type: "about"
description: "关于成霜·喵喵"
---

<div class="about-container">
  <div class="about-avatar-section">
    <div class="about-avatar">
      <img src="https://avatars.githubusercontent.com/u/193340716?v=4" alt="成霜·喵喵的头像">
    </div>
    <h1 class="about-name">成霜·喵喵</h1>
    <p class="about-title">高考奋斗中の成霜·喵喵 🐾</p>
  </div>

  <div class="about-bio">
    <p>窝是成霜·喵喵，在为高考而奋斗喵～ 也许眼前充满苟且，但学习是为了 <strong>诗和远方</strong> 🐾。</p>
    <p>本站于 <strong>2025年6月19日</strong> 正式上线，记录技术思考与生活点滴~</p>
  </div>

  <blockquote class="about-quote">
    "每一天都要像猫咪追逐阳光一样追逐知识喵！✨"<br>
    <span>—— 成霜·喵喵的学习信条</span>
  </blockquote>

  <div class="about-tags">
    <span class="about-tag">🐱 学习型猫猫</span>
    <span class="about-tag">💻 技术爱好者</span>
    <span class="about-tag">🎀 软萌爱好者</span>
    <span class="about-tag">👂 猫耳收藏家</span>
    <span class="about-tag">📋 2305班信息委员</span>
  </div>

  <div class="about-contact">
    <a class="about-contact-card" href="https://github.com/YLCS-MM" target="_blank">
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
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.about-avatar-section {
  margin-bottom: 20px;
  position: relative;
}
.about-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 3px solid var(--neko-light-pink);
  box-shadow: 0 0 30px rgba(255,105,180,0.22), 0 0 0 8px rgba(255,182,193,0.06);
  margin: 0 auto 14px;
  overflow: hidden;
  animation: aboutFloat 3s ease-in-out infinite;
}
@keyframes aboutFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.about-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about-name {
  font-size: 1.7em;
  color: var(--neko-pink);
  font-weight: 700;
  margin-bottom: 2px;
  letter-spacing: 2px;
}
.about-title {
  font-size: 0.95em;
  color: var(--neko-gray);
  margin-bottom: 16px;
}
.about-bio {
  max-width: 480px;
  margin: 0 auto 16px;
  line-height: 1.7;
  font-size: 0.95em;
  text-align: left;
}
.about-bio p { margin-bottom: 6px; }
.about-quote {
  border-left: 4px solid var(--neko-light-pink);
  padding: 10px 18px;
  margin: 14px auto;
  max-width: 480px;
  background: linear-gradient(135deg, #fff0f5, #fff9e6);
  border-radius: 0 10px 10px 0;
  font-style: italic;
  color: var(--neko-gray);
  text-align: left;
  font-size: 0.92em;
}
.about-quote span { opacity: 0.7; }
.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin: 16px 0;
}
.about-tag {
  background: var(--neko-pastel-pink);
  color: var(--neko-pink);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.82em;
  border: 1px solid var(--neko-light-pink);
  transition: all 0.2s;
}
.about-tag:hover {
  background: var(--neko-pink);
  color: white;
  transform: translateY(-2px);
}
.about-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 18px;
}
.about-contact-card {
  background: linear-gradient(135deg, #fff0f5, #fff9e6);
  border: 2px dashed var(--neko-light-pink);
  border-radius: 14px;
  padding: 16px 22px;
  text-align: center;
  min-width: 140px;
  transition: all 0.3s;
  text-decoration: none;
  display: block;
}
.about-contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(255,105,180,0.14);
  border-color: var(--neko-pink);
}
.contact-icon {
  font-size: 1.5em;
  display: block;
  margin-bottom: 6px;
}
.contact-label {
  font-weight: 600;
  color: var(--neko-pink);
  margin-bottom: 2px;
  font-size: 0.9em;
}
.contact-value {
  font-size: 0.8em;
  color: var(--neko-gray);
}
@media (max-width: 768px) {
  .about-avatar { width: 105px; height: 105px; }
  .about-name { font-size: 1.4em; }
  .about-contact-card { min-width: 100%; }
}
</style>