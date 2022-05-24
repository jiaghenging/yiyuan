const appLfp=new Vue({
	el:'#appLfp',
	data() {
		return{
			bannerSwiper:'',
			cjSwiper:'',
			swiperIndex:0,
			btcjImg:[
				{
					img:'../../../static/image/project/dcgl/lfp/btcj/p1.png',
					img_m:'../../../static/image/project/dcgl/lfp/m/p1.jpg'
				},
				{
					img:'../../../static/image/project/dcgl/lfp/btcj/p2.png',
					img_m:'../../../static/image/project/dcgl/lfp/m/p2.jpg'
				},
				{
					img:'../../../static/image/project/dcgl/lfp/btcj/p3.jpg',
					img_m:'../../../static/image/project/dcgl/lfp/m/p3.jpg'
				}
			],
			btcjIndex:0,
			actDcbIndex:0,
			actIndex:0,
			dcbList:[
				{
					name:'壁挂式电池包',
					img:'../../../static/image/project/dcgl/lfp/dcb/bgs.png',
					guige: [
						{
							xinghao: 'LFP12200M',
							scdy: '12.8VDC',
							rongliang: '200Ah  2.56KWH',
							chicun:'420*260*185mm'
						},
						{
							xinghao: 'LFP12400H',
							scdy: '12.8VDC',
							rongliang: '400Ah  5.12KWH',
							chicun:'516*550*187mm'
						},
						{
							xinghao: 'LFP24100M',
							scdy: '25.5VDC',
							rongliang: '100Ah  2.56KWH',
							chicun:'420*260*185mm'
						},
						{
							xinghao: 'LFP24200H',
							scdy: '25.6VDC',
							rongliang: '200Ah  5.12KWH',
							chicun:'516*550*187mm'
						},
						{
							xinghao: 'LFP24400H',
							scdy: '25.6VDC',
							rongliang: '400Ah  10.24KWH',
							chicun:'850*550*187mm'
						},
						{
							xinghao: 'LFP48100H',
							scdy: '51.2VDC',
							rongliang: '100Ah  5.12KWH',
							chicun:'516*550*187mm'
						},
						{
							xinghao: 'LFP48200H',
							scdy: '51.2VDC',
							rongliang: '200Ah  10.24KWH',
							chicun:'850*550*187mm'
						}
					]
				},
				{
					name:'车载式电池包',
					img:'../../../static/image/project/dcgl/lfp/dcb/czs.png',
					guige: [
						{
							xinghao: 'LFP12400RV',
							scdy: '12.8VDC',
							rongliang: '400Ah  5.12KWH',
							chicun:'450*320*240mm'
						},
						{
							xinghao: 'LFP24200RV',
							scdy: '25.6VDC',
							rongliang: '200Ah  5.12KWH',
							chicun:'450*320*240mm'
						},
						{
							xinghao: 'LFP48100RV',
							scdy: '51.2VDC',
							rongliang: '100Ah  5.12KWH',
							chicun:'450*320*240mm'
						}
					]
				},
				{
					name:'模块式电池包',
					img:'../../../static/image/project/dcgl/lfp/dcb/mks.png',
					guige: [
						{
							xinghao: 'LFP48100R',
							scdy: '51.2VDC',
							rongliang: '100Ah  5.12KWH',
							chicun:'482*245*865mm'
						},
						{
							xinghao: 'LFP48200R',
							scdy: '51.2VDC',
							rongliang: '200Ah  10.24KWH',
							chicun:'482*245*865mm'
						}
					]
				}
			],
			trsMsg: {
				
			}
		}
	},
	methods:{
		changeCjIndex(cjIndex,swIndex){
			const that=this;
			that.btcjIndex=cjIndex;
			that.cjSwiper.slideTo(swIndex,1000,false);
		},
		addIndex(){
			const that=this;
			if(that.actIndex<(that.dcbList.length-1)){
				that.actIndex+=1;
			}
		},
		reduceIndex(){
			const that=this;
			if(that.actIndex>0){
				that.actIndex-=1;
			}
		},
		changeSwiperIndex(cjIndex,swIndex){
			const that=this;
			that.swiperIndex=cjIndex;
			that.bannerSwiper.slideTo(swIndex,1000,false);
		},
		initSwiper() {
			const that=this;
			that.bannerSwiper = new Swiper('.bannerSwiper', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function(index, className) {
						return '<span class="' + className + '">' + '</span>';
					}
				},
				speed: 1000,
				autoplay: {
					delay: 4000,
					stopOnLastSlide: false
				},
				on:{
					slideChangeTransitionStart:function(){
						console.log(this.activeIndex);
						that.swiperIndex=this.realIndex;
					}
				}
			});
			that.cjSwiper = new Swiper(".cjSwiper", {
				speed: 1000,
				// autoplay: {
				// 	delay: 4000,
				// 	stopOnLastSlide: false
				// },
				loop:true,
				on:{
					slideChangeTransitionStart:function(){
						console.log(this.activeIndex);
						that.btcjIndex=this.realIndex;
					}
				}
			});
		},
	},
	mounted() {
		const that=this;
		that.$nextTick(()=>{
			that.initSwiper();
		})
	}
})