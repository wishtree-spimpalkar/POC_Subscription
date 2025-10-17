document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    // Get the plan from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan') || 'advanced';

    // Define menu items based on plan
    const menuItems = {
        basic: [
            { icon: '📊', text: 'Dashboard', link: './coming-soon.html?module=dashboard&plan=basic' },
            { icon: '📝', text: 'Practice Now', link: './coming-soon.html?module=practice&plan=basic' },
            { icon: '📈', text: 'Performance', link: './coming-soon.html?module=performance&plan=basic' },
            { icon: '📚', text: 'Previous Tests', link: './coming-soon.html?module=tests&plan=basic' }
        ],
        advanced: [
            { icon: '📊', text: 'Dashboard', link: './coming-soon.html?module=dashboard&plan=advanced' },
            { icon: '📝', text: 'Practice Now', link: './coming-soon.html?module=practice&plan=advanced' },
            { icon: '📈', text: 'Performance', link: './coming-soon.html?module=performance&plan=advanced' },
            { icon: '📚', text: 'Previous Tests', link: './coming-soon.html?module=tests&plan=advanced' },
            { icon: '✍️', text: 'Self-Assessment', link: './coming-soon.html?module=assessment&plan=advanced' },
            { icon: '👨‍⚕️', text: 'Doctor Consultation', link: './doctor-consultation.html?plan=advanced' }
        ]
    };

    // Generate menu based on plan
    const sidebarMenu = document.getElementById('sidebar-menu');
    if (sidebarMenu) {
        const items = menuItems[plan] || menuItems.advanced;
        
        sidebarMenu.innerHTML = items.map(item => `
            <li${window.location.pathname.includes(item.text.toLowerCase().replace(' ', '-')) ? ' class="active"' : ''}>
                <a href="${item.link}">
                    <i class="icon">${item.icon}</i>
                    <span class="menu-text">${item.text}</span>
                </a>
            </li>
        `).join('');
    }

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        
        // Adjust main content margin for desktop view
        if (window.innerWidth > 768) {
            mainContent.style.marginLeft = sidebar.classList.contains('collapsed') ? '80px' : '250px';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainContent.style.marginLeft = sidebar.classList.contains('collapsed') ? '80px' : '250px';
        } else {
            mainContent.style.marginLeft = '0';
        }
    });
});