const appNewsDetail=new Vue({
	el:'#appNewsDetail',
	data(){
		return{
			toback(){
				window.location.href ="./newscenter.html"
			}
		}
	},
	methods:{
		toNewsDetail(){
			window.location.href="./newsdetail.html";
		}
	}
})