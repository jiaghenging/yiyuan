const appProject = new Vue({
	el: '#appProjectCenter',
	data() {
		return {
			scrollData: '',
			actTabIndex:0,
			projectData:[
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro1.png'
				},
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro2.png'
				},
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro2.png'
				},
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro1.png'
				},
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro1.png'
				},
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro1.png'
				},
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro2.png'
				},
				{
					title:'便携排插式稳压器',
					subtitle:'过载/过欠压/过温保护，放心使用',
					img:'../static/image/projectcenter/pro1.png'
				}
			],
			
		}
	},
	methods: {
		changeTab(currentIndex){
			const that=this;
			that.actTabIndex=currentIndex;
			document.getElementById("typeMsgBox").scrollIntoView();
		},
		scrollTop() {
			const that = this;
			that.scrollData = document.documentElement.scrollTop || document.body.scrollTop; //减100是为了让元素更靠近可视范围
		},
		
	},
	mounted() {
		const that = this;
		window.addEventListener("scroll", that.scrollTop);
	}
})
