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
        businessNumber: '사업자번호: 359-02-03179',
        email: 'EMAIL: intellioneofficial@naver.com',
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
            },
            about: {
                storyHeading: '우리의 이야기',
                storyContent: '2024년에 설립된 IntelliOne Studio는 세상을 더욱 즐겁게 만드는 하이퍼캐주얼 게임 개발에 전념하고 있습니다. 혁신에 대한 강한 열정을 바탕으로, 우리는 글로벌 시장 동향과 AI 코딩 기술을 결합하여 매력적인 경험을 제공합니다.',
                timeline2023: '2024 - 설립',
                timeline2023Content: 'IntelliOne Studio는 "세상을 더욱 즐겁게"라는 비전을 가지고 설립되었습니다. 대표작으로는 기억력 기반 퍼즐 게임 "외워라! 창고" 와 머지 게임 "농부의 꿈" 이 있으며, 두 게임 모두 iOS 및 Android 플랫폼에서 무료로 출시되었습니다.',
                timeline2024: '2025 - 글로벌 성장',
                timeline2024Content: '"새로운 하이퍼캐주얼게임"을 출시하며 글로벌 유저들에게 사랑받는 스튜디오로 성장할 계획입니다.'
            },
            career: {
                careerTitle: '우리의 팀',
                careerSubtitle: '우리는 창의성과 탁월함을 추구하며, 모바일 산업의 새로운 기준을 세우고 함께 성장하는 데 전념하고 있습니다.',
                gamingTitle: '게임 개발',
                appsTitle: '앱 제작',
                growthTitle: '성장',
                hiringTitle: '우리의 채용 여정',
                hiringSubtitle: '투명하고 간소화된 절차를 통해 30일 이내에 완료를 목표로 하며, 팀에 원활히 합류할 수 있도록 설계되었습니다.',
                step1Title: '당신의 적합성 발견',
                step1Content: '채용팀과의 대화를 통해 잠재적인 역할, 기술, 그리고 당신만의 강점을 탐색하세요.',
                step2Title: '전문성 발휘하기',
                step2Content: '케이스 스터디와 기술 평가를 통해 능력을 보여주세요. 실질적이고 유용한 피드백을 제공합니다.',
                step3Title: '협력적 대화',
                step3Content: '케이스 스터디를 바탕으로 팀과 의미 있는 대화를 나누며 목표와 열정을 탐구하세요.',
                step4Title: '문화적 및 전문적 조화',
                step4Content: '최종 리더십 인터뷰를 통해 우리의 가치와 당신의 전문성이 조화를 이루는지 확인합니다.',
                offer: '최종 제안'
                
            },
            gaming: {
                heroTitle: '게임 팀을 만나보세요',
                heroSubtitle: '우리 게임 팀은 하이브리드 캐주얼, 캐주얼, 미드코어 게임 제작에 전문성을 갖추고 있습니다. 글로벌 스튜디오와 협력하여 성공적인 게임을 설계하고 출시하며, 기존 게임의 플레이어 참여도를 높이는 데 중점을 둡니다.',
                whyJoinTitle: '이 팀의 특별함은 무엇인가요?',
                reason1: '열정적인 전문가들과 협력하여 세계적으로 주목받는 뛰어난 게임 경험을 제작하세요.',
                reason2: '전 세계 플레이어들에게 깊은 인상을 남기는 영향력 있는 게임을 개발할 기회를 잡으세요.',
            },
            apps: {
                heroTitle: '앱 팀을 탐험하세요',
                heroSubtitle: '우리의 앱 팀은 기술이 일상을 향상시키는 방식을 재정의하며, 수백만 명의 사용자를 위한 혁신적이고 의미 있는 애플리케이션을 제작하고 있습니다.',
                whyJoinTitle: '왜 앱 팀에 합류해야 할까요?',
                reason1: 'IntelliOne Studio는 게임을 넘어 삶을 풍요롭게 하는 것을 목표로 합니다. 우리의 앱은 실제 문제를 해결하고, 즐거움을 주며, 전 세계적으로 연결을 강화하기 위해 설계되었습니다.',
                reason2: '현재 팀은 세 가지 주요 앱(BeReal, Wizz, Wemoms)을 개발 중이며, 각각 독창적이고 가치 있는 경험을 제공합니다.'
            },
            growth: {
                heroTitle: '성장 팀을 탐험해보세요',
                heroSubtitle: '우리의 성장 팀은 혁신적인 전략과 데이터 기반 솔루션을 통해 IntelliOne Studio 제품을 확장하는 데 헌신하고 있습니다.',
                whyJoinTitle: '왜 이 팀에 합류해야 할까요?',
                reason1: '사용자 확보, 광고 전략, 시장 혁신을 전문으로 하는 역동적인 팀과 함께 성공을 이끌어보세요.',
                reason2: '창의적 사고를 가진 사람들과 협력하여 빠르게 변화하는 디지털 생태계에서 적응하고 성장하는 캠페인을 설계하세요.'
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
        businessNumber: 'Business No.: 359-02-03179',
        email: 'EMAIL: intellioneofficial@naver.com',
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
            },
            about: {
                storyHeading: 'Our Story',
                storyContent: 'Founded in 2024, IntelliOne Studio is dedicated to creating hyper-casual games that make the world more enjoyable. With a strong passion for innovation, we combine global market trends and AI coding technologies to deliver engaging experiences.',
                timeline2023: '2024 - Founding',
                timeline2023Content: 'IntelliOne Studio was founded with the vision of "Making the World More Enjoyable." Notable works include the memory-based puzzle game "Memory Warehouse" and the merge game "Farmers Dream," both of which were released for free on iOS and Android platforms.',
                timeline2024: '2025 - Global Growth',
                timeline2024Content: 'Planning to launch "new hyper-casual games," growing as a beloved studio among global users.'
            },
            career: {
                careerTitle: 'Our Team',
                careerSubtitle: 'We are dedicated to fostering creativity and excellence, setting new standards in the mobile industry while growing together.',
                gamingTitle: 'Gaming',
                appsTitle: 'Apps',
                growthTitle: 'Growth',
                hiringTitle: 'Our Hiring Journey',
                hiringSubtitle: 'Experience a streamlined, transparent process designed to complete within 30 days, ensuring a seamless transition into our team.',
                step1Title: 'Discovering Your Fit',
                step1Content: 'Connect with our recruitment team to explore your potential role, skills, and unique strengths.',
                step2Title: 'Showcasing Your Expertise',
                step2Content: 'Participate in case studies and skill evaluations that highlight your abilities. Receive constructive and actionable feedback.',
                step3Title: 'Collaborative Conversations',
                step3Content: 'Engage with our team in meaningful discussions about your case study, exploring your aspirations and goals.',
                step4Title: 'Cultural and Professional Alignment',
                step4Content: 'Conclude with a leadership interview focused on your alignment with our values and professional expertise.',
                offer: 'Your Offer'
                            
            },
            gaming: {
                heroTitle: 'Meet Our Gaming Team',
                heroSubtitle: 'Our Gaming team brings expertise in creating hybrid-casual, casual, and mid-core games. We collaborate with global studios to design and launch successful games, while also focusing on enhancing player engagement for our existing titles.',
                whyJoinTitle: 'What Makes This Team Unique?',
                reason1: 'Work alongside dedicated professionals to craft exceptional gaming experiences that stand out globally.',
                reason2: 'Unlock the potential to create impactful games that resonate with players across the globe.',                
            },
            // 페이지별 번역
            
            apps: {
                heroTitle: 'Explore the Apps Team',
                heroSubtitle: 'Our apps team is redefining how technology enhances daily life, creating innovative and meaningful applications for millions of users.',
                whyJoinTitle: 'Why Join the Apps Team?',
                reason1: 'At IntelliOne Studio, we aim to enrich lives beyond gaming. Our apps are designed to solve real-world problems, entertain, and foster connections worldwide.',
                reason2: 'The team is currently developing three flagship apps: BeReal, Wizz, and Wemoms, each offering unique and valuable experiences that resonate with a global audience.'
            },

            growth: {
                heroTitle: 'Explore the Growth Team',
                heroSubtitle: 'Our Growth team is dedicated to scaling IntelliOne Studio\'s products by leveraging innovative strategies and data-driven solutions.',
                whyJoinTitle: 'Why Be a Part of This Team?',
                reason1: 'Join a dynamic team specializing in user acquisition, ad strategies, and market innovation to drive success across the board.',
                reason2: 'Collaborate with creative thinkers to shape campaigns that adapt and thrive in a rapidly evolving digital ecosystem.'
            }
        }
    }
};

