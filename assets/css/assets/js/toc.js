// 甘城猫猫风格目录功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建目录容器
    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-container';
    tocContainer.innerHTML = `
        <div class="toc-header">文章目录</div>
        <ul class="toc-list" id="toc-list"></ul>
    `;
    document.body.appendChild(tocContainer);
    
    // 创建目录切换按钮（移动端使用）
    const tocToggle = document.createElement('div');
    tocToggle.className = 'toc-toggle';
    tocToggle.innerHTML = '<span class="toc-toggle-icon">📑</span>';
    document.body.appendChild(tocToggle);
    
    // 获取所有标题元素
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocList = document.getElementById('toc-list');
    
    // 生成目录
    headings.forEach((heading, index) => {
        // 跳过文章主标题
        if (heading.classList.contains('article-title') || 
            heading.classList.contains('neko-top-title')) {
            return;
        }
        
        // 确保标题有ID
        if (!heading.id) {
            heading.id = 'heading-' + index;
        }
        
        // 创建目录项
        const listItem = document.createElement('li');
        listItem.className = 'toc-item';
        
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.className = 'toc-link';
        link.textContent = heading.textContent;
        
        // 根据标题级别添加缩进
        const level = parseInt(heading.tagName.substring(1));
        if (level > 1) {
            link.classList.add('toc-level-' + level);
        }
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
        
        // 添加点击事件
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移动端点击后关闭目录
            if (window.innerWidth <= 768) {
                tocContainer.classList.remove('active');
            }
            
            // 滚动到对应标题
            const targetElement = document.getElementById(heading.id);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 激活当前可见的目录项
    function setActiveTocItem() {
        const tocLinks = document.querySelectorAll('.toc-link');
        let activeIndex = -1;
        
        // 找到当前可见的标题
        for (let i = headings.length - 1; i >= 0; i--) {
            const rect = headings[i].getBoundingClientRect();
            if (rect.top <= 100) { // 距离顶部100px以内
                activeIndex = i;
                break;
            }
        }
        
        // 更新激活状态
        tocLinks.forEach((link, index) => {
            if (index === activeIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', setActiveTocItem);
    setActiveTocItem(); // 初始化
    
    // 移动端目录切换功能
    tocToggle.addEventListener('click', function() {
        tocContainer.classList.toggle('active');
    });
    
    // 点击目录外部关闭目录（移动端）
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !tocContainer.contains(e.target) && 
            !tocToggle.contains(e.target)) {
            tocContainer.classList.remove('active');
        }
    });
    
    // 响应窗口大小变化
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            tocContainer.classList.remove('active');
        }
    });
});
