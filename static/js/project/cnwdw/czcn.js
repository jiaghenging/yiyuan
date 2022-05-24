const appCzcn = new Vue({
	el: '#appCzcn',
	data() {
		return {
			mySwiper:'',
			clientWidth:0,
			ptcpMsg:[
				{
					title:'磷酸铁锂车载电池包',
					subTitle:'单电池包容量5.12KWH，可并联增加容量',
					img:'../../../static/image/project/cnwdw/czcn/project/pro1.png',
					long:1
				},
				{
					title:'逆变器',
					subTitle:'逆变功率3KW 逆变效率>88% THDi<3%',
					img:'../../../static/image/project/cnwdw/czcn/project/pro2.png',
					long:1
				},
				{
					title:'MPPT',
					subTitle:'太阳能控制器，规格：50A',
					img:'../../../static/image/project/cnwdw/czcn/project/pro3.png',
					long:0
				}
			]
		}
	},
	methods: {
		initSwiper() {
			const that=this;
			// that.mySwiper = new Swiper(".mySwiper", {
			// 	slidesPerView: 2,
			// 	spaceBetween: 30,
			// 	// loop:true,
			// 	autoplay: {
			// 		delay: 4000,
			// 		stopOnLastSlide: false
			// 	},
			// 	pagination: {
			// 		el: ".swiper-pagination",
			// 		clickable: true,
			// 	},
			// });
			setTimeout(()=>{
				if(that.clientWidth<1000){
					that.mySwiper = new Swiper(".mySwiper", {
						slidesPerView: 1,
						spaceBetween: 30,
						// loop:true,
						autoplay: {
							delay: 4000,
							stopOnLastSlide: false
						},
						pagination: {
							el: ".swiper-pagination",
							clickable: true,
						},
					});
				}
				else{
					that.mySwiper = new Swiper(".mySwiper", {
						slidesPerView: 2,
						spaceBetween: 30,
						// loop:true,
						autoplay: {
							delay: 4000,
							stopOnLastSlide: false
						},
						pagination: {
							el: ".swiper-pagination",
							clickable: true,
						},
					});
				};
			},400)
		}
	},
	mounted() {
		const that = this;
		that.$nextTick(() => {
			that.clientWidth = document.body.clientWidth;
			that.initSwiper();
			window.addEventListener("resize", function() {
				return (() => {
					window.screenWidth = document.body.clientWidth;
					that.screenWidth = window.screenWidth;
					if(that.screenWidth<1000){
						that.mySwiper.params.slidesPerView=1;
					}
					else{
						that.mySwiper.params.slidesPerView=2;
					}
				})();
			})
		})
	}
})
