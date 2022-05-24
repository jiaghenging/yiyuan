const appAvr = new Vue({
	el: '#appAvr',
	data() {
		return {
			screenWidth:0,
			swiperMsg: [{
					img: '../../../static/image/project/dnzl/avr/swiper/avr1.png'
				},
				{
					img: '../../../static/image/project/dnzl/avr/swiper/avr2.png'
				},
				{
					img: '../../../static/image/project/dnzl/avr/swiper/avr3.png'
				},
				{
					img: '../../../static/image/project/dnzl/avr/swiper/avr4.png'
				},
				{
					img: '../../../static/image/project/dnzl/avr/swiper/avr5.png'
				}
			],
			avrMsg: {
				state: 0, //0是参数1是规格
				canshu: [{
						title: '功率:',
						value: '500VA ~20KVA'
					},
					{
						title: '输入电压:',
						value: '90V~270V \xa0125V~270V \xa0140V~260V'
					},
					{
						title: '线制:',
						value: '单相'
					},
					{
						title: '稳压精度:',
						value: '10%'
					},
					{
						title: '噪音:',
						value: '≤50dB'
					},
					{
						title: '显示屏:',
						value: '彩色LED显示屏 \xa0单色LED显示屏 \xa0指针模拟盘'
					}
				],
				guige: [{
					date: 'AVR-500VA',
					name: '400W',
					address: '110*210*147'
				}, {
					date: 'AVR-1KVA',
					name: '800W',
					address: '110*210*147'
				}, {
					date: 'AVR-1.5KVA',
					name: '1200W',
					address: '150*260*155'
				}, {
					date: 'AVR-2KVA',
					name: '1600W',
					address: '151*261*156'
				}, {
					date: 'AVR-3KVA',
					name: '2400W',
					address: '220*320*245'
				}, {
					date: 'AVR-5KVA',
					name: '4000W',
					address: '220*320*245'
				}, {
					date: 'AVR-8KVA',
					name: '6400W',
					address: '220*385*245'
				},
				{
					date: 'AVR-10KVA',
					name: '8000W',
					address: '220*385*245'
				},
				{
					date: 'AVR-12KVA',
					name: '9600W',
					address: '220*385*245'
				},
				{
					date: 'AVR-15KVA（立式）',
					name: '12000W',
					address: '---'
				},
				{
					date: 'AVR-20KVA（立式）',
					name: '16000W',
					address: '---'
				}
				]
			},
			prMsg: {
				state: 0, //0是参数1是规格
				canshu: [{
						title: '功率:',
						value: '500VA ~2000VA'
					},
					{
						title: '输入电压:',
						value: '140V~260V'
					},
					{
						title: '线制:',
						value: '单相'
					},
					{
						title: '稳压精度:',
						value: '10%'
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
					date: 'PR-500VA',
					name: '250W',
					address: '142*85*265'
				}, {
					date: 'PR-1000VA',
					name: '500W',
					address: '142*85*265'
				}, {
					date: 'PR-1500VA',
					name: '750W',
					address: '142*85*265'
				}, {
					date: 'PR-2000VA',
					name: '1000W',
					address: '142*85*265'
				}
				]
			},
			trsMsg: {
				state: 0, //0是参数1是规格
				canshu: [
					{
						title: '功率:',
						value: '500VA ~20KVA'
					},
					{
						title: '输入电压:',
						value: '90V~270V \xa0\xa0125V~270V \xa0\xa0140V~260V'
					},
					{
						title: '线制:',
						value: '单相'
					},
					{
						title: '稳压精度:',
						value: '10%'
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
						date: 'TRS-500VA',
						name: '400W',
						address: '151*70*227.5'
					},
					{
						date: 'TRS-1000VA',
						name: '800W',
						address: '151*70*227.5'
					},
					{
						date: 'TRS-1500VA',
						name: '1200W',
						address: '200*90*270'
					},
					{
						date: 'TRS-2000VA',
						name: '1600W',
						address: '200*112*270'
					},
					{
						date: 'TRS-3000VA',
						name: '2400W',
						address: '290*124*335'
					},
					{
						date: 'TRS-5000VA',
						name: '4000W',
						address: '290*143*335'
					},
					{
						date: 'TRS-8000VA',
						name: '6400W',
						address: '330*200*185'
					},
					{
						date: 'TRS-10KVA',
						name: '8000W',
						address: '330*200*185'
					},
					{
						date: 'TRS-12KVA',
						name: '9600W',
						address: '330*200*185'
					},
					{
						date: 'TRS-15KVA',
						name: '12000W',
						address: '330*200*185'
					},
					{
						date: 'TRS-20KVA',
						name: '16000W',
						address: '452*215*545'
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
