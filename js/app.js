$(function() {
	//组件事例:等级组件，显示不同等级的图标和颜色（类似QQ等级，有太阳、月亮、星星...）
	Vue.component('level', {
		template: '<div class="level level{{ levelTheme }}"> <i class="icons icon_level_{{ levelTheme }}"></i> <span class="num">{{ ulevel }}</span> </div>',
		props: ['levelTheme', 'ulevel'],
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
			tabBtns: [{ //选项卡按钮
				onClass: ' on',
				text: '周榜',
				listName: 'weekly'
			}, {
				onClass: '',
				text: '总榜',
				listName: 'all'
			}],
			ranksWeekShow: true,
			ranksWeek: '', //排行榜数据,初始值为空,ajax读取数据后再更新,View层也会更新(双向绑定)
			ranksAll: ''
		},
		ready: function() { //实例开始时执行的函数
			this.getListData('weekly');
			this.getListData('all');
		},
		methods: { //vue实例自定义的方法,备调用

			toggleList: function(event) { //切换榜单类型
				var el = event.currentTarget;
				var index = $(el).index();

				//切换tab
				$(el).addClass('on').siblings().removeClass('on');
				this.lineLeft = (index) * 46 + 8;

				///切换rank列表
				this.ranksWeekShow = !this.ranksWeekShow;
			},
			getListData: function(type) { //获取ajax数据,type参数为榜单类型,可能值: 'weekly','all'

				var ts = this; //保存this对象,防止this引用错误
				var url = 'http://www.itsme.media/mobile/proxy/mgr/RankFans.php?area=th&cycle=' + type;
				$.getJSON(url, function(res) {
					if (type == 'weekly') { //如果是周榜,则更新this.ranksweek
						ts.ranksWeek = res.ranks;
					} else {
						ts.ranksAll = res.ranks;
					}
				})
			}
		}
	});


})
