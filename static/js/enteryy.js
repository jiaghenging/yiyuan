const appIndex = new Vue({
	el: '#appEnteryy',
	data() {
		return {
			wheight: '', //屏幕可视区域高度
			scrollData: '',
			yearMsg:[
				{
					year:'2008',
					title:'1月浙江一元电气有限公司成立'
				},{
					year:'2011',
					title:'7月深圳研发中心成立'
				},{
					year:'2013',
					title:'6月深圳一元股份有限公司成立'
				},{
					year:'2015',
					title:'深圳一元成立第二个生产基地'
				},{
					year:'2016',
					title:'一元电气获得33项专利'
				},{
					year:'2018',
					title:'3月南京研发中心成立，取得高新技术企业，9月丽水一元科技有限公司成立'
				},
			],
			actSlideIndex:0,
			historySwiper:''
		}
	},
	methods: {
		checkType(){
			let type= decodeURIComponent((new RegExp('[?|&]' + 'type' + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
			if(type==0){//公司介绍
				document.getElementsByClassName("aboutBox")[0].scrollIntoView();
			}
			else if(type==1){//专利资质
				document.getElementsByClassName("patentBox")[0].scrollIntoView();
			}
			else if(type==2){//一元优势
				document.getElementsByClassName("advantageBox")[0].scrollIntoView();
			}
			else if(type==3){//企业文化
				document.getElementsByClassName("qywhBox")[0].scrollIntoView();
			}
			else if(type==4){//发展历程
				document.getElementsByClassName("historyBox")[0].scrollIntoView();
			}
			else if(type==5){//全球布局
				document.getElementsByClassName("globalBox")[0].scrollIntoView();
			}
			else if(type==6){//资质荣誉
				document.getElementsByClassName("qualificationsBox")[0].scrollIntoView();
			}
		},
		setEaseIn() {
			const that = this;
			// that.wheight = (window.innerHeight || document.documentElement.clientHeight || document.body
			// 	.clientHeight);
			// let bigPy = 200;
			// let smallPy = 50;
			// let test1 = document.getElementById("test1");
			// console.log(test1);
			// if ((test1.offsetTop + bigPy >= that.scrollData) && test1.offsetTop + bigPy < (that
			// 		.scrollData + that.wheight)) {
			// 			console.log("s")
			// 	test1.style.transform = "translate(0,0px)";
			// 	test1.style.opacity = "1";
			// }
			var line1 = that.$refs.line1;
			var clients = window.innerHeight || document.documentElement.clientHeight || document.body
				.clientHeight;
			var divTop = line1.getBoundingClientRect().top;
			let py = 0;
			let smallPy = 50;
			if (divTop <= clients-py) {
				line1.style.transform = "translate(0,0px)";
				line1.style.opacity = "1";
			}
		},
		scrollTop() {
			const that = this;
			that.scrollData = document.documentElement.scrollTop || document.body.scrollTop; //减100是为了让元素更靠近可视范围
			// that.setEaseIn();
		},
		initSwiper() {
			const that = this;
			that.historySwiper = new Swiper('#hisSwiper', {
				slidesPerView: 3,
				initialSlide :-1,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				// autoplay: {
				// 	delay: 4000,
				// 	stopOnLastSlide: false,
				// 	disableOnInteraction: false,
				// },
				loop: true,
			});
			var qualSwiper = new Swiper('#qualSwiper', {
				slidesPerView: 'auto',
				initialSlide: 2,
				navigation: {
					nextEl: '#qualificationsNext',
					prevEl: '#qualificationsPrev',
				},
				spaceBetween: 54,
				centeredSlides: true,
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: false,
				},
				loop: false
			});
		},
	},
	mounted() {
		const that = this;
		window.addEventListener("scroll", that.scrollTop);
		that.$nextTick(() => {
			setTimeout(()=>{
				that.checkType();
			},100);
			that.initSwiper();
			setTimeout(() => {
				let clen = document.getElementsByClassName('circle3').length;
				for (let i = 0; i < clen; i++) {
					document.getElementsByClassName('circle3')[i].style.display = "block"
				}
			}, 1000)
		})
	}
})
