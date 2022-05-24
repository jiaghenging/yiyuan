const appLfp=new Vue({
	el:'#appLfp',
	data() {
		return{
			swiperIndex: 1,
			bannerSwiper:'',
			bannerImg:[
				{
					img:'../../../static/image/project/cnwdw/hp/swiper/01-hp.png'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/swiper/02-hpmini.png'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/swiper/03-apc.png'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/swiper/04-app.png'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/swiper/05-apv.png'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/swiper/06-psw7.png'
				}
			],
			btcjImg:[
				{
					img:'../../../static/image/project/cnwdw/hp/btcj/p1.jpg',
					img_m:'../../../static/image/project/cnwdw/hp/m/p1.jpg'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/btcj/p2.jpg',
					img_m:'../../../static/image/project/cnwdw/hp/m/p2.jpg'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/btcj/p3.jpg',
					img_m:'../../../static/image/project/cnwdw/hp/m/p3.jpg'
				},
				{
					img:'../../../static/image/project/cnwdw/hp/btcj/p4.jpg',
					img_m:'../../../static/image/project/cnwdw/hp/m/p4.jpg'
				}
			],
			btcjIndex:0,
			cjSwiper:'',
			xlSwiper:'',
			xlSwiperIndex:1,
			xlMsgIndex:0,
			xlMsg:[
				{
					name:'HP系列',
					img:'../../../static/image/project/cnwdw/hp/xilie/hp.png',
					isBig:false,
					canshu:[
						{
							name:'额定功率：',
							val:'1~18KW'
						},
						{
							name:'额定输出电压：',
							val:'100-110-120VAC/220-230-240VAC'
						},
						{
							name:'额定输出频率：',
							val:'50Hz/60Hz'
						},
						{
							name:'波形失真率THD：',
							val:'<3%'
						},
						{
							name:'转换时间：',
							val:'≤10ms'
						},
						{
							name:'内置太阳能控制器：',
							val:'可选配'
						}
					]
				},
				{
					name:'HP mini系列',
					img:'../../../static/image/project/cnwdw/hp/xilie/hp-mini.png',
					isBig:false,
					canshu:[
						{
							name:'额定功率：',
							val:'600W/1000W/1500W'
						},
						{
							name:'额定输出电压：',
							val:'120VAC/230VAC'
						},
						{
							name:'额定输出频率：',
							val:'50Hz/60Hz'
						},
						{
							name:'波形失真率THD：',
							val:'<3%'
						},
						{
							name:'转换时间：',
							val:'≤10ms'
						}
					]
				},
				{
					name:'APP系列',
					img:'../../../static/image/project/cnwdw/hp/xilie/app.png',
					isBig:false,
					canshu:[
						{
							name:'额定功率：',
							val:'1000W/1500W/2000W/3000W/4000W/5000W/6000W'
						},
						{
							name:'额定输出电压：',
							val:'100-110-120VAC/220-230-240VAC'
						},
						{
							name:'额定输出频率：',
							val:'50Hz/60Hz'
						},
						{
							name:'波形失真率THD：',
							val:'<10%'
						},
						{
							name:'转换时间：',
							val:'≤10ms'
						}
					]
				},
				{
					name:'APV系列',
					img:'../../../static/image/project/cnwdw/hp/xilie/apv.png',
					isBig:true,
					canshu:[
						{
							name:'额定功率：',
							val:'1000W/1500W/2000W/3000W/4000W/5000W/6000W'
						},
						{
							name:'额定输出电压：',
							val:'120VAC/230VAC'
						},
						{
							name:'额定输出频率：',
							val:'50Hz/60Hz'
						},
						{
							name:'波形失真率THD：',
							val:'<10%'
						},
						{
							name:'转换时间：',
							val:'≤10ms'
						},
						{
							name:'内置太阳能控制器：',
							val:'可选配'
						}
					]
				},
				{
					name:'PSW7系列',
					img:'../../../static/image/project/cnwdw/hp/xilie/psw7.png',
					isBig:false,
					canshu:[
						{
							name:'额定功率：',
							val:'1000W/1500W/2000W/3000W/4000W/5000W/6000W'
						},
						{
							name:'额定输出电压：',
							val:'100-110-120VAC/220-230-240VAC'
						},
						{
							name:'额定输出频率：',
							val:'50Hz/60Hz'
						},
						{
							name:'波形失真率THD：',
							val:'<10%'
						},
						{
							name:'转换时间：',
							val:'≤10ms'
						}
					]
				}
			]
		}
	},
	methods:{
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
		changeCjIndex(cjIndex,swIndex){
			const that=this;
			that.btcjIndex=cjIndex;
			that.cjSwiper.slideTo(swIndex,1000,false);
		},
		minsSwiperIndex(){
			const that=this;
			if(that.swiperIndex==1){
				that.swiperIndex=that.bannerImg.length;
				console.log(that.swiperIndex);
				that.bannerSwiper.slideTo(that.swiperIndex,1000,false);
			}
			else{
				that.swiperIndex-=1;
				console.log(that.swiperIndex);
				that.bannerSwiper.slideTo(that.swiperIndex,1000,false);
			}
			
		},
		addSwiperIndex(){
			const that=this;
			if(that.swiperIndex==that.bannerImg.length){
				that.swiperIndex=1;
				console.log(that.swiperIndex);
				that.bannerSwiper.slideTo(that.swiperIndex,1000,false);
			}
			else{
				that.swiperIndex+=1;
				console.log(that.swiperIndex);
				that.bannerSwiper.slideTo(that.swiperIndex,1000,false);
			}
			
		},
		initSwiper() {
			const that=this;
			that.bannerSwiper = new Swiper('.bannerSwiper', {
				loop: true,
				// pagination: {
				// 	el: '.swiper-pagination',
				// 	clickable: true,
				// },
				speed: 1000,
				autoplay: {
					delay: 4000,
					stopOnLastSlide: false
				},
				on:{
					slideChangeTransitionStart:function(){
						// that.swiperIndex=this.realIndex;
					}
				}
			});
			that.cjSwiper = new Swiper(".cjSwiper", {
				speed: 1000,
				autoplay: {
					delay: 4000,
					stopOnLastSlide: false
				},
				loop:true,
				on:{
					slideChangeTransitionStart:function(){
						console.log(this.activeIndex);
						that.btcjIndex=this.realIndex;
					}
				}
			});
			that.xlSwiper = new Swiper(".xlSwiper", {
				speed: 1000,
				loop:true,
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