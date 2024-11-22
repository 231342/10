document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle"); // 메뉴 토글 버튼
  const sidebar = document.getElementById("sidebar"); // 사이드바 요소

  // 메뉴 토글 클릭 시 사이드바 열기/닫기
  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

});
