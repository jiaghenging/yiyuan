const appAvc = new Vue({
	el: '#appAvc',
	data() {
		return {
			actJjindex: 2,
			actGnIndex: 0,
			gnTab: [{
					title: '01.电网电压正常',
					subTitle: '电网电压与额定电压接近',
					img: '../../../static/image/project/dnzl/avc/hd1.png'
				},
				{
					title: '02.电网电压骤降',
					subTitle: '电网电压产生波动',
					img: '../../../static/image/project/dnzl/avc/hd2.png'
				},
				{
					title: '03.电网电压暂升',
					subTitle: '电网电压产生波动',
					img: '../../../static/image/project/dnzl/avc/hd3.png'
				},
				{
					title: '04.电网电压恢复',
					subTitle: '旁路供电',
					img: '../../../static/image/project/dnzl/avc/hd4.png'
				}
			],
			groupId: 0,
			topVal: 0,
			hdType: 1, //1是pc2是移动
			screenWidth:0
		}
	},
	methods: {
		changeTab(currentIndex) {
			const that = this;
			that.actGnIndex = currentIndex;
			// that.topVal+=76;
			// let huakuai=that.$refs.huakuai;
			// huakuai.style.top=that.topVal+'px';
			that.hdType = 1;
		},
		changeTabM(currentIndex) {
			const that = this;
			that.actGnIndex = currentIndex;
			that.hdType = 2;
		}
	},
	watch: {
		actGnIndex(newval, oldval) {
			const that = this;
			if (that.hdType == 1) {
				if (newval > oldval) { //增加
					let step = newval - oldval;
					that.topVal += 76 * step;
					let huakuai = that.$refs.huakuai;
					huakuai.style.top = that.topVal + 'px';
				} else if (newval < oldval) { //减少
					let step = oldval - newval;
					that.topVal -= 76 * step;
					let huakuai = that.$refs.huakuai;
					huakuai.style.top = that.topVal + 'px';
				}
			}
		},
	},
	mounted() {
		const that=this;
		window.addEventListener("resize", function() {
			return (() => {
				window.screenWidth = document.body.clientWidth;
				that.screenWidth = window.screenWidth;
				if(that.screenWidth>950){
					that.actGnIndex=0;
				}
			})();
		})
	}
})
