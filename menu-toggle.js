// // menu-toggle.js: 메뉴 토글 공통 스크립트

// function setupMenuToggle() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     // 메뉴 토글 버튼 클릭 이벤트
//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('active');

//         // 아이콘 변경
//         menuToggle.innerHTML = navLinks.classList.contains('active') ? '×' : '☰';
//     });

//     // 메뉴 외부 클릭 시 닫기
//     document.addEventListener('click', function(event) {
//         if (!event.target.closest('.nav-links') && !event.target.closest('.menu-toggle')) {
//             navLinks.classList.remove('active');
//             menuToggle.innerHTML = '☰';
//         }
//     });

//     // 화면 크기 변경 시 이벤트
//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 768) {
//             navLinks.classList.remove('active');
//             menuToggle.style.display = 'none'; // 햄버거 아이콘 숨김
//         } else {
//             menuToggle.style.display = 'flex'; // 햄버거 아이콘 보이기
//         }
//     });

//     // 초기 로드 시 화면 크기에 따라 햄버거 아이콘 설정
//     window.addEventListener('DOMContentLoaded', function() {
//         menuToggle.style.display = window.innerWidth > 768 ? 'none' : 'flex';
//     });

//     // 메뉴 항목 클릭 시 메뉴 닫기
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active');
//             menuToggle.innerHTML = '☰';
//         });
//     });
// }
