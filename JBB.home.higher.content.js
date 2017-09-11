//list區塊for職缺內容
JBB.home.higher.content.personaBox = (function () {
	function getRenderBox(){
		renderRightBoxHigher();
	}
	function renderRightBoxHigher(){
		var rightBox = $("#right_box_higher");
		var rightContentBox = '';
		rightContentBox 
			+= '<div class="right_box">'
					+'<a title="經理人專屬獵才服務" href="https://hunter.104.com.tw/TC/services/service_c_introduction.jsp?trc=104e&utm_source=JB_E_r&utm_medium=banner&utm_campaign=E_POC" target="_blank">'
						+'<img src="' + _STATIC_PATH + '/104main/jobbank/higher/banner_260X717.jpg">'
					+'</a>'
			+'</div>'
			+'<div class="right_box">'
				+'<a title="台灣人在大陸經理人服務站" href="https://www.104china.com/" target="_blank">'
					+'<img src="' + _STATIC_PATH + '/104main/jobbank/higher/banner_260X350.jpg">'
				+'</a>'
			+'</div>'
			+'<iframe name="f3026e194d7323" width="260px" height="325px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" src="https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FXBwzv5Yrm_1.js%3Fversion%3D42%23cb%3Df108cface602098%26domain%3Dhunter.104.com.tw%26origin%3Dhttps%253A%252F%252Fhunter.104.com.tw%252Ffb9431ff72377c%26relation%3Dparent.parent&amp;container_width=260&amp;height=325&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2F104manager%2F&amp;locale=zh_TW&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;tabs=timeline&amp;width=260" style="border: none; visibility: visible; width: 260px; height: 325px;" class="">'
			+'</iframe>';
		rightBox.html(rightContentBox);
	}

	// function renderTabBottomHigherBox(){
	// 	var tabBottom = $("#tab_bottom_higher_ad");
	// 	var tabContentBottom = '';
	// 	tabContentBottom
	// 	+= ''
	// }

	return {
		getRenderBox:getRenderBox
	}
}());
//list區塊for職缺內容
JBB.home.higher.content.listitem = (function () {

	function renderTab(tabData, type){
		var jobCount = tabData.manageJobCount;
		var tabUl = $("#js-higher-tab");
		var tabLi = '';
		for (var key in jobCount) {
			if (jobCount.hasOwnProperty(key)) {
            tabLi += '<li data-value="'+ key +'">' + jobCount[key].text + '<span class="js-txt">(' + jobCount[key].count + ')</span></li>';
        }
		}
		tabUl.append(tabLi);
	}

	function renderList(listData){
		var jobList = listData.manageJobList;
		var jobListLength = jobList.length;
		var tabContentBox = $("#js-higher-content");
		var tabContent = '';
		
		if(jobListLength !== 0){
			for (var i=0; i < jobListLength; i++){
				tabContent += '<article class="b-block--top-bord higher-list-item b-clearfix js-job-item"><h2 class="b-tit"><a href="' + jobList[i].link.job + '" target="_blank">'+ jobList[i].jobName +'</a></h2><ul class="b-list-inline b-clearfix"><li><a href="' + jobList[i].link.cust + '" target="_blank">' + jobList[i].custName + '</a></li><li>' + jobList[i].coIndustryDesc + '</li><li>' + jobList[i].jobAddrNoDesc + '</li></ul><p class="higher-list-item__info b-clearfix js-item-info">' + jobList[i].description.replace(/&lt;br&gt;/g, ' ') + '</p><div class="higher-list-tag"><span class="higher-list-tag__date">' + jobList[i].appearDateDesc + ' 更新</span></div></article>';
			}
		}else{
			tabContent += '<article class="b-block--top-bord higher-list-item-nodata b-clearfix js-job-item"><div class="b-center b-txt--center"><h2 class="b-tit">呃拍謝，結果好像很少</h2><h3>此條件無符合工作職缺</h3></div></article></article>'
		}

		tabContentBox.html(tabContent);

	}

	function renderBtnLink(btnData, type){
		var jobCount = btnData.manageJobCount;
		var moreBtnBox = $("#js-higher-btn");

		var typeThis = 'recommend';
		if(type !== undefined){
			typeThis = type
		}
		
		var url = jobCount[typeThis].url;
		var txt = jobCount[typeThis].text;
		var moreBtn = '<a href="/jobs/search' + url + '" target="_blank">看更多'+ txt + '</a>';
		moreBtnBox.html(moreBtn);
	}
	
	return {
		renderTab:renderTab,
		renderList:renderList,
		renderBtnLink:renderBtnLink
	}
}());