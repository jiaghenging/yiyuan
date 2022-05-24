const appJtcn = new Vue({
	el: '#appJtcn',
	data() {
		return {
			clientWidth:0,
			mySwiper:'',
			tableData: [{
			          date: '2016-05-02',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          date: '2016-05-04',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1517 弄'
			        }, {
			          date: '2016-05-01',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1519 弄'
			        }, {
			          date: '2016-05-03',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1516 弄'
			        }],
			ptcpMsg:[
				{
					title:'磷酸铁锂 (LiFePO4) 电池包 (LFP)',
					subTitle:'单电池包容量2.56KWH 5.12KWH 10.2KWH可通过并联增加容量',
					img:'../../../static/image/project/cnwdw/jtcn/project/pro1.png'
				},
				{
					title:'逆变器',
					subTitle:'逆变功率1.0KW~12KW 逆变效率>88% TJDi<3%',
					img:'../../../static/image/project/cnwdw/jtcn/project/pro2.png'
				},
				{
					title:'MPPT',
					subTitle:'太阳能控制器，规格：50A/60A',
					img:'../../../static/image/project/cnwdw/jtcn/project/pro3.png'
				}
			],
			actGgindex:0,
			dcbData:[
				{
					guige:'1.28KW',
					dcbrl:'2.56KWH',
					nbqgl:'2KW',
					mpptgg:'60A',
					tynbsl:'2pcs',
					tynzgl:'1.28KW'
				},
				{
					guige:'1.28KW',
					dcbrl:'2.56KWH',
					nbqgl:'1.5KW',
					mpptgg:'50A',
					tynbsl:'3pcs',
					tynzgl:'1.28KW'
				},
				{
					guige:'2.56KW',
					dcbrl:'5.12KWH',
					nbqgl:'3KW',
					mpptgg:'60A*2',
					tynbsl:'6pcs',
					tynzgl:'2.56KW'
				},
				{
					guige:'2.56KW',
					dcbrl:'5.12KWH',
					nbqgl:'4KW',
					mpptgg:'50A*2',
					tynbsl:'6pcs',
					tynzgl:'2.56KW'
				},
				{
					guige:'2.56KW',
					dcbrl:'5.12KWH',
					nbqgl:'3KW',
					mpptgg:'50A',
					tynbsl:'9pcs',
					tynzgl:'2.56KW'
				},
				{
					guige:'5.12KW',
					dcbrl:'5.12KWH',
					nbqgl:'6KW',
					mpptgg:'60A*2',
					tynbsl:'8pcs',
					tynzgl:'5.12KW'
				},
				{
					guige:'5.12KW',
					dcbrl:'5.12KWH',
					nbqgl:'6KW',
					mpptgg:'60A',
					tynbsl:'9pcs',
					tynzgl:'5.12KW'
				},
			],
			ytjData:[
				{
					xtgg:'6KW',
					ytjdcrl:'10.24KWH',
					nbqgl:'6KW',
					mpptgg:'50A*2',
					tynbsl:'18pcs',
					tynzgl:'6KW'
				},
				{
					xtgg:'8KW',
					ytjdcrl:'15.36KWH',
					nbqgl:'8KW',
					mpptgg:'50A*3',
					tynbsl:'27pcs',
					tynzgl:'8KW'
				},
				{
					xtgg:'10KW',
					ytjdcrl:'20.48KWH',
					nbqgl:'10KW',
					mpptgg:'50A*4',
					tynbsl:'36pcs',
					tynzgl:'10KW'
				},
				{
					xtgg:'12KW',
					ytjdcrl:'25.6KWH',
					nbqgl:'12KW',
					mpptgg:'60A*4',
					tynbsl:'36pcs',
					tynzgl:'12KW'
				},
				{
					xtgg:'12KW',
					ytjdcrl:'30.72KWH',
					nbqgl:'12KW',
					mpptgg:'60A*4',
					tynbsl:'36pcs',
					tynzgl:'12KW'
				},
				{
					xtgg:'15KW',
					ytjdcrl:'40.96KWH',
					nbqgl:'15KW',
					mpptgg:'60A*4',
					tynbsl:'36pcs',
					tynzgl:'15KW'
				},
				{
					xtgg:'15KW',
					ytjdcrl:'51.2KWH',
					nbqgl:'15KW',
					mpptgg:'60A*4',
					tynbsl:'36pcs',
					tynzgl:'15KW'
				},
				{
					xtgg:'18KW',
					ytjdcrl:'51.2KWH',
					nbqgl:'18KW',
					mpptgg:'60A*4',
					tynbsl:'36pcs',
					tynzgl:'18KW'
				},
				{
					xtgg:'45KW',
					ytjdcrl:'102.4KWH',
					nbqgl:'15KW*3/45KW',
					mpptgg:'60A*8',
					tynbsl:'72pcs',
					tynzgl:'45KW'
				}
			],
			actQfwIndex:0
		}
	},
	methods: {
		checkScrooTable(){
			let box1 = document.getElementsByClassName("tablem_1")[0].children[2];
			let myWidth = box1.scrollWidth - box1.clientWidth;
			let tabicon1=document.getElementsByClassName('tableicon1')[0];
			let box2 = document.getElementsByClassName("tablem_2")[0].children[2];
			let myWidth2 = box2.scrollWidth - box2.clientWidth;
			let tabicon2=document.getElementsByClassName('tableicon2')[0];
			// let box2 = document.getElementsByClassName("el-table__body-wrapper")[3];
			// let myWidth2 = box1.scrollWidth - box1.clientWidth;
			box1.addEventListener('scroll', () => {  //监听滚动
			    if (box1.scrollLeft >= myWidth) {
			        //滚动到了右边
					tabicon1.style.display="none";
				}else{
					tabicon1.style.display="block";
				}
			}, true)
			box2.addEventListener('scroll', () => {  //监听滚动
			    if (box2.scrollLeft >= myWidth ) {
			        //滚动到了右边
					tabicon2.style.display="none";
				}else{
					tabicon2.style.display="block";
				}
			}, true)
		},
		initSwiper() {
			const that=this;
			setTimeout(()=>{
				if(that.clientWidth<1000){
					that.mySwiper = new Swiper(".mySwiper", {
						slidesPerView: 1,
						spaceBetween: 30,
						autoplay: {
							delay: 4000,
							stopOnLastSlide: false
						},
						pagination: {
							el: ".swiper-pagination",
							clickable: true,
						},
					});
				}
				else{
					that.mySwiper = new Swiper(".mySwiper", {
						slidesPerView: 2,
						spaceBetween: 30,
						autoplay: {
							delay: 4000,
							stopOnLastSlide: false
						},
						pagination: {
							el: ".swiper-pagination",
							clickable: true,
						},
					});
				};
			},400)
		}
	},
	mounted() {
		const that = this;
		that.$nextTick(() => {
			that.clientWidth = document.body.clientWidth;
			that.initSwiper();
			window.addEventListener("resize", function() {
				return (() => {
					window.screenWidth = document.body.clientWidth;
					that.screenWidth = window.screenWidth;
					if(that.screenWidth<1000){
						that.mySwiper.params.slidesPerView=1;
					}
					else{
						that.mySwiper.params.slidesPerView=2;
					}
				})();
			});
			that.checkScrooTable();
		})
	}
})
