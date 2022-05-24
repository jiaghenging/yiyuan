const appTpp = new Vue({
	el: '#appTpp',
	data() {
		return {
		mySwiper:'',
		xlSwiper:'',
		xlSwiperIndex:1,
		xlMsgIndex:0,
		xlMsg:[
			{
				name:'TPP卧式3-12KW',
				img:'../../../static/image/project/cnwdw/tpp/woshi.png',
				canshu:[
					{
						name:'输出功率：',
						val:'3KW/4.5KW/6KW/9KW/12KW'
					},
					{
						name:'直流输出电压：',
						val:'12.0V/24.0V/48.0V'
					},
					{
						name:'输出频率：',
						val:'50Hz/60Hz ±0.3Hz'
					},
					{
						name:'线制：',
						val:'三相四线'
					},
					{
						name:'相输出电压：',
						val:'120V/230V'
					},
					{
						name:'功率因数：',
						val:'0.9-1.0'
					},
					{
						name:'THD：',
						val:'<3%，线性负载'
					}
				]
			},
			{
				name:'TPP卧式15-18KW',
				img:'../../../static/image/project/cnwdw/tpp/woshi.png',
				canshu:[
					{
						name:'输出功率：',
						val:'15KW/18KW'
					},
					{
						name:'直流输出电压：',
						val:'24.0V/48.0V'
					},
					{
						name:'输出频率：',
						val:'50Hz/60Hz ±0.3Hz'
					},
					{
						name:'线制：',
						val:'三相四线'
					},
					{
						name:'相输出电压：',
						val:'120V/230V'
					},
					{
						name:'功率因数：',
						val:'0.9-1.0'
					},
					{
						name:'THD：',
						val:'<3%，线性负载'
					}
				]
			},
			{
				name:'TPP塔式24-45KW',
				img:'../../../static/image/project/cnwdw/tpp/tashi.png',
				canshu:[
					{
						name:'输出功率：',
						val:'24KW/30KW/36KW/45KW'
					},
					{
						name:'直流输出电压：',
						val:'48.0V'
					},
					{
						name:'输出频率：',
						val:'50Hz/60Hz ±0.3Hz'
					},
					{
						name:'线制：',
						val:'三相四线'
					},
					{
						name:'相输出电压：',
						val:'230V'
					},
					{
						name:'功率因数：',
						val:'0.9-1.0'
					},
					{
						name:'THD：',
						val:'<3%，线性负载'
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
		addXlIndex(){
			const that=this;
			if(that.xlMsgIndex<(that.xlMsg.length-1)){
				that.xlMsgIndex+=1;
			}
			if(that.xlSwiperIndex<that.xlMsg.length){
				that.xlSwiperIndex+=1;
			}
			that.xlSwiper.slideTo(that.xlSwiperIndex,1000,false);
		},
		reduceXlIndex(){
			const that=this;
			if(that.xlMsgIndex>0){
				that.xlMsgIndex-=1;
			}
			if(that.xlSwiperIndex>1){
				that.xlSwiperIndex-=1;
			}
			that.xlSwiper.slideTo(that.xlSwiperIndex,1000,false);
		},
		initSwiper() {
			const that = this;
			that.mySwiper = new Swiper(".swiper_bl_left", {
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 6000, //匀速时间
				loop: true,
				autoplay: {
					delay: 0,
					stopOnLastSlide: false,
					disableOnInteraction: true,
					reverseDirection: true
				},
			});
			
			that.xlSwiper = new Swiper(".xlSwiper", {
				speed: 1000,
				loop:true,
			});
		}
	},
	mounted() {
		const that = this;
		that.$nextTick(() => {
			that.initSwiper();
			that.checkSize();
		})
	}
})
