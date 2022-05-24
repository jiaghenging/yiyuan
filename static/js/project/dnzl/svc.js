const appSvc = new Vue({
	el: '#appSvc',
	data() {
		return {
			test:80,
			screenWidth:0,
			swiperMsg: [
				{
					img: '../../../static/image/project/dnzl/svc/swiper/pr1.png',
					num:'1'
				},
				{
					img: '../../../static/image/project/dnzl/svc/swiper/pr2.png',
					num:'2'
				},
				{
					img: '../../../static/image/project/dnzl/svc/swiper/pr3.png',
					num:'3'
				}
			],
			proMsg: {
				state: 0, //0是参数1是规格
				canshu: [{
						title: '功率:',
						value: '500VA ~30KVA'
					},
					{
						title: '输入电压:',
						value: '100V~250V \xa0150V~250V \xa0176V~264V'
					},
					{
						title: '线制:',
						value: '单相'
					},
					{
						title: '稳压精度:',
						value: '3%'
					},
					{
						title: '噪音:',
						value: '≤50dB'
					},
					{
						title: '显示屏:',
						value: 'LEC \xa0彩色LED \xa0指针'
					}
				],
				guige: [{
					name: 'PRO-500VA',
					capacity: '400W',
					size: '192*175*36'
				}, {
					name: 'PRO-1000VA',
					capacity: '800W',
					size: '208*200*158'
				}, {
					name: 'PRO-1500VA',
					capacity: '1200W',
					size: '208*200*158'
				}, {
					name: 'PRO-2000VA',
					capacity: '1600W',
					size: '250*281*200'
				}, {
					name: 'PRO-3000VA',
					capacity: '2400W',
					size: '250*300*205'
				}, {
					name: 'PRO-5000VA',
					capacity: '4000W',
					size: '250*365*205'
				}, {
					name: 'PRO-8000VA',
					capacity: '6400W',
					size: '305*405*233'
				},
				{
					name: 'PRO-10000VA',
					capacity: '8000W',
					size: '305*405*233'
				},
				{
					name: 'PRO-12KVA',
					capacity: '9600W',
					size: '305*405*233'
				},
				{
					name: 'PRO-10000VA（立式）',
					capacity: '8000W',
					size: '330*370*500'
				},
				{
					name: 'PRO-15KVA（立式）',
					capacity: '12000W',
					size: '280*380*550'
				},
				{
					name: 'PRO-20KVA（立式）',
					capacity: '16000W',
					size: '326*500*695'
				},
				{
					name: 'PRO-30KVA（立式）',
					capacity: '24000W',
					size: '326*600*695'
				}
				]
			},
			tssMsg: {
				state: 0, //0是参数1是规格
				canshu: [{
						title: '功率:',
						value: '500VA~12KVA'
					},
					{
						title: '输入电压:',
						value: '100V~250V \xa0150V~250V'
					},
					{
						title: '线制:',
						value: '单相'
					},
					{
						title: '稳压精度:',
						value: '3%'
					},
					{
						title: '整机效率:',
						value: '>98%'
					},
					{
						title: '噪音:',
						value: '≤50dB'
					},
					{
						title: '显示屏:',
						value: 'LED \xa0彩色LED'
					}
				],
				guige: [{
					name: 'TSS-500VA',
					capacity: '400W',
					size: '205*142*200'
				}, {
					name: 'TSS-1000VA',
					capacity: '800W',
					size: '205*142*200'
				}, {
					name: 'TSS-1500VA',
					capacity: '1200W',
					size: '205*165*240'
				}, {
					name: 'TSS-2000VA',
					capacity: '1600W',
					size: '205*165*240'
				}, {
					name: 'TSS-3000VA',
					capacity: '2400W',
					size: '290*178*335'
				}, {
					name: 'TSS-5000VA',
					capacity: '4000W',
					size: '290*178*335'
				}, {
					name: 'TSS-8000VA',
					capacity: '6400W',
					size: '330*200*390'
				}, {
					name: 'TSS-10000VA',
					capacity: '8000W',
					size: '330*200*390'
				},{
					name: 'TSS-12KVA',
					capacity: '9600W',
					size: '330*200*390'
				}
				
				]
			},
			pro3Msg: {
				state: 0, //0是参数1是规格
				canshu: [
					{
						title: '功率:',
						value: '1500VA ~100KVA'
					},
					{
						title: '输入电压:',
						value: '304V~456V \xa0278V~433V'
					},
					{
						title: '线制:',
						value: '三相三线  三相四线'
					},
					{
						title: '稳压精度:',
						value: '3%'
					},
					{
						title: '整机效率:',
						value: '>98%'
					},
					{
						title: '噪音:',
						value: '≤50dB'
					},
					{
						title: '显示屏:',
						value: 'LED \xa0彩色LED'
					}
				],
				guige: [
					{
						name: 'PRO-3-1.5KVA',
						capacity: '1200W',
						size: '230*330*418'
					},{
						name: 'PRO-3-3KVA',
						capacity: '2400W',
						size: '230*330*418'
					},{
						name: 'PRO-3-4.5KVA',
						capacity: '3600W',
						size: '230*330*418'
					},{
						name: 'PRO-3-6KVA',
						capacity: '4800W',
						size: '280*380*645'
					},{
						name: 'PRO-3-9KVA',
						capacity: '7200W',
						size: '280*380*645'
					},{
						name: 'PRO-3-15KVA',
						capacity: '12000W',
						size: '280*380*690'
					},{
						name: 'PRO-3-20KVA',
						capacity: '16000W',
						size: '325*420*667'
					},{
						name: 'PRO-3-30KVA',
						capacity: '24000W',
						size: '325*420*667'
					},{
						name: 'PRO-3-45KVA',
						capacity: '36000W',
						size: '430*755*1020'
					},{
						name: 'PRO-3-50KVA',
						capacity: '40000W',
						size: '430*755*1020'
					},{
						name: 'PRO-3-60KVA',
						capacity: '48000W',
						size: '430*755*1020'
					},{
						name: 'PRO-3-75KVA',
						capacity: '60000W',
						size: '430*755*1020'
					},{
						name: 'PRO-3-100KVA',
						capacity: '80000W',
						size: '440*940*1100'
					},
					
				]
			},
			svc3Msg: {
				state: 0, //0是参数1是规格
				canshu: [
					{
						title: '功率:',
						value: '1500VA ~100KVA'
					},
					{
						title: '输入电压:',
						value: '304V~456V \xa0278V~433V'
					},
					{
						title: '线制:',
						value: '三相四线 \xa0三相三线'
					},
					{
						title: '稳压精度:',
						value: '3%'
					},
					{
						title: '整机效率:',
						value: '>98%'
					},
					{
						title: '噪音:',
						value: '≤50dB'
					},
					{
						title: '显示屏:',
						value: 'LED \xa0指针'
					}
				],
				guige: [
					{
						name: 'SVC-3-1.5KVA',
						capacity: '1200W',
						size: '305*405*233'
					},
					{
						name: 'SVC-3-3KVA',
						capacity: '2400W',
						size: '305*405*233'
					},
					{
						name: 'SVC-3-4.5KVA',
						capacity: '3600W',
						size: '305*405*233'
					},
					{
						name: 'SVC-3-6KVA',
						capacity: '4800W',
						size: '315*365*785'
					},
					{
						name: 'SVC-3-9KVA',
						capacity: '7200W',
						size: '315*365*785'
					},
					{
						name: 'SVC-3-15KVA',
						capacity: '12000W',
						size: '400*370*710'
					},
					{
						name: 'SVC-3-20KVA',
						capacity: '16000W',
						size: '460*410*855'
					},
					{
						name: 'SVC-3-30KVA',
						capacity: '24000W',
						size: '460*410*855'
					},
					{
						name: 'SVC-3-45KVA',
						capacity: '36000W',
						size: '625*605*1015'
					},
					{
						name: 'SVC-3-50KVA',
						capacity: '40000W',
						size: '625*605*1015'
					},
					{
						name: 'SVC-3-60KVA',
						capacity: '48000W',
						size: '625*605*1015'
					},
					{
						name: 'SVC-3-75KVA',
						capacity: '60000W',
						size: '625*605*1015'
					},{
						name: 'SVC-3-100KVA',
						capacity: '80000W',
						size: '800*740*1030'
					}
					
				]
			}
		}
	},
	methods: {
		initSwiper() {
			var swiper = new Swiper(".mySwiper", {
				speed: 1000,
				loop:true,
				autoplay: {
					delay: 2000,
					stopOnLastSlide: false,
					disableOnInteraction: false
				},
			});
		}
	},
	mounted() {
		const that = this;
		
		that.$nextTick(() => {
			that.initSwiper();
			that.screenWidth = document.body.clientWidth;
			window.onresize = () => {
			      return that.screenWidth = document.body.clientWidth;
			}
		})
	}
})
