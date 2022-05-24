const appProject = new Vue({
	el: '#appProjectCenter',
	data() {
		return {
			scrollData: '',
			actTabIndex:0,
			projectData:[
				// {
				// 	title:'电池管理系统-BMS',
				// 	subtitle:'SOC估算，充放电管理	，电池能量均衡控制',
				// 	img:'../../../static/image/project/dcgl/index/project/lfp.png',
				// 	link:'../dcgl/index.html'
				// },
				{
					title:'电池包-LFP',
					subtitle:'磷酸铁锂电池，高效储能',
					img:'../../../static/image/project/dcgl/index/project/02-lfp.png',
					link:'../dcgl/lfp.html'
				},
				// {
				// 	title:'充放一体逆变器-UP',
				// 	subtitle:'为工商业储能系统打造的模块化变流器，双向逆变。',
				// 	img:'../../../static/image/project/cnwdw/index/project/03-jtcn.png',
				// 	link:'../cnwdw/index.html'
				// },
				// {
				// 	title:'光储一体逆变器-UPP',
				// 	subtitle:'集成逆变器与MPPT的模块化变流器，双向逆变。',
				// 	img:'../../../static/image/project/cnwdw/index/project/03-jtcn.png',
				// 	link:'../cnwdw/index.html'
				// },
				{
					title:'工频正弦波逆变器-HP/PSW7',
					subtitle:'AC-DC/DC-AC  双向逆变',
					img:'../../../static/image/project/dcgl/index/project/05-hp_psw7.png',
					link:'../dcgl/hp.html'
				},
				{
					title:'三相工频正弦波逆变器-TPP',
					subtitle:'三相逆变输出/输入',
					img:'../../../static/image/project/dcgl/index/project/06-tpp.png',
					link:'../dcgl/tpp.html'
				},
				// {
				// 	title:'高频逆变器-OPS',
				// 	subtitle:'',
				// 	img:'../../../static/image/project/cnwdw/index/project/07-TPP.png',
				// 	link:'../dcgl/index.html'
				// },
				{
					title:'太阳能控制器-MPPT',
					subtitle:'管理太阳能输入',
					img:'../../../static/image/project/dcgl/index/project/08-mppt.png',
					link:'../dcgl/mppt.html'
				}
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
			]
		}
	},
	methods: {
		checkType(){
			const that=this;
			let type= decodeURIComponent((new RegExp('[?|&]' + 'type' + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
			if(type==1){
				that.actTabIndex=0;
			}else if(type==2){
				that.actTabIndex=1;
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
			
			let dom=document.getElementById('youshiImg');
			dom.className = ""
			dom.style.opacity='0';
			that.youshiIndex=currentIndex;
			setTimeout(()=>{
				dom.className="animate__animated animate__fadeInDown";
			},100);
			
		},
		changeTab(currentIndex){
			const that=this;
			that.actTabIndex=currentIndex;
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
