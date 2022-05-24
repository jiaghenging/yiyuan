const appJoin=new Vue({
	el: '#appJoin',
	data(){
		return{
			btnState:1,//1是收起状态2是展开状态
		}
	},
	methods:{
		// showMsg2(which){
		// 	let dom='';
		// 	if(which==0){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[0];
		// 	}
		// 	else if(which==1){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[1];
		// 	}
		// 	else if(which==2){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[2];
		// 	}
		// 	else if(which==3){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[3];
		// 	}
		// 	dom.style.height='100px';
		// 	dom.style.opacity='1';
		// 	dom.children[0].style.display="block";
		// 	dom.children[0].style.top="9px";
		// },
		// hideMsg2(which){
		// 	let dom='';
		// 	if(which==0){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[0];
		// 	}
		// 	else if(which==1){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[1];
		// 	}
		// 	else if(which==2){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[2];
		// 	}
		// 	else if(which==3){
		// 		dom=document.getElementsByClassName("conditionImg_msg2")[3];
		// 	}
		// 	dom.style.height='0px';
		// 	dom.style.opacity='0';
		// 	dom.children[0].style.top="80px";
		// 	setTimeout(()=>{
		// 		dom.children[0].style.display="none";
		// 	},400)
		// }
	},
	mounted() {
		const that=this;
	}
})