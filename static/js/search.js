const appSearch = new Vue({
	el: '#appSearch',
	data() {
		return {
			searchTxt: {
				txt: '',
				code: 0
			},
			pageMsg: [{
					title: '首页',
					link: 'index.html',
					route: '首页'
				},
				{
					title: '产品中心',
					route: '产品中心',
					sons: [{
							title: '电能质量',
							link: 'product/dnzl/index.html',
							route: '产品中心/电能质量',
							sons: [{
									title: '相关产品',
									link: 'product/dnzl/index.html?type=1',
									route: '产品中心/电能质量',
									sons: [{
											title: '有源滤波器-AHF',
											link: 'product/dnzl/ahf.html',
											route: '产品中心/电能质量/相关产品'
										},
										{
											title: '静止无功发生器-SVG',
											link: 'product/dnzl/svg.html',
											route: '产品中心/电能质量/相关产品'
										},
										{
											title: '混合型动态无功补偿装置-CSVG',
											link: 'product/dnzl/csvg.html',
											route: '产品中心/电能质量/相关产品'
										},
										{
											title: '自动电压调节器-AVC(IGBT稳压器)',
											link: 'product/dnzl/avc.html',
											route: '产品中心/电能质量/相关产品'
										},
										// {
										// 	title: '电力电容器-LC',
										// 	mLink: true
										//  route:'产品中心/电能质量/相关产品'
										// },
										{
											title: '马达式稳压器-SVC/TNS',
											link: 'product/dnzl/svc.html',
											route: '产品中心/电能质量/相关产品'
										},
										{
											title: '电子式稳压器-AVR',
											link: 'product/dnzl/avr.html',
											route: '产品中心/电能质量/相关产品'
										},
										{
											title: '三相全自动补偿式电力稳压器-SBW',
											link: 'product/dnzl/sbw.html',
											route: '产品中心/电能质量/相关产品'
										},
										// {
										// 	title: '升降变压器-ST/NT',
										// route:'产品中心/电能质量/相关产品/'
										// }

									]
								},
								{
									title: '优势介绍',
									link: 'product/dnzl/index.html?type=2',
									route: '产品中心/电能质量'
								},
								{
									title: '下载中心',
									link: 'product/dnzl/index.html?type=3',
									route: '产品中心/电能质量'
								}
							]
						},
						{
							title: '储能微电网',
							link: 'product/cnwdw/index.html',
							route: '产品中心/储能微电网',
							sons: [{
									title: '相关产品',
									link: 'product/cnwdw/index.html?type=1',
									route: '产品中心/微电网',
									sons: [{
											title: '储能一体机-ESS',
											link: 'product/cnwdw/ess.html',
											route: '产品中心/储能微电网/相关产品'
										},
										{
											title: '组串式储能一体机 ESS-60-150',
											link: 'product/cnwdw/zcscn.html',
											route: '产品中心/储能微电网/相关产品'
										},
										{
											title: '车载储能系统',
											link: 'product/cnwdw/czcn.html',
											route: '产品中心/储能微电网/相关产品'
										},
										{
											title: '家庭储能系统',
											link: 'product/cnwdw/jtcn.html',
											route: '产品中心/储能微电网/相关产品'
										},
										{
											title: '光储充一体系统',
											link: 'product/cnwdw/gccyt.html',
											route: '产品中心/储能微电网/相关产品'
										},
										{
											title: '工商业储能系统',
											link: 'product/cnwdw/gsycn.html',
											route: '产品中心/储能微电网/相关产品'
										},
										{
											title: '电网侧与发电侧储能系统',
											link: 'product/cnwdw/dwcyfdc.html',
											route: '产品中心/储能微电网/相关产品'
										}
									]
								},
								{
									title: '优势介绍',
									link: 'product/cnwdw/index.html?type=2',
									route: '产品中心/储能微电网'

								},
								{
									title: '下载中心',
									link: 'product/cnwdw/index.html?type=3',
									route: '产品中心/储能微电网'
								}
							]
						},
						{
							title: '电池管理',
							link: 'product/dcgl/index.html',
							route: '产品中心/电池管理',
							sons: [{
									title: '相关产品',
									link: 'product/dcgl/index.html?type=1',
									route: '产品中心/电池管理',
									sons: [
										// {
										// 	title: '电池管理系统-BMS',
										// 	mLink: true
										// route:'产品中心/电池管理/相关产品'
										// },
										{
											title: '电池包-LFP',
											link: 'product/dcgl/lfp.html',
											route: '产品中心/电池管理/相关产品'
										},
										// {
										// 	title: '充放一体逆变器-UP',
										// 	mLink: true
										// route:'产品中心/电池管理/相关产品'
										// },
										// {
										// 	title: '光储一体逆变器-UPP',
										// route:'产品中心/电池管理/相关产品'
										// 	mLink: true
										// },
										{
											title: '工频正弦波逆变器-HP/PSW7',
											link: 'product/dcgl/hp.html',
											route: '产品中心/电池管理/相关产品'
										},
										{
											title: '三相工频正弦波逆变器-TPP',
											link: 'product/dcgl/tpp.html',
											route: '产品中心/电池管理/相关产品'
										},
										// {
										// 	title: '高频逆变器-OPS',
										// 	mLink: true
										// route:'产品中心/电池管理/相关产品'
										// },
										{
											title: '太阳能控制器-MPPT',
											link: 'product/dcgl/mppt.html',
											route: '产品中心/电池管理/相关产品'
										}
									]
								},
								{
									title: '优势介绍',
									link: 'product/dcgl/index.html?type=2',
									route: '产品中心/电池管理'
								},
								{
									title: '下载中心',
									link: 'product/dcgl/index.html?type=3',
									route: '产品中心/电池管理'
								}
							]
						}
					]
				},
				{
					title: '走进一元',
					route: '走进一元',
					sons: [{
							title: '关于一元',
							link: './enteryy.html',
							route: '走进一元',
							sons: [{
									title: '公司介绍',
									link: './enteryy.html?type=0',
									route: '走进一元/关于一元'
								},
								{
									title: '专利资质',
									link: './enteryy.html?type=1',
									route: '走进一元/关于一元'
								},
								{
									title: '一元优势',
									link: './enteryy.html?type=2',
									route: '走进一元/关于一元'
								},
								{
									title: '企业文化',
									link: './enteryy.html?type=3',
									route: '走进一元/关于一元'
								},
								{
									title: '发展历程',
									link: './enteryy.html?type=4',
									route: '走进一元/关于一元'
								},
								{
									title: '全球布局',
									link: './enteryy.html?type=5',
									route: '走进一元/关于一元'
								},
								{
									title: '资质荣誉',
									link: './enteryy.html?type=6',
									route: '走进一元/关于一元'
								}
							]
						},
						{
							title: '新闻中心',
							link: './newscenter.html',
							route: '走进一元',
							sons: [{
									title: '公司新闻',
									link: './newscenter.html?type=1',
									route: '走进一元/新闻中心'
								},
								{
									title: '展会动态',
									link: './newscenter.html?type=2',
									route: '走进一元/新闻中心'
								},
								{
									title: '技术交流',
									link: './newscenter.html?type=3',
									route: '走进一元/新闻中心'
								}
							]
						},

					]

				},
				{
					title: '加入一元',
					link: 'join.html',
					route: '加入一元'
				},
				{
					title: '联系我们',
					link: 'contact.html',
					route: '加入一元'
				}
			],
			resArr: []
		}
	},
	watch: {
		searchTxt: {
			handler(newVal, oldVal) {
				const that = this;
				// console.log(newVal.txt)
			 if (newVal.txt != null) {
					console.log(that.searchTxt.txt);
					if (newVal.txt == '') {
						that.resArr = [];
					} else {
						that.searchMsg();
					}

				}

			},
			deep: true
		}
	},
	methods: {
		
		toRoute(currentLink) {
			window.location.href = currentLink;
		},
		searchMsg() {
			const that = this;
			let resultArr = [];
			that.searchTxt.txt=that.searchTxt.txt.toUpperCase();
			that.pageMsg.forEach((item, index) => {
				if (item.title.indexOf(that.searchTxt.txt) != -1) {
					resultArr.push(item);
				}
				if (item.sons) {
					item.sons.forEach((item_1, index_1) => {
						if (item_1.title.indexOf(that.searchTxt.txt) != -1) {
							resultArr.push(item_1);
						}
						if (item_1.sons) {
							item_1.sons.forEach((item_2, index_2) => {
								if (item_2.title.indexOf(that.searchTxt.txt) != -1) {
									resultArr.push(item_2);
								}
								if (item_2.sons) {
									item_2.sons.forEach((item_3, index_3) => {
										if (item_3.title.indexOf(that.searchTxt
												.txt) != -1) {
											resultArr.push(item_3);
										}
									})
								}
							})
						}
					})

				}
			});
			that.resArr = resultArr;
		},
		getPara(name) {
			return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location
				.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
		},
	},
	mounted() {
		const that = this;
		that.$nextTick(() => {
			that.searchTxt.txt = that.getPara('search');
		})
	}
})
