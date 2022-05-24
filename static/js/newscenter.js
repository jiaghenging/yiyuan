const appNewscenter = new Vue({
	el: '#appNewsCenter',
	data() {
		return {
			btnState: 1, //1是收起状态2是展开状态
			newsIndex: 0,
			isPc:false,
			screenWidth:0,
			pageTotal:100,
			gsxw: [{
					title: '新闻标题介绍新闻标题介绍新闻标题介绍',
					date: '2021-10-26',
					img: '../static/image/daohang/01.jpg'
				},
				{
					title: '新闻标题介绍新闻标题介绍新闻标题介绍',
					date: '2021-10-26',
					img: '../static/image/daohang/01.jpg'
				},
				{
					title: '新闻标题介绍新闻标题介绍新闻标题介绍',
					date: '2021-10-26',
					img: '../static/image/daohang/01.jpg'
				},
				{
					title: '新闻标题介绍新闻标题介绍新闻标题介绍',
					date: '2021-10-26',
					img: '../static/image/daohang/01.jpg'
				},
				{
					title: '新闻标题介绍新闻标题介绍新闻标题介绍',
					date: '2021-10-26',
					img: '../static/image/daohang/01.jpg'
				}
			],
			currentPage: 1
		}
	},
	methods: {
		toNewsDetail(){
			window.location.href="./newsdetail.html";
		},
		checkType(){
			const that=this;
			let type= decodeURIComponent((new RegExp('[?|&]' + 'type' + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
			if(type==1){
				that.newsIndex=0;
			}else if(type==2){
				that.newsIndex=1;
			}else if(type==3){
				that.newsIndex=2;
			}else{
				that.newsIndex=0;
			}
		},
		changeTab(currentIndex) {
			const that = this;
			that.newsIndex = currentIndex;
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	},
	mounted() {
		const that = this;
		that.$nextTick(()=>{
			let sw=window.screenWidth = document.body.clientWidth;
			if(sw>950){
				that.isPc=true;
			}
			else{
				that.isPc=false;
			}
			console.log(that.isPc);
			window.addEventListener("resize", function() {
				return (() => {
					window.screenWidth = document.body.clientWidth;
					that.screenWidth = window.screenWidth;
					if(that.screenWidth>950){
						that.isPc=true;
					}
					else{
						that.isPc=false;
					}
				})();
			});
			that.checkType();
			setTimeout(()=>{
				let elDom=document.getElementsByClassName("el-pagination__jump")[0];
				elDom.childNodes[0].nodeValue = "调至";
			},500)
			
		})
	}
})
