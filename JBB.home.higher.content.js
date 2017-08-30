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
		var tabContentBox = $("#js-higher-content");
		var tabContent = '';
		jobList.map(function(obj){
			return tabContent += '<article class="b-block--top-bord higher-list-item b-clearfix js-job-item"><h2 class="b-tit"><a href="' + obj.link.job + '" target="_blank">'+ obj.jobName +'</a></h2><ul class="b-list-inline b-clearfix"><li><a href="' + obj.link.cust + '" target="_blank">' + obj.custName + '</a></li><li>' + obj.coIndustryDesc + '</li><li>' + obj.jobAddrNoDesc + '</li></ul><p class="higher-list-item__info b-clearfix">' + obj.description + '</p><div class="higher-list-tag"><span class="higher-list-tag__date">' + obj.appearDateDesc + ' 更新</span></div></article>';
		});

		tabContentBox.html(tabContent);
	}

	function renderBtnLink(btnData, type){
		var jobCount = btnData.manageJobCount;
		var moreBtnBox = $("#js-higher-btn");

		var typeThis = 'recommend';
		if(type !== undefined){
			typeThis = type
		}

		var moreBtn = '<a href="/jobs/search' + jobCount[typeThis].url.replace(/\"/g,'') + '" target="_blank">看更多職缺</a>';
		moreBtnBox.html(moreBtn);
	}
	
	return {
		renderTab:renderTab,
		renderList:renderList,
		renderBtnLink:renderBtnLink
	}
}());



