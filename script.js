
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', () => {
        document.body.setAttribute('data-theme', 
            document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
        
        if (document.body.getAttribute('data-theme') === 'light') {
            icon.classList.replace('fa-moon', 'fa-sun');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });

    // Create dynamic clouds
    function createClouds() {
        const bodyWidth = document.body.offsetWidth;
        for (let i = 0; i < 5; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            const size = Math.random() * 200 + 100;
            cloud.style.width = `${size}px`;
            cloud.style.height = `${size/2}px`;
            cloud.style.top = `${Math.random() * 100}%`;
            cloud.style.left = `${Math.random() * bodyWidth}px`;
            cloud.style.animationDelay = `-${Math.random() * 10}s`;
            document.body.appendChild(cloud);
        }
    }

    createClouds();

    // Typewriter effect for console commands (optional enhancement)
    const commands = document.querySelectorAll('.command');
    commands.forEach((cmd, index) => {
        setTimeout(() => {
            cmd.style.opacity = '1';
        }, index * 300);
    });
});