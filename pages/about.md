---
layout: page       # 必须！让主题识别为“页面”，触发Markdown渲染
title: 关于        # 浏览器标签栏标题
permalink: /about/ # 页面路径，和导航栏“关于”的href严格一致
---

<!-- 用主题内置的“卡片容器”，自动继承萌化样式 -->
<div class="note info" style="background: #fce4ec; border: 2px dashed #ff8fb1; border-radius: 20px; padding: 25px; margin: 20px auto; max-width: 800px;">

  ## 👋 关于成霜喵喵  
  😸是成霜喵喵，在为高考而奋斗喵～  
  也许眼前充满苟且，但学习是为了 **诗和远方** 🐾。  

  本站于 **2025年6月19日** 正式上线，记录技术思考与生活点滴~  

  > "每一天都要像猫咪追逐阳光一样追逐知识喵！✨"  
  > —— 成霜喵喵的学习信条  


  ## 🌸 个人特质  
  - 📚 学习型猫猫  
  - 💻 技术爱好者  
  - 🎀 软萌爱好者  
  - 👂 猫耳收藏家  
  - 📋 2305班信息委员  


  ## 📮 联系成霜喵喵  
  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 20px;">
    <!-- GitHub 卡片（点击新窗口打开） -->
    <a href="https://github.com/YLCS-MM" target="_blank" 
       style="background: #fce4ec; border: 2px dashed #ff8fb1; border-radius: 15px; padding: 20px; text-align: center; min-width: 180px; text-decoration: none; color: #ff4081; transition: all 0.3s ease;">
      🐈‍⬛ GitHub<br>@YLCS-MM  
    </a>

    <!-- 邮箱卡片（点击唤起邮件客户端） -->
    <a href="mailto:15873505918@163.com" 
       style="background: #fce4ec; border: 2px dashed #ff8fb1; border-radius: 15px; padding: 20px; text-align: center; min-width: 180px; text-decoration: none; color: #ff4081; transition: all 0.3s ease;">
      📧 邮箱<br>15873505918@163.com  
    </a>
  </div>
</div>

<!-- 保留主题“漂浮猫爪”动画（极简版，不干扰核心排版） -->
<style>
  /* 卡片悬浮互动：模拟猫咪蹭手 */
  a[style*="dashed #ff8fb1"]:hover {
    background: #ffcdd2;
    transform: translateY(-3px);
  }

  /* 漂浮猫爪（分散在页面，强化萌感） */
  .float-paw {
    position: absolute;
    font-size: 24px;
    color: #ff8fb1;
    animation: float 3s infinite ease-in-out;
  }
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }
  .paw-1 { top: 20%; left: 15%; }
  .paw-2 { top: 30%; right: 20%; animation-delay: 1s; }
  .paw-3 { bottom: 25%; left: 25%; animation-delay: 2s; }
</style>
<span class="float-paw paw-1">🐾</span>
<span class="float-paw paw-2">🐾</span>
<span class="float-paw paw-3">🐾</span>
