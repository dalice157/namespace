//職缺列表
JBB.home.higher.model.higherList = (function(){
	var listener = new JBB.home.higher.common.listener;

	//註冊事件
	listener.register('onSetHigherList');

	var getHigherList = function(callback, type){
		var url = '/jobs/search/manage';

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
		getHigherList: getHigherList,
		subscript: listener.subscript
	}

}());