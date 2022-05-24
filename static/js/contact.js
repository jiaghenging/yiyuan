const appContact = new Vue({
	el: "#appContact",
	data() {
		return {
			actAddIndex: 0,
			addressCoordinate: { //公司坐标
				yydqkj: { //一元电气科技有限公司
					longitude: '121.008935',
					latitude: '28.100209',
				},
				szyydq: { //深圳市一元电气
					longitude: '113.999184',
					latitude: '22.656333'
				},
				lsyydq: { //丽水一元电气
					longitude: '119.87588',
					latitude: '28.370668'
				}
			},
			mapCoordinate: {
				longitude: '',
				latitude: ''
			},
			markerArr: [],
			userName:'',
			userCompany:'',
			userPhone:'',
			userMail:'',
			userLy:''
		}
	},
	methods: {
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
			
		},
		changeCoordinate(currentAdd) {
			const that = this;
			switch (currentAdd) {
				case '0':
					that.actAddIndex = 0;
					that.mapCoordinate = that.addressCoordinate.yydqkj;
					break;
				case '1':
					that.actAddIndex = 1;
					that.mapCoordinate = that.addressCoordinate.szyydq;
					break;
				case '2':
					that.actAddIndex = 2;
					that.mapCoordinate = that.addressCoordinate.lsyydq;
					break;
				default:
					that.actAddIndex = 0;
					that.mapCoordinate = that.addressCoordinate.yydqkj;
					break;
			};
			that.initGaode();
		},
		initGaode() {
			const that=this;
			var map = new AMap.Map('mapBox',{
				zoom: 20, //级别
				center: [that.mapCoordinate.longitude,that.mapCoordinate.latitude], //中心点坐标
				viewMode: '3D' //使用3D视图
			});
			var ico = new AMap.Icon({
			    size: new AMap.Size(26, 28),  // 图标尺寸
			    image: '../static/image/contact/dingwei.png',  // Icon的图像
			    imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
			    imageSize: new AMap.Size(26, 28)   // 根据所设置的大小拉伸或压缩图片，对应style的width和height
			});
			var marker = new AMap.Marker({
			    position:map.getCenter(),//标记的位置坐标
			    offset:new AMap.Pixel(-10,-10),//标记相对位置的偏移，对应style的left和top
			    icon:ico,//创建好的icon，也可以在后面使用setIcon()方法添加
			    zoom:20
			});
			// marker.setTitle("我们的位置");
			// marker.setLabel({
			//     offset: new AMap.Pixel(10,-20),
			//     content: "我们的位置"
			// });
			map.add(marker);
		},
	},
	mounted() {
		const that = this;
		console.log("ss");
		that.$nextTick(() => {
			that.changeCoordinate('0');//初始化地图
		})
	}
})
