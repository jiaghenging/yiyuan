// const { axios } = require("../../plugins/axios/axios.min.js");

const appIndex = new Vue({
	el: '#appIndex',
	data() {
		return {
			ifShowVideo: false,
			actIndex: 0,
			tabsList: [{
					name: "公司新闻",
					id: 0
				},
				{
					name: "展会动态",
					id: 1
				},
				{
					name: "技术交流",
					id: 2
				}
			],
			scrollData: '',
			wheight: '', //屏幕可视区域高度
			newsImgArr:[
				{
					img:'../static/image/index/news1.jpg'
				},
				{
					img:'../static/image/index/project1.jpg'
				},
				{
					img:'../static/image/index/project2.jpg'
				},
				{
					img:'../static/image/index/project3.jpg'
				},
				{
					img:'../static/image/index/about-r.jpg'
				}
			],
			actNewsImgIndex:0
		}
	},
	methods: {
		changeNewsImg(currentIndex){
			const that=this;
			let dom=document.getElementsByClassName("newsImgBox")[0];
			dom.style.opacity=0;
			setTimeout(()=>{
				dom.style.opacity=1;
			},300)
			that.actNewsImgIndex=currentIndex;
			
		},
		toProject(who){
			if(who==1){
				window.location.href="product/dnzl/index.html";
			}
			else if(who==2){
				window.location.href="product/cnwdw/index.html";
			}
			else{
				window.location.href="product/dcgl/index.html";
			}
		},
		toNewsDetail(){
			window.location.href="./newsdetail.html";
		},
		toNews(type=1){
			window.location.href="./newscenter.html?type="+type;
		},
		setEaseIn(){
			const that=this;
			var p1 = that.$refs.p1;
			var p2 = that.$refs.p2;
			var p3 = that.$refs.p3;
			var clients = window.innerHeight || document.documentElement.clientHeight || document.body
				.clientHeight;
			var div1 = p1.getBoundingClientRect().top;
			var div2 = p2.getBoundingClientRect().top;
			var div3 = p3.getBoundingClientRect().top;
			let py = 100;
			let smallPy = 50;
			if (div1 <= clients-py) {
				p1.style.top = "37%";
				p1.style.opacity = "1";
				p2.style.top = "37%";
				p2.style.opacity = "1";
				p3.style.top = "37%";
				p3.style.opacity = "1";
			}
		},
		changeTab(currentId, currentIndex) {
			const that = this;
			that.actIndex = currentIndex;
			let ele = document.getElementById("pyBox");
			let left = that.$refs.tabarr[currentIndex].offsetLeft + 'px';
			let width = that.$refs.tabarr[currentIndex].clientWidth - 8 + "px";
			// ele.style.transform="translate("+left+")";
			ele.style.width = `${width}`;
			ele.style.transform = `translateX(${left})`;
			ele.style.transition = ".4s";
		},
		hideVideoBox() {
			const that = this;
			document.getElementsByClassName('videoBox')[0].style.opacity = '0'
			let videoEl=document.getElementById('videoBox');
			setTimeout(function() {
				that.ifShowVideo = false;
				videoEl.pause();
			}, 500)


		},
		showVideoBox() {
			const that = this;
			that.ifShowVideo = true;
			setTimeout(function() {
				document.getElementsByClassName('videoBox')[0].style.opacity = '1'
			}, 0)
		},
		initSwiper() {
			var swiper = new Swiper('.swiper-container', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function(index, className) {
						return '<span class="' + className + '">' + '</span>';
					}
				},
				speed: 0,
				autoplay: {
					delay: 5000,
					stopOnLastSlide: false
				},
				on: {
					slideChangeTransitionEnd: function() {
					    this.autoplay.start();
					},
					slideChangeTransitionStart: function() {
						let dom = document.getElementsByClassName('swiper-slide')[this.activeIndex]
							.children[1];
						// console.log(dom)
						// 实现效果
						for (let i = 0; i < dom.children.length; i++) {
							// console.log(dom.children[i]);
							dom.children[i].style.opacity = "1";
							dom.children[i].style.transform = "translate(0px,0px)";
						}
						// 恢复初始
						let lastSlide = document.getElementsByClassName('swiper-slide-prev')[0].children[1];
						// console.log(lastSlide);
						for (let i = 0; i < lastSlide.children.length; i++) {
							// console.log(dom.children[i]);
							lastSlide.children[i].style.opacity = "0";
							if(i==0 || i==1 || i==2){
								lastSlide.children[i].style.transform="translate(0px,80px)"
							}
							else{
								lastSlide.children[i].style.transform="translate(0px,100px)"
							}
						}
						// 恢复复制slide的初始
						
						if(document.getElementsByClassName("swiper-slide-duplicate-prev").length>0){
							let copySlide=document.getElementsByClassName("swiper-slide-duplicate-prev")[0].children[1];
							for (let i = 0; i < lastSlide.children.length; i++) {
								// console.log(dom.children[i]);
								copySlide.children[i].style.opacity = "0";
								if(i==0 || i==1 || i==2){
									copySlide.children[i].style.transform="translate(0px,80px)"
								}
								else{
									copySlide.children[i].style.transform="translate(0px,100px)"
								}
							}
						}
						// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					},
				},
			});
		},
		scrollTop() {
			const that = this;
			that.scrollData = document.documentElement.scrollTop || document.body.scrollTop; //减100是为了让元素更靠近可视范围
			
			that.setEaseIn();
		},
		testAxios(){
			const that=this;
			axios({
				url: 'http://jsonplaceholder.typicode.com/posts',
				method: 'GET',
			}).then((res) => {
				console.log(res);
			}).catch((err) => {
				console.log(err)
			})
		}
	},
	mounted() {
		const that = this;
		window.addEventListener("scroll", that.scrollTop);
		// that.testAxios();
		
		//初始化swiper
		that.$nextTick(() => {
			that.initSwiper();
			var p1 = that.$refs.p1;
			var p2 = that.$refs.p2;
			var p3 = that.$refs.p3;
			p1.style="transition-delay:0.1s";
			p2.style="transition-delay:0.3s";
			p3.style="transition-delay:0.5s";
		})
	}
})
