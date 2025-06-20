---
layout: page       # 继承主题的page布局（必须！Jekyll核心识别）
title: 关于        # 浏览器标签栏显示的标题
permalink: /about/ # 页面路径，和导航栏“关于”的href保持一致
---

# 🐾关于我  

<!-- 用主题兼容的“猫咪卡片”容器，减少自定义HTML冲突 -->
<div style="background: #fff0f5; border-radius: 20px; padding: 25px; margin: 20px auto; max-width: 800px; box-shadow: 0 5px 15px rgba(255,182,193,0.3);">

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
    <div style="background: #ffe4e1; border: 2px dashed #ffb6c1; border-radius: 15px; padding: 20px; text-align: center; min-width: 200px; transition: all 0.3s ease; cursor: pointer;">
      🐈‍⬛ **GitHub**  
      [@YLCS-MM](https://github.com/YLCS-MM){:target="_blank"}  
    </div>

    <!-- 邮箱卡片（点击唤起邮件客户端） -->
    <div style="background: #ffe4e1; border: 2px dashed #ffb6c1; border-radius: 15px; padding: 20px; text-align: center; min-width: 200px; transition: all 0.3s ease; cursor: pointer;">
      📧 **邮箱**  
      [15873505918@163.com](mailto:15873505918@163.com)  
    </div>
  </div>
</div>

<!-- 保留主题风格的“漂浮猫爪”动画（极简版，避免冲突） -->
<style>
  /* 悬浮时卡片变深+上移，模拟猫咪互动感 */
  div[style*="dashed #ffb6c1"]:hover {
    background: #ffd1dc;
    transform: translateY(-3px);
  }

  /* 漂浮猫爪（分散在页面，不影响核心排版） */
  .float-paw {
    position: absolute;
    font-size: 24px;
    color: #ff69b4;
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
