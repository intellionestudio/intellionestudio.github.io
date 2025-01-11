// 전체 번역 데이터
const translations = {
    ko: {
        // 공통 네비게이션
        company: '회사',
        publishing: '게임',
        career: '경력',
        news: '소식',

        // 푸터
        companyName: '상호명: IntelliOneStudio',
        ceo: '대표자: (대표자명)',
        businessNumber: '사업자번호: (사업자번호)',
        email: 'EMAIL: (이메일)',
        privacyPolicy: '개인정보처리방침',
        copyright: 'Copyright © 2024 IntelliOneStudio All rights reserved.',

        // 페이지별 번역
        pages: {
            index: {
                heroTitle: '세상을 즐겁게 하다'
            },
            games: {
                heroTitle1: '인텔리원스튜디오가 개발한',
                heroTitle2: '다양한 게임을 만나보세요',
                gameTitle1: '외워라 창고',
                gameTitle2: '농부의 꿈'
            }
        }
    },
    en: {
        // 공통 네비게이션
        company: 'Company',
        publishing: 'Game',
        career: 'Career',
        news: 'News',

        // 푸터
        companyName: 'Company: IntelliOneStudio',
        businessNumber: 'Business No.: (Business Number)',
        email: 'EMAIL: (Email)',
        privacyPolicy: 'Privacy Policy',
        copyright: 'Copyright © 2024 IntelliOneStudio All rights reserved.',

        // 페이지별 번역
        pages: {
            index: {
                heroTitle: 'Make the World Fun'
            },
            games: {
                heroTitle1: 'Games Developed by IntelliOne Studio',
                heroTitle2: 'Discover Our Various Games',
                gameTitle1: 'Memory Warehouse',
                gameTitle2: 'Farmers Dream'
            }
        }
    }
};

// 헤더 HTML
const headerHTML = `
<nav class="navbar">
    <a href="index.html" class="logo">IntelliOneStudio</a>
    <div class="nav-links">
        <a href="#">회사</a>
        <a href="games.html">게임</a>
        <a href="#">경력</a>
        <a href="#">소식</a>
    </div>
    <div class="nav-right">
        <a href="https://www.instagram.com/intellionestudio" target="_blank" class="social-link">
            <img src="Instagram.png" alt="Instagram" style="width: 24px; height: 24px;">
        </a>
        <div class="language-selector">
            <button class="language-btn">
                <img src="World.png" alt="Language" style="width: 24px; height: 24px;">
            </button>
            <div class="language-dropdown">
                <a href="#" class="language-option" data-lang="ko">한국어</a>
                <a href="#" class="language-option" data-lang="en">English</a>
            </div>
        </div>
        <button class="menu-toggle" style="width: 24px; height: 24px;"><img src="List.png" alt="Menu" style="width: 18px; height: 18px;"></button>
    </div>
</nav>
`;

// 푸터 HTML
const footerHTML = `
<footer class="footer">
    <div class="footer-content">
        <div class="company-info">
            <p data-lang-key="companyName">상호명: IntelliOneStudio</p>
            <p data-lang-key="businessNumber">사업자번호: (사업자번호)</p>
            <p data-lang-key="email">EMAIL: (이메일)</p>
            <div class="legal-links">
                <a href="/privacy" data-lang-key="privacyPolicy">개인정보처리방침</a>
            </div>
            <p data-lang-key="copyright">Copyright © 2024 IntelliOneStudio All rights reserved.</p>
        </div>
        <div class="social-links" style="align-self: flex-start;">
            <a href="https://www.instagram.com/intellionestudio" target="_blank" class="social-link">
                <img src="Instagram.png" alt="Instagram" style="width: 24px; height: 24px;">
            </a>
        </div>
    </div>
</footer>
`;

// 언어 변경 함수
function changeLanguage(lang) {
    // 1. 언어 설정 저장 (리다이렉션 전에 저장)
    localStorage.setItem('selectedLanguage', lang);

    // 2. 네비게이션 번역
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = translations[lang].company;
    navLinks[1].textContent = translations[lang].publishing;
    navLinks[2].textContent = translations[lang].career;
    navLinks[3].textContent = translations[lang].news;

    // 3. 푸터 번역
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 4. 개인정보처리방침 페이지 확인 및 리다이렉트 처리
    const currentPath = window.location.pathname;
    const baseURL = window.location.origin;

    if (currentPath.endsWith('privacy_policy_K.html') && lang === 'en') {
        window.location.href = `${baseURL}/privacy_policy_E.html`;
        return;
    } else if (currentPath.endsWith('privacy_policy_E.html') && lang === 'ko') {
        window.location.href = `${baseURL}/privacy_policy_K.html`;
        return;
    }

    // 5. 개인정보처리방침 링크 업데이트
    const privacyLink = document.querySelector('.legal-links a[data-lang-key="privacyPolicy"]');
    if (privacyLink) {
        privacyLink.setAttribute(
            'href',
            lang === 'ko' ? `${baseURL}/privacy_policy_K.html` : `${baseURL}/privacy_policy_E.html`
        );
    }

    // 6. 페이지별 번역
    const currentPageKey = currentPath.split('/').pop().replace('.html', '') || 'index';
    if (translations[lang].pages[currentPageKey]) {
        const pageTranslations = translations[lang].pages[currentPageKey];
        if (currentPageKey === 'index') {
            const heroTitle = document.querySelector('.hero h1');
            if (heroTitle) {
                heroTitle.textContent = pageTranslations.heroTitle;
            }
        } else if (currentPageKey === 'games') {
            const heroTitles = document.querySelectorAll('.games-hero h1');
            if (heroTitles.length >= 2) {
                heroTitles[0].textContent = pageTranslations.heroTitle1;
                heroTitles[1].textContent = pageTranslations.heroTitle2;
            }
            const gameTitles = document.querySelectorAll('.game-title');
            if (gameTitles.length >= 2) {
                gameTitles[0].textContent = pageTranslations.gameTitle1;
                gameTitles[1].textContent = pageTranslations.gameTitle2;
            }
        }
    }
}


// 언어 선택 이벤트 초기화 함수
function initLanguageSwitcher() {
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// DOM 로드 시 실행
document.addEventListener('DOMContentLoaded', function () {
    // 1. 헤더 추가
    const headerContainer = document.createElement('header');
    headerContainer.innerHTML = headerHTML;
    document.body.insertAdjacentElement('afterbegin', headerContainer);

    // 2. 푸터 추가
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // 3. 언어 선택 초기화
    initLanguageSwitcher();

    // 4. 메뉴 토글 초기화
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        const menuIcon = menuToggle.querySelector('img');
menuIcon.src = navLinks.classList.contains('active') ? 'XIcon.png' : 'List.png';
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.menu-toggle')) {
            navLinks.classList.remove('active');
            const menuIcon = menuToggle.querySelector('img');
menuIcon.src = 'List.png';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuToggle.style.display = 'none';
        } else {
            menuToggle.style.display = 'flex';
        }
    });

    menuToggle.style.display = window.innerWidth > 768 ? 'none' : 'flex';

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '☰';
        });
    });

    // 5. 저장된 언어 설정 적용
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ko';
    changeLanguage(savedLanguage);
});
