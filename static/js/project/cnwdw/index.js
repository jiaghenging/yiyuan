const appProject = new Vue({
	el: '#appProjectCenter',
	data() {
		return {
			scrollData: '',
			actTabIndex:0,
			projectData:[
				{
					title:'储能一体机-ESS',
					subtitle:'集成电池包、逆变器、MPPT。适用于家庭/商业储能',
					img:'../../../static/image/project/cnwdw/index/project/01-ess.png',
					link:'../cnwdw/ess.html'
				},
				{
					title:'组串式储能一体机 ESS-60-150',
					subtitle:'集成储能变流器、光伏逆变器，可满足多元需求，为综合能源服务提供助力',
					img:'../../../static/image/project/cnwdw/index/project/02-ESS-60-150.png',
					link:'../cnwdw/zcscn.html'
				},
				{
					title:'车载储能系统',
					subtitle:'房车用电解决方案',
					img:'../../../static/image/project/cnwdw/index/project/03-czcn.png',
					link:'../cnwdw/czcn.html'
				},
				{
					title:'家庭储能系统',
					subtitle:'享受清洁稳定的能源',
					img:'../../../static/image/project/cnwdw/index/project/04-jtcn.jpg',
					link:'../cnwdw/jtcn.html'
				},
				
				{
					title:'光储充一体系统',
					subtitle:'解决充电站配电容量不足难题，达到削峰填谷，降低充电成本的作用',
					img:'../../../static/image/project/cnwdw/index/project/06-gccyt.png',
					link:'../cnwdw/gccyt.html'
				},
				{
					title:'工商业储能系统',
					subtitle:'帮助大型工商业高耗能单位实现能源智慧化管理',
					img:'../../../static/image/project/cnwdw/index/project/07-gsycn.png',
					link:'../cnwdw/gsycn.html'
				},
				{
					title:'电网侧与发电侧储能系统',
					subtitle:'有效参与电网调控运行，加强再生能源的可利用率，保障电力系统的正常运行',
					img:'../../../static/image/project/cnwdw/index/project/08-dwcyfdc.png',
					link:'../cnwdw/dwcyfdc.html'
				},
			],
			
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
