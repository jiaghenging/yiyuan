const appSbw = new Vue({
	el: '#appSbw',
	data() {
		return {
			actIndex:0,
			screenWidth:0,
			mySwiper:'',
			sbwList:[
				{
					name:'SBW-50KVA',
					img:'../../../static/image/project/dnzl/sbw/project/50k.png'
				},
				{
					name:'SBW-80KVA',
					img:'../../../static/image/project/dnzl/sbw/project/80k.png'
				},
				{
					name:'SBW-150KVA',
					img:'../../../static/image/project/dnzl/sbw/project/150k.png'
				},
				{
					name:'SBW-250KVA',
					img:'../../../static/image/project/dnzl/sbw/project/250k.png'
				},
				{
					name:'SBW-800KVA',
					img:'../../../static/image/project/dnzl/sbw/project/800k.png'
				},
				{
					name:'SBW-1000KVA',
					img:'../../../static/image/project/dnzl/sbw/project/1000k.png'
				},
				{
					name:'SBW-3000KVA',
					img:'../../../static/image/project/dnzl/sbw/project/3000k.png'
				}
			],
			waiguanIndex:0,
			waiguanList:[
				{
					name:'外观一（黑色单门壳体）',
					img:'../../../static/image/project/dnzl/sbw/waiguan/wg1.png',
					canshu:[
						{
							name:'稳压范围',
							val:'304V~456V'
						},
						{
							name:'输出电压',
							val:'380V±3%'
						},
						{
							name:'额定频率',
							val:'50Hz/60Hz'
						}
					],
					guige:[
						{
							guige:'50KVA-60KVA',
							chicun:'600*750*1330mm'
						},
						{
							guige:'80KVA-100KVA',
							chicun:'620*850*1440mm'
						},
						{
							guige:'150KVA-200KVA',
							chicun:'750*1000*1750mm'
						},
						{
							guige:'250KVA-300KVA',
							chicun:'900*1100*1790mm'
						}
					]
				},
				{
					name:'外观二（白色单门壳体）',
					img:'../../../static/image/project/dnzl/sbw/waiguan/wg2.png',
					canshu:[
						{
							name:'稳压范围',
							val:'304V~456V'
						},
						{
							name:'输出电压',
							val:'380V±3%'
						},
						{
							name:'额定频率',
							val:'50Hz/60Hz'
						}
					],
					guige:[
						{
							guige:'350KVA-400KVA',
							chicun:'1100*1000*1790mm'
						},
						{
							guige:'500KVA-600KVA',
							chicun:'1400*1100*2060mm'
						}
					]
				},
				{
					name:'外观三（白色双门壳体）',
					img:'../../../static/image/project/dnzl/sbw/waiguan/wg3.png',
					canshu:[
						{
							name:'稳压范围',
							val:'304V~456V'
						},
						{
							name:'输出电压',
							val:'380V±3%'
						},
						{
							name:'额定频率',
							val:'50Hz/60Hz'
						}
					],
					guige:[
						{
							guige:'800KVA-1200KVA',
							chicun:'(1680*1300*1800)*2mm'
						},
						{
							guige:'1500KVA',
							chicun:'(1680*1300*1800)*3mm'
						},
						{
							guige:'3000KVA',
							chicun:'(1680*1300*1800)*6mm'
						}
					]
				}
			]
		}
	},
	methods: {
		checkSize(){
			const that=this;
			let size=window.screenWidth = document.body.clientWidth;
			if(size<=800){
				that.mySwiper[0].autoplay.stop();
				that.mySwiper[1].autoplay.stop();
			}
			
		},
		addWgIndex(){
			const that=this;
			if(that.waiguanIndex<(that.waiguanList.length-1)){
				that.waiguanIndex+=1;
			}
		},
		reduceWgIndex(){
			const that=this;
			if(that.waiguanIndex>0){
				that.waiguanIndex-=1;
			}
		},
		addIndex(){
			const that=this;
			if(that.actIndex<(that.sbwList.length-1)){
				that.actIndex+=1;
			}
		},
		reduceIndex(){
			const that=this;
			if(that.actIndex>0){
				that.actIndex-=1;
			}
		},
		initSwiper() {
			const that = this;
			that.mySwiper = new Swiper(".swiper_bl_left", {
				speed: 6000, //匀速时间
				loop: true,
				noSwiping : true,
				autoplay: {
					delay: 0,
					stopOnLastSlide: false,
					disableOnInteraction: true,
					reverseDirection: true
				},
			});
		}
	},
	mounted() {
		const that = this;
		that.$nextTick(() => {
			that.initSwiper();
			that.checkSize();
			window.addEventListener("resize", function() {
				return (() => {
					window.screenWidth = document.body.clientWidth;
					that.screenWidth = window.screenWidth;
					if(that.screenWidth<1000){
						// console.log(that.mySwiper[0]);
						that.mySwiper[0].autoplay.stop();
						that.mySwiper[1].autoplay.stop();
					}
					else{
						that.mySwiper[0].autoplay.start();
						that.mySwiper[1].autoplay.start();
					}
				})();
			})
		})
	}
})
