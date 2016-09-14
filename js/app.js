$(function() {
	//等级组件，显示不同等级的图标和颜色（类似QQ等级，有太阳、月亮、星星...）
	Vue.component('level', {
		template: '<div class="level level{{ levelTheme }}"> <i class="icons icon_level_{{ levelTheme }}"></i> <span class="num">{{ ulevel }}</span> </div>',
		props: ['levelTheme','ulevel'],
		ready: function() {
			var _level = parseInt(this.ulevel);
			this.levelTheme = getTheme(_level);
			function getTheme(level) {
				if (1 <= level && level <= 2) {
					return 1;
				} else if (3 <= level && level <= 4) {
					return 2;
				} else if (5 <= level && level <= 6) {
					return 3;
				} else if (7 <= level && level <= 8) {
					return 4;
				} else if (9 <= level && level && level <= 10) {
					return 5;
				} else if (10 <= level && level <= 11) {
					return 6;
				} else {
					return 6;
				}

			}
		}
	})

	//实例
	var toggle = window.toggle = new Vue({
		el: '#toggle',
		data: {
			lineLeft: '8%',
			tabBtns: [{
				onClass: ' on',
				text: '周榜',
				listName: 'weekly'
			}, {
				onClass: '',
				text: '总榜',
				listName: 'all'
			}],
			ranksWeekShow: true,
			ranksWeek: '',
			ranksAll: ''
		},
		ready: function() {
			this.getListData('weekly');
			this.getListData('all');
		},
		methods: {
			toggleList: function(event) {
				var el = event.currentTarget;
				var index = $(el).index();

				//切换tab
				$(el).addClass('on').siblings().removeClass('on'); 
				this.lineLeft = (index) * 46 + 8;

				///切换rank列表
				this.ranksWeekShow = !this.ranksWeekShow; 
			},
			getListData: function(type) {
				var ts = this;
				var url = 'http://www.itsme.media/mobile/proxy/mgr/RankFans.php?area=th&cycle=' + type;
				$.getJSON(url, function(res) {
					if (type == 'weekly') {
						ts.ranksWeek = res.ranks;
					} else {
						ts.ranksAll = res.ranks;
					}
				})
			}
		}
	});


})