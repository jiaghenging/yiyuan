const appProject = new Vue({
	el: '#appProjectCenter',
	data() {
		return {
			scrollData: '',
			actTabIndex:0,
			cpSwiper:'',
			actCp:0,
			projectData:[
				{
					title:'有源滤波器-AHF',
					subtitle:'谐波治理，THDi<5%',
					img:'../../../static/image/project/dnzl/index/project/01-ahf.png',
					link:'../dnzl/ahf.html'
				},
				{
					title:'静止无功发生器-SVG',
					subtitle:'无功功率补偿，PF0.99',
					img:'../../../static/image/project/dnzl/index/project/02-svg.png',
					link:'../dnzl/svg.html'
				},
				{
					title:'混合型动态无功补偿装置-CSVG',
					subtitle:'经济型无功补偿方案  SVG+LC',
					img:'../../../static/image/project/dnzl/index/project/03-csvg.png',
					link:'../dnzl/csvg.html'
				},
				{
					title:'自动电压调节器-AVC（IGBT稳压器）',
					subtitle:'电压暂降解决方案，实时线性稳压',
					img:'../../../static/image/project/dnzl/index/project/04-avc.png',
					link:'../dnzl/avc.html'
				},
				// {
				// 	title:'电力电容器-LC',
				// 	subtitle:'改善功率因素',
				// 	img:'../../../static/image/project/dnzl/index/project/04-avc.png',
				// 	link:'../dnzl/index.html'
				// },
				{
					title:'三相全自动补偿式电力稳压器-SBW',
					subtitle:'大功率稳压方案',
					img:'../../../static/image/project/dnzl/index/project/08-sbw.png',
					link:'../dnzl/sbw.html'
				},
				{
					title:'马达式稳压器-SVC/TNS',
					subtitle:'经过时间验证的稳压方案',
					img:'../../../static/image/project/dnzl/index/project/06-svc.png',
					link:'../dnzl/svc.html'
				},
				{
					title:'电子式稳压器-AVR',
					subtitle:'快速响应，稳定电压',
					img:'../../../static/image/project/dnzl/index/project/07-avr.png',
					link:'../dnzl/avr.html'
				},
				// {
				// 	title:'升降变压器-ST/NT',
				// 	subtitle:'升压/降压',
				// 	img:'../../../static/image/projectcenter/pro1.png',
				// 	link:'../dnzl/index.html'
				// }
			],
			youshiIndex:0,
			youshiImgArr:[
				{
					img:'../../../static/image/project/dnzl/index/AHF.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/SVG.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/CSVG.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/AVC.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/SVC.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/AVR.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/SBW.png'
				}
			],
			dutyIndex:0,
			dutyShowImg:'../../../static/image/project/dnzl/index/01-1.png',
			dutyImgArr:[
				{
					img:'../../../static/image/project/dnzl/index/01-1.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/01-2.png'
				},
				{
					img:'../../../static/image/project/dnzl/index/01-3.png'
				}
			]
		}
	},
	methods: {
		initSwiper(){
			const that=this;
			that.cpSwiper = new Swiper(".mySwiper", {
				slidesPerView: 1,
				noSwiping : true
			});
		},
		checkType(){
			const that=this;
			let type= decodeURIComponent((new RegExp('[?|&]' + 'type' + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
			if(type==1){
				that.actTabIndex=0;
			}else if(type==2){
				that.actTabIndex=1;
				setTimeout(()=>{
					that.initSwiper();
				},200)
			}else if(type==3){
				that.actTabIndex=2;
			}else{
				that.newsIndex=0;
			}
			
		},
		toProject(currentItem){
			if(currentItem.link){
				window.location.href=currentItem.link;
			}
		},
		addYsIndex(){
			const that=this;
			if(that.youshiIndex>that.youshiImgArr.length-2){
				that.youshiIndex=0;
			}
			else{
				that.youshiIndex+=1;
			}
			let dom=document.getElementById('youshiImg');
			dom.className = ""
			dom.style.opacity='0';
			setTimeout(()=>{
				dom.className="animate__animated animate__fadeInDown";
			},100);
		},
		minsYsIndex(){
			const that=this;
			console.log(that.youshiIndex);
			if(that.youshiIndex<=0){
				
				that.youshiIndex=that.youshiImgArr.length-1;
				console.log(that.youshiIndex);
			}
			else{
				
				that.youshiIndex-=1;
				console.log(that.youshiIndex);
			}
			let dom=document.getElementById('youshiImg');
			dom.className = ""
			dom.style.opacity='0';
			setTimeout(()=>{
				dom.className="animate__animated animate__fadeInDown";
			},100);
		},
		changeYsIndex(currentIndex){
			const that=this;
			that.actCp=currentIndex;
			that.cpSwiper.slideTo(currentIndex,1000,false);
		},
		changeTab(currentIndex){
			const that=this;
			that.actTabIndex=currentIndex;
			if(currentIndex==1){
				setTimeout(()=>{
					that.initSwiper();
				},300)
			}
		},
		scrollTop() {
			const that = this;
			that.scrollData = document.documentElement.scrollTop || document.body.scrollTop; //减100是为了让元素更靠近可视范围
		},
		
	},
	mounted() {
		const that = this;
		that.$nextTick(()=>{
			
			that.checkType();
			
			window.addEventListener("scroll", that.scrollTop);
		})
	}
})
