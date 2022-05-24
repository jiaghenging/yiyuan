const appGsycn= new Vue({
	el:'#appGsycn',
	data(){
		return{
			
		}
	},
	methods:{
		toLink(who){
			if(who==1){
				window.location.href="../cnwdw/jtcn.html";
			}else if(who==2){
				window.location.href="../cnwdw/czcn.html";
			}else if(who==3){
				window.location.href="../cnwdw/gccyt.html";
			}else if(who==4){
				window.location.href="../cnwdw/dwcyfdc.html";
			}else{
				window.location.href="../cnwdw/dwcyfdc.html";
			}
			
		}
	}
})