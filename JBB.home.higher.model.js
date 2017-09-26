/** @namespace JBB */
/**
 * 職缺列表
 * higherList is now JBB.home.higher.model.higherList
 * @function higherList
 * @memberof JBB.home.higher.model
 * @function getHigherList - 撈 api 資料
 * @param {function} callback - 回呼 list 的畫面
 * @param {string} type - 職缺分類
 * @returns {object} - 將 api 資料送出
 * @instance
 */
JBB.home.higher.model.higherList = (function(){ 

	var getHigherList = function(callback, type){
		var url = '/jobs/search/manage';
		// var url = '/js/higher/json/manageJob.json'

		//當type是空值時會給預設值
		var typeThis = 'recommend';
		if(type !== undefined){
			typeThis = type
		}

		$.ajax({
				type: 'GET',
				dataType: 'json',
				data: {
					'type':typeThis
				},
				url: url,
				success: function (data) {
					callback(data);
				},
				beforeSend:function(){
						$('#js-action-overlay').show();
				},
				complete:function(){
						$('#js-action-overlay').hide();
				},
				error: function () {
						//alert('系統忙碌中，請稍後再試');
						console.log('> error');
				}
		});
	}
	return {
		getHigherList: getHigherList
	}

}());