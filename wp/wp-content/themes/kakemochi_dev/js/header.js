window.addEventListener('scroll',function(){
	if($(window).scrollTop() > 0){
		$('#header').css({
			'position':'fixed',
			'top':0,
			'left':0,
			'width':'100%',
			//'background':'#fff',
			'zIndex':100,
		});
		var header_h = $('#header').height();
		$('#wrapper').css({
			'paddingTop':header_h
		});
		$('#new_nav_pc .new_nav_in .new_nav_box > li').css({
			//'padding':'10px 0'
		});
		$('#new_nav_pc .on').addClass('nav_on');
		$('.side_left.fixed').css({
			'top':header_h
		});
		
	}else{
		$('#header').css({
			'position':'relative',
			'top':'auto',
			'left':'auto',
		});
		var header_h = $('#header').height();
		$('#wrapper').css({
			'paddingTop':0
		});
		$('#new_nav_pc .new_nav_in .new_nav_box > li').css({
			'padding':'30px 0'
		});
		$('#new_nav_pc .on').removeClass('nav_on');
	}
});

$(window).scroll(function () {
  if($(window).scrollTop() > 20) {
    $('#header').addClass('h_fixed');
  } else {
    $('#header').removeClass('h_fixed');
  }
});

/* 20251022 */
document.addEventListener('DOMContentLoaded', function () {
  const popup   = document.getElementById('nav-kadai');
  const overlay = popup.querySelector('.renew_nav_overlay');
  const tabBox  = popup.querySelector('.renew_nav_tab_box');
  const trigger = popup.querySelector('a.gnav_top_l');

  // --- 開く ---
  const openPopup = () => {
    popup.classList.add('open');
  };

  // --- 閉じる ---
  const closePopup = () => {
    popup.classList.remove('open');
  };

  // ホバー or クリックで開く
  popup.addEventListener('mouseenter', openPopup);
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup();
  });

  // 外クリックで閉じる
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) closePopup();
  });

  // オーバーレイ・リンククリックでも閉じる
  overlay.addEventListener('click', closePopup);
  tabBox.addEventListener('click', (e) => {
    if (e.target.closest('a')) closePopup();
  });
});





document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;

  // URLパスと対象リンクの対応表
  const navMap = {
    "/overseas-expansion-support/": ".new_nav_2nd_1 a",
    "/visa-services/": ".new_nav_2nd_2 a",
    "/founding-services/inspection-tour/": ".new_nav_2nd_3 a",
    "/founding-services/": ".new_nav_2nd_5 a",
    "/seminar/overseas-expansion-to-indonesia/": ".new_nav_2nd_6 a",
    "/company/": ".new_nav_2nd_7 a"
  };

  // 一致するパスを探してクラス付与
  for (const [urlPath, selector] of Object.entries(navMap)) {
    if (path === urlPath) {
      const targetLink = document.querySelector(selector);
      if (targetLink) targetLink.classList.add("nav_on");
      break;
    }
  }
});
