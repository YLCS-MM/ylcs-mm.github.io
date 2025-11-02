---
layout: default    # 改回default布局
title: 关于
permalink: /about/
comments: false
---


<!-- 用纯HTML+内联CSS写内容，彻底避免Markdown解析错误 -->
<div style="max-width: 800px; margin: 30px auto; padding: 25px; background: linear-gradient(135deg,#fff0f5,#e6e6fa); border-radius: 20px; box-shadow: 0 5px 15px rgba(255,182,193,0.3); position: relative;">

  <!-- 顶部猫耳装饰（和主题头图呼应） -->
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

  <!-- 个人特质标签（带背景+圆角） -->
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">🐱学习型猫猫</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">💻技术爱好者</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">🎀软萌爱好者</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">👂猫耳收藏家</span>
    <span style="background: rgba(255,182,193,0.2); padding: 5px 10px; border-radius: 10px; font-size: 0.9rem;">📋2305班信息委员</span>
  </div>

  <!-- 联系卡片（可点击+悬浮特效） -->
  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
    <!-- GitHub卡片 -->
    <div style="background: rgba(255,182,193,0.1); border: 2px dashed #ffb6c1; border-radius: 15px; padding: 20px; text-align: center; min-width: 200px; transition: all 0.3s ease; cursor: pointer;">
      <p style="font-weight: bold; color: #ff69b4; margin-bottom: 8px;">GitHub</p>
      <a href="https://github.com/YLCS-MM" target="_blank" style="color: #ff69b4; text-decoration: none;">@YLCS-MM</a>
    </div>
    <!-- 邮箱卡片 -->
    <div style="background: rgba(255,182,193,0.1); border: 2px dashed #ffb6c1; border-radius: 15px; padding: 20px; text-align: center; min-width: 200px; transition: all 0.3s ease; cursor: pointer;">
      <p style="font-weight: bold; color: #ff69b4; margin-bottom: 8px;">邮箱</p>
      <a href="mailto:15873505918@163.com" style="color: #ff69b4; text-decoration: none;">15873505918@163.com</a>
    </div>
  </div>

  <!-- 漂浮猫爪动画（页面氛围担当） -->
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

