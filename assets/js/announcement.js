// 公告弹窗逻辑（assets/js/announcement.js）
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('announcement-popup');
  const closeBtn = document.getElementById('close-popup');
  const cookieName = 'announcement_closed'; // Cookie名称（标记用户是否关闭）

  // 1. 获取Cookie值（检查用户是否已确认）
  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null; // 未找到Cookie
  }

  // 2. 设置Cookie（用户确认后，1天内不再显示）
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // 过期时间：days天后
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`; // 全局有效
  }

  // 3. 显示弹窗（如果未关闭过）
  if (!getCookie(cookieName)) {
    popup.classList.remove('hidden'); // 移除隐藏类，显示弹窗
  }

  // 4. 点击关闭按钮，设置Cookie并隐藏弹窗
  closeBtn.addEventListener('click', function() {
    setCookie(cookieName, 'true', 1); // 1天内不再显示
    popup.classList.add('hidden'); // 添加隐藏类，隐藏弹窗
  });
});