// 헤더 HTML
const headerHTML = `
<nav class="navbar">
    <a href="index.html" class="logo">IntelliOneStudio</a>
    <div class="nav-links">
        <a href="about.html">회사</a>
        <a href="games.html">게임</a>
        <a href="career.html">경력</a>
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
    if (currentPath.endsWith('about.html')) {
        document.querySelector('.our-story h2').textContent = translations[lang].pages.about.storyHeading;
        document.querySelector('.our-story p').textContent = translations[lang].pages.about.storyContent;
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems[0].querySelector('h3').textContent = translations[lang].pages.about.timeline2023;
        timelineItems[0].querySelector('p').textContent = translations[lang].pages.about.timeline2023Content;
        timelineItems[1].querySelector('h3').textContent = translations[lang].pages.about.timeline2024;
        timelineItems[1].querySelector('p').textContent = translations[lang].pages.about.timeline2024Content;
    }

    // 5. Career 페이지 번역
    if (currentPath.endsWith('career.html')) {
        document.querySelector('.career-hero h1').textContent = translations[lang].pages.career.careerTitle;
        document.querySelector('.career-hero p').textContent = translations[lang].pages.career.careerSubtitle;
        const teamCards = document.querySelectorAll('.team-card h2');
        teamCards[0].textContent = translations[lang].pages.career.gamingTitle;
        teamCards[1].textContent = translations[lang].pages.career.appsTitle;
        teamCards[2].textContent = translations[lang].pages.career.growthTitle;
        document.querySelector('.hiring-process h2').textContent = translations[lang].pages.career.hiringTitle;
        document.querySelector('.hiring-process p').textContent = translations[lang].pages.career.hiringSubtitle;
        const hiringSteps = document.querySelectorAll('.hiring-steps .step');
        hiringSteps[0].querySelector('h3').textContent = translations[lang].pages.career.step1Title;
        hiringSteps[0].querySelector('p').textContent = translations[lang].pages.career.step1Content;
        hiringSteps[1].querySelector('h3').textContent = translations[lang].pages.career.step2Title;
        hiringSteps[1].querySelector('p').textContent = translations[lang].pages.career.step2Content;
        hiringSteps[2].querySelector('h3').textContent = translations[lang].pages.career.step3Title;
        hiringSteps[2].querySelector('p').textContent = translations[lang].pages.career.step3Content;
        hiringSteps[3].querySelector('h3').textContent = translations[lang].pages.career.step4Title;
        hiringSteps[3].querySelector('p').textContent = translations[lang].pages.career.step4Content;
        hiringSteps[3].querySelector('.step-offer').textContent = translations[lang].pages.career.offer;
    }
    
    if (currentPath.endsWith('gaming.html')) {
        document.querySelector('.gaming-hero h1').textContent = translations[lang].pages.gaming.heroTitle;
        document.querySelector('.gaming-hero p').textContent = translations[lang].pages.gaming.heroSubtitle;
        document.querySelector('.why-join h2').textContent = translations[lang].pages.gaming.whyJoinTitle;

        const reasons = document.querySelectorAll('.join-reasons .reason p');
        reasons[0].textContent = translations[lang].pages.gaming.reason1;
        reasons[1].textContent = translations[lang].pages.gaming.reason2;
    }

    if (currentPath.endsWith('apps.html')) {
        document.querySelector('.gaming-hero h1').textContent = translations[lang].pages.apps.heroTitle;
        document.querySelector('.gaming-hero p').textContent = translations[lang].pages.apps.heroSubtitle;
        document.querySelector('.why-join h2').textContent = translations[lang].pages.apps.whyJoinTitle;
    
        const reasons = document.querySelectorAll('.join-reasons .reason p');
        reasons[0].textContent = translations[lang].pages.apps.reason1;
        reasons[1].textContent = translations[lang].pages.apps.reason2;
    }
    
    if (currentPath.endsWith('growth.html')) {
        document.querySelector('.gaming-hero h1').textContent = translations[lang].pages.growth.heroTitle;
        document.querySelector('.gaming-hero p').textContent = translations[lang].pages.growth.heroSubtitle;
        document.querySelector('.why-join h2').textContent = translations[lang].pages.growth.whyJoinTitle;
    
        const reasons = document.querySelectorAll('.join-reasons .reason p');
        reasons[0].textContent = translations[lang].pages.growth.reason1;
        reasons[1].textContent = translations[lang].pages.growth.reason2;
    }
    


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
