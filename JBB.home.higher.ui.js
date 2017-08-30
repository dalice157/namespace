//persona切換
JBB.home.higher.ui.tabPersona = (function(){
	//判斷高階顯示或隱藏的部份
	function getHigher(){ 
		showHigher();
		hideHigher();
		initHigher();
	}

	//判斷其他顯示或隱藏的部份
	function getOther(){ 
		showOther();
		hideOther();
	}

	//當點擊至高階 tab 時需出現的區塊
	function showHigher(){ 
		var tabList = $('#tab_list_higher').show();
		var rightBoxManager = $('#right_box_higher').show();
		var tabBottomMangerAd = $('#tab_bottom_higher_ad').show();
	}

	//當點擊至高階 tab 時需隱藏的區塊
	function hideHigher(){ 
		var tabAd = $('#tab_ad').hide();
		var rightBoxAd = $('#right_box_ad').hide();
		var tabBottomAd = $('#tab_bottom_ad').hide();
	}

	//當點擊至其他 tab 時需出現的區塊
	function showOther(){ 
		var tabAd = $('#tab_ad').show();
		var rightBoxAd = $('#right_box_ad').show();
		var tabBottomAd = $('#tab_bottom_ad').show();
	}

	//當點擊至其 tab 時需隱藏的區塊
	function hideOther(){ 
		var tabList = $('#tab_list_higher').hide();
		var rightBoxManager = $('#right_box_higher').hide();
		var tabBottomMangerAd = $('#tab_bottom_higher_ad').hide();
	}

	//高階 tab 點擊避免多次 append 職缺的防呆
	function initHigher(){
		var higherList = JBB.home.higher.model.higherList;

		var higherTabLength = $("#js-higher-tab").find("li").length;
		if(higherTabLength === 0){
			higherList.getHigherList(onLoadHigherList);
		}
	}

	//產生tab職缺
	function onLoadHigherList(data){
		var listItem = JBB.home.higher.content.listitem;
		var tabHigher = JBB.home.higher.ui.tabHigherCategory;

		listItem.renderTab(data);
		listItem.renderList(data);
		listItem.renderBtnLink(data);
		tabHigher.init(data);
	}

	return {
		getHigher: getHigher,
		getOther: getOther
	}
}());

//高階tab職缺
JBB.home.higher.ui.tabHigherCategory = (function(){
	//頁籤的製作
	function init(data){
		var higherList = JBB.home.higher.model.higherList;
		var listItem = JBB.home.higher.content.listitem;
		// 預設第一個 Tab加入.b-nav-tabs__active	
		var startTab = 0;
		var defaultLi = $('#js-higher-tab').find("li");

		defaultLi
		.eq(startTab)
		.addClass('b-nav-tabs__active');

		defaultLi.on('click', function(e){
			//避免重覆call同一支 ajax的防呆
			if ($(this).hasClass('b-nav-tabs__active')) {
      	return false;
			}

			var that = $(this);
			var jobName = that.data("value");
			var items = $("article");
			var moreJobButton = $("a");
			
			that
			.addClass('b-nav-tabs__active')
			.siblings('.b-nav-tabs__active')
			.removeClass('b-nav-tabs__active');

			listItem.renderBtnLink(data, jobName);
			higherList.getHigherList(listItem.renderList, jobName);

		});
	}

	return {
		init: init
	}
}());