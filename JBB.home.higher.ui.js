/** @namespace JBB */
/**
 * persona切換
 * tabPersona is now JBB.home.higher.ui.tabPersona
 * @function tabPersona
 * @memberof JBB.home.higher.ui
 * @function getHigher - 判斷高階顯示或隱藏的部份
 * @function getOther - 判斷其他顯示或隱藏的部份
 * @function showHigher - 當點擊至高階 tab 時需出現的區塊
 * @function hideHigher - 當點擊至高階 tab 時需隱藏的區塊
 * @function showOther - 當點擊至其他 tab 時需出現的區塊
 * @function hideOther - 當點擊至其 tab 時需隱藏的區塊
 * @function initHigher - 點擊 persona 高階初始化
 * @function onLoadHigherList - 產生 tab 職缺
 * @returns {object} - 判斷是否 show or hide
 * @instance
 */
JBB.home.higher.ui.tabPersona = (function(){
	//判斷高階tab是否已點擊
	var isChecked = true;

	function getHigher(){ 
		showHigher();
		hideHigher();
		initHigher();
	}

	function getOther(){ 
		showOther();
		hideOther();
	}

	function showHigher(){ 
		var tabList = $('#tab_list_higher').show();
		var rightBoxManager = $('#right_box_higher').show();
		var tabBottomMangerAd = $('#tab_bottom_higher_ad').show();
	}

	function hideHigher(){ 
		var tabAd = $('#tab_ad').hide();
		var rightBoxAd = $('#right_box_ad').hide();
		var tabBottomAd = $('#tab_bottom_ad').hide();
	}

	function showOther(){ 
		var tabAd = $('#tab_ad').show();
		var rightBoxAd = $('#right_box_ad').show();
		var tabBottomAd = $('#tab_bottom_ad').show();
	}

	function hideOther(){ 
		var tabList = $('#tab_list_higher').hide();
		var rightBoxManager = $('#right_box_higher').hide();
		var tabBottomMangerAd = $('#tab_bottom_higher_ad').hide();
	}

	function initHigher(){
		var higherList = JBB.home.higher.model.higherList;
		var renderBox = JBB.home.higher.content.personaBox;
		//高階 tab 點擊避免多次 append 職缺的防呆
		if(isChecked){
			isChecked = false;
			higherList.getHigherList(onLoadHigherList);
			renderBox.renderHigherRightBox();
		}
	}

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
/**
 * 高階tab職缺
 * tabHigherCategory is now JBB.home.higher.ui.tabHigherCategory
 * @function tabHigherCategory
 * @memberof JBB.home.higher.ui
 * @function init - 頁籤的製作
 * @param {object} data - 撈 api 資料
 * @returns {object} - list 初始化
 * @instance
 */
JBB.home.higher.ui.tabHigherCategory = (function(){
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
/**
 * list 內文無資料時刪除 li
 * listContent is now JBB.home.higher.ui.listContent
 * @function listContent
 * @memberof JBB.home.higher.ui
 * @function getListLiDel - 公司名稱、產業、地區當無資料時 delete li
 * @returns {object} - delete li
 * @instance
 */
JBB.home.higher.ui.listContent = (function(){
	function getListLiDel(){
		var listLi = $(".js-job-item").find("li");
		listLi.each(function(i){
			var that = $(this);
			if(that.text() === ''){
				that.remove();
			}
		});
	}

	return {
		getListLiDel: getListLiDel
	}
}());