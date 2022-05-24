
function initWow() {
			var wow_fadeInUp = new WOW({
				boxClass: 'see_fadeInUp',
				animateClass: 'animate__animated animate__fadeInUp',
				offset: 0,
				mobile: true,
				live: true
			});
			var wow_fadeInUpLine = new WOW({
				boxClass: 'see_fadeInUpLine',
				animateClass: 'animate__animated animate__fadeInUpLine',
				offset: 0,
				mobile: true,
				live: true
			});
			var wow_fadeInRight = new WOW({
				boxClass: 'see_fadeInRight',
				animateClass: 'animate__animated animate__fadeInRight',
				offset: 0,
				mobile: true,
				live: true
			});
			var wow_fadeInLeft = new WOW({
				boxClass: 'see_fadeInLeft',
				animateClass: 'animate__animated animate__fadeInLeft',
				offset: 0,
				mobile: true,
				live: true
			});
			var wow_fadeInRightLine = new WOW({
				boxClass: 'see_fadeInRightLine',
				animateClass: 'animate__animated animate__fadeInRightLine',
				offset: 0,
				mobile: true,
				live: true
			});
			wow_fadeInRightLine.init();
			wow_fadeInUpLine.init();
			wow_fadeInLeft.init();
			wow_fadeInRight.init();
			wow_fadeInUp.init();
		}
		
initWow();
const appFoot= new Vue({
	el:'#contactBox',
	data(){
		return{
			userName:'',
			userCompany:'',
			userPhone:'',
			userMail:'',
			userLy:'',
			telMsg:{
				rexian:'+86 577 2777 1777',
				chuanzhen:'+86 577 2777 2177'
			},
			addressMsg:[
				{
					name:'一元电气科技有限公司',
					add:'乐清市旭阳路6688号总部经济园3幢1301室'
				},
				{
					name:'深圳市一元科技股份有限公司',
					add:'深圳市宝安龙华区 大浪街道高峰社区云峰路光浩工业园A栋3、4楼'
				},
				{
					name:'丽水一元科技有限公司',
					add:'丽水市莲都区南明山街道祥龙路77号'
				}
			],
			
		}
	},
	methods:{
		subLy(){
			const that=this;
			let reg_tel = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
			let reg_mail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if(that.userName=='' || that.userCompany=='' || that.userPhone== '' || that.userMail=='' || that.userLy==''){
				alert("请注意带*项内容不能为空");
			}
			else if(!reg_tel.test(that.userPhone)){
				alert("手机号码格式不正确");
			}
			else if(!reg_mail.test(that.userMail)){
				alert("邮箱格式不正确");
			}
			else{
				window.location="mailto:yiy@yiygroup.com?subject=留言&subject=主题&body=姓名:"+that.userName+" 公司:"+that.userCompany+"  电话:"+that.userPhone+"  邮箱:"+that.userMail+"  留言:"+that.userLy;
			}
			
		}
	},
	mounted() {
	}
});