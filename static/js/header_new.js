// 定义一个名为 MyComp 的新组件
var yiyHeader = {
	data: function() {
		return {
			actPage:0,
			scrollData_head: '',
			ifShowHead: true,
			ifTop: true,
			whiteMode: true,
			btnState: 1, //1是收起状态2是展开状态
			ifShowMenu: false,
			actIndex: 0,
			showImg: '../static/image/daohang/01.jpg',
			showImg3: './static/image/daohang/01.jpg',
			showImg2: '../../../static/image/daohang/01.jpg',
			ifTrans: false, //顶部是否透明,
			screenWidth: 0,
			dhMsg: [{
					title: '首页',
					link: 'index.html',
					link2: '../../index.html',
					mLink: true
				},
				{
					title: '产品中心',
					sons: [{
							title: '电能质量',
							img: '../static/image/daohang/01.jpg',
							img2: '../../../static/image/daohang/01.jpg',
							link: 'product/dnzl/index.html',
							link2: '../dnzl/index.html',
							mLink: false,
							sons: [{
									title: '相关产品',
									link: 'product/dnzl/index.html?type=1',
									link2: '../dnzl/index.html?type=1',
									mLink: false,
									sons: [{
											title: '有源滤波器-AHF',
											link: 'product/dnzl/ahf.html',
											link2: '../dnzl/ahf.html',
											mLink: true
										},
										{
											title: '静止无功发生器-SVG',
											link: 'product/dnzl/svg.html',
											link2: '../dnzl/svg.html',
											mLink: true
										},
										{
											title: '混合型动态无功补偿装置-CSVG',
											link: 'product/dnzl/csvg.html',
											link2: '../dnzl/csvg.html',
											mLink: true
										},
										{
											title: '自动电压调节器-AVC(IGBT稳压器)',
											link: 'product/dnzl/avc.html',
											link2: '../dnzl/avc.html',
											mLink: true
										},
										// {
										// 	title: '电力电容器-LC',
										// 	mLink: true
										// },
										{
											title: '三相全自动补偿式电力稳压器-SBW',
											link: 'product/dnzl/sbw.html',
											link2: '../dnzl/sbw.html',
											mLink: true
										},
										{
											title: '马达式稳压器-SVC/TNS',
											link: 'product/dnzl/svc.html',
											link2: '../dnzl/svc.html',
											mLink: true
										},
										{
											title: '电子式稳压器-AVR',
											link: 'product/dnzl/avr.html',
											link2: '../dnzl/avr.html',
											mLink: true
										},

										// {
										// 	title: '升降变压器-ST/NT',
										// 	mLink: true
										// }

									]
								},
								{
									title: '优势介绍',
									link: 'product/dnzl/index.html?type=2',
									link2: '../dnzl/index.html?type=2',
									mLink: true
								},
								{
									title: '下载中心',
									link: 'product/dnzl/index.html?type=3',
									link2: '../dnzl/index.html?type=3',
									mLink: true
								}
							]
						},
						{
							title: '储能微电网',
							img: '../static/image/daohang/02.jpg',
							img2: '../../../static/image/daohang/02.jpg',
							link: 'product/cnwdw/index.html',
							link2: '../cnwdw/index.html',
							mLink: false,
							sons: [{
									title: '相关产品',
									link: 'product/cnwdw/index.html?type=1',
									link2: '../cnwdw/index.html?type=1',
									mLink: false,
									sons: [{
											title: '储能一体机-ESS',
											link: 'product/cnwdw/ess.html',
											link2: '../cnwdw/ess.html',
											mLink: true
										},
										{
											title: '组串式储能一体机 ESS-60-150',
											mLink: true,
											link: 'product/cnwdw/zcscn.html',
											link2: '../cnwdw/zcscn.html',
										},
										{
											title: '车载储能系统',
											link: 'product/cnwdw/czcn.html',
											link2: '../cnwdw/czcn.html',
											mLink: true
										},
										{
											title: '家庭储能系统',
											link: 'product/cnwdw/jtcn.html',
											link2: '../cnwdw/jtcn.html',
											mLink: true
										},
										{
											title: '光储充一体系统',
											mLink: true,
											link: 'product/cnwdw/gccyt.html',
											link2: '../cnwdw/gccyt.html',
										},
										{
											title: '工商业储能系统',
											mLink: true,
											link: 'product/cnwdw/gsycn.html',
											link2: '../cnwdw/gsycn.html',
										},
										{
											title: '电网侧与发电侧储能系统',
											mLink: true,
											link: 'product/cnwdw/dwcyfdc.html',
											link2: '../cnwdw/dwcyfdc.html',
										}
									]
								},
								{
									title: '优势介绍',
									link: 'product/cnwdw/index.html?type=2',
									link2: '../cnwdw/index.html?type=2',
									mLink: true

								},
								{
									title: '下载中心',
									link: 'product/cnwdw/index.html?type=3',
									link2: '../cnwdw/index.html?type=3',
									mLink: true
								}
							]
						},
						{
							title: '电池管理',
							img: '../static/image/daohang/03.jpg',
							img2: '../../../static/image/daohang/03.jpg',
							link: 'product/dcgl/index.html',
							link2: '../dcgl/index.html',
							mLink: false,
							sons: [{
									title: '相关产品',
									link: 'product/dcgl/index.html?type=1',
									link2: '../dcgl/index.html?type=1',
									mLink: false,
									sons: [
										// {
										// 	title: '电池管理系统-BMS',
										// 	mLink: true
										// },
										{
											title: '电池包-LFP',
											link: 'product/dcgl/lfp.html',
											link2: '../dcgl/lfp.html',
											mLink: true
										},
										// {
										// 	title: '充放一体逆变器-UP',
										// 	mLink: true
										// },
										// {
										// 	title: '光储一体逆变器-UPP',
										// 	mLink: true
										// },
										{
											title: '工频正弦波逆变器-HP/PSW7',
											link: 'product/dcgl/hp.html',
											link2: '../dcgl/hp.html',
											mLink: true
										},
										{
											title: '三相工频正弦波逆变器-TPP',
											link: 'product/dcgl/tpp.html',
											link2: '../dcgl/tpp.html',
											mLink: true
										},
										// {
										// 	title: '高频逆变器-OPS',
										// 	mLink: true
										// },
										{
											title: '太阳能控制器-MPPT',
											link: 'product/dcgl/mppt.html',
											link2: '../dcgl/mppt.html',
											mLink: true
										}
									]
								},
								{
									title: '优势介绍',
									link: 'product/dcgl/index.html?type=2',
									link2: '../dcgl/index.html?type=2',
									mLink: true
								},
								{
									title: '下载中心',
									link: 'product/dcgl/index.html?type=3',
									link2: '../dcgl/index.html?type=3',
									mLink: true
								}
							]
						}
					]
				},
				{
					title: '走进一元',
					sons: [{
							title: '关于一元',
							img: '../static/image/daohang/04.jpg',
							img2: '../../../static/image/daohang/04.jpg',
							link: './enteryy.html',
							link2: '../../enteryy.html',
							mLink: false,
							sons: [{
									title: '公司介绍',
									link: './enteryy.html?type=0',
									link2: '../../enteryy.html?type=0',
									mLink: true,
								},
								{
									title: '专利资质',
									link: './enteryy.html?type=1',
									link2: '../../enteryy.html?type=1',
									mLink: true,
								},
								{
									title: '一元优势',
									link: './enteryy.html?type=2',
									link2: '../../enteryy.html?type=2',
									mLink: true,
								},
								{
									title: '企业文化',
									link: './enteryy.html?type=3',
									link2: '../../enteryy.html?type=3',
									mLink: true
								},
								{
									title: '发展历程',
									link: './enteryy.html?type=4',
									link2: '../../enteryy.html?type=4',
									mLink: true
								},
								{
									title: '全球布局',
									link: './enteryy.html?type=5',
									link2: '../../enteryy.html?type=5',
									mLink: true
								},
								{
									title: '资质荣誉',
									link: './enteryy.html?type=6',
									link2: '../../enteryy.html?type=6',
									mLink: true
								}
							]
						},
						{
							title: '新闻中心',
							img: '../static/image/daohang/05.jpg',
							img2: '../../../static/image/daohang/05.jpg',
							link: './newscenter.html',
							link2: '../../newscenter.html',
							mLink: false,
							sons: [{
									title: '公司新闻',
									link: './newscenter.html?type=1',
									link2: '../../newscenter.html?type=1',
									mLink: true
								},
								{
									title: '展会动态',
									link: './newscenter.html?type=2',
									link2: '../../newscenter.html?type=2',
									mLink: true
								},
								{
									title: '技术交流',
									link: './newscenter.html?type=3',
									link2: '../../newscenter.html?type=3',
									mLink: true
								}
							]
						},

					]

				},
				{
					title: '加入一元',
					link: 'join.html',
					link2: '../../join.html',
					mLink: true
				},
				{
					title: '联系我们',
					link: 'contact.html',
					link2: '../../contact.html',
					mLink: true
				}
			],
			dhMsg2: [{
					title: '首页',
					link: 'index.html',
					link2: '../../index.html',
					mLink: true,
				},
				{
					title: '产品中心',
					sons: [{
							title: '电能质量',
							img: '../static/image/daohang/01.jpg',
							img2: '../../../static/image/daohang/01.jpg',
							link: 'product/dnzl/index.html',
							link2: '../dnzl/index.html',
							mLink: false,
							sons: [{
									title: '相关产品',
									link: 'product/dnzl/index.html?type=1',
									link2: '../dnzl/index.html?type=1',
									mLink: false,
									sons: [{
											title: '有源滤波器-AHF',
											link: 'product/dnzl/ahf.html',
											link2: '../dnzl/ahf.html',
											mLink: true
										},
										{
											title: '静止无功发生器-SVG',
											link: 'product/dnzl/svg.html',
											link2: '../dnzl/svg.html',
											mLink: true
										},
										{
											title: '混合型动态无功补偿装置-CSVG',
											link: 'product/dnzl/csvg.html',
											link2: '../dnzl/csvg.html',
											mLink: true
										},
										{
											title: '自动电压调节器-AVC(IGBT稳压器)',
											link: 'product/dnzl/avc.html',
											link2: '../dnzl/avc.html',
											mLink: true
										},
										// {
										// 	title: '电力电容器-LC',
										// 	mLink: true
										// },
										{
											title: '三相全自动补偿式电力稳压器-SBW',
											link: 'product/dnzl/sbw.html',
											link2: '../dnzl/sbw.html',
											mLink: true
										},
										{
											title: '马达式稳压器-SVC/TNS',
											link: 'product/dnzl/svc.html',
											link2: '../dnzl/svc.html',
											mLink: true
										},
										{
											title: '电子式稳压器-AVR',
											link: 'product/dnzl/avr.html',
											link2: '../dnzl/avr.html',
											mLink: true
										},

										// {
										// 	title: '升降变压器-ST/NT',
										// 	mLink: true
										// }

									]
								},
								{
									title: '优势介绍',
									link: 'product/dnzl/index.html?type=2',
									link2: '../dnzl/index.html?type=2',
									mLink: true
								},
								{
									title: '下载中心',
									link: 'product/dnzl/index.html?type=3',
									link2: '../dnzl/index.html?type=3',
									mLink: true
								}
							]
						},
						{
							title: '储能微电网',
							img: '../static/image/daohang/02.jpg',
							img2: '../../../static/image/daohang/02.jpg',
							link: 'product/cnwdw/index.html',
							link2: '../cnwdw/index.html',
							mLink: false,
							sons: [{
									title: '相关产品',
									link: 'product/cnwdw/index.html?type=1',
									link2: '../cnwdw/index.html?type=1',
									mLink: false,
									sons: [{
											title: '储能一体机-ESS',
											link: 'product/cnwdw/ess.html',
											link2: '../cnwdw/ess.html',
											mLink: true
										},
										{
											title: '组串式储能一体机 ESS-60-150',
											mLink: true,
											link: 'product/cnwdw/zcscn.html',
											link2: '../cnwdw/zcscn.html',
										},
										{
											title: '车载储能系统',
											link: 'product/cnwdw/czcn.html',
											link2: '../cnwdw/czcn.html',
											mLink: true
										},
										{
											title: '家庭储能系统',
											link: 'product/cnwdw/jtcn.html',
											link2: '../cnwdw/jtcn.html',
											mLink: true
										},
										{
											title: '光储充一体系统',
											mLink: true,
											link: 'product/cnwdw/gccyt.html',
											link2: '../cnwdw/gccyt.html',
										},
										{
											title: '工商业储能系统',
											mLink: true,
											link: 'product/cnwdw/gsycn.html',
											link2: '../cnwdw/gsycn.html',
										},
										{
											title: '电网侧与发电侧储能系统',
											mLink: true,
											link: 'product/cnwdw/dwcyfdc.html',
											link2: '../cnwdw/dwcyfdc.html',
										}
									]
								},
								{
									title: '优势介绍',
									link: 'product/cnwdw/index.html?type=2',
									link2: '../cnwdw/index.html?type=2',
									mLink: true

								},
								{
									title: '下载中心',
									link: 'product/cnwdw/index.html?type=3',
									link2: '../cnwdw/index.html?type=3',
									mLink: true
								}
							]
						},
						{
							title: '电池管理',
							img: '../static/image/daohang/03.jpg',
							img2: '../../../static/image/daohang/03.jpg',
							link: 'product/dcgl/index.html',
							link2: '../dcgl/index.html',
							mLink: false,
							sons: [{
									title: '相关产品',
									link: 'product/dcgl/index.html?type=1',
									link2: '../dcgl/index.html?type=1',
									mLink: false,
									sons: [
										// {
										// 	title: '电池管理系统-BMS',
										// 	mLink: true
										// },
										{
											title: '电池包-LFP',
											link: 'product/dcgl/lfp.html',
											link2: '../dcgl/lfp.html',
											mLink: true
										},
										// {
										// 	title: '充放一体逆变器-UP',
										// 	mLink: true
										// },
										// {
										// 	title: '光储一体逆变器-UPP',
										// 	mLink: true
										// },
										{
											title: '工频正弦波逆变器-HP/PSW7',
											link: 'product/dcgl/hp.html',
											link2: '../dcgl/hp.html',
											mLink: true
										},
										{
											title: '三相工频正弦波逆变器-TPP',
											link: 'product/dcgl/tpp.html',
											link2: '../dcgl/tpp.html',
											mLink: true
										},
										// {
										// 	title: '高频逆变器-OPS',
										// 	mLink: true
										// },
										{
											title: '太阳能控制器-MPPT',
											link: 'product/dcgl/mppt.html',
											link2: '../dcgl/mppt.html',
											mLink: true
										}
									]
								},
								{
									title: '优势介绍',
									link: 'product/dcgl/index.html?type=2',
									link2: '../dcgl/index.html?type=2',
									mLink: true
								},
								{
									title: '下载中心',
									link: 'product/dcgl/index.html?type=3',
									link2: '../dcgl/index.html?type=3',
									mLink: true
								}
							]
						}
					]
				},
				{
					title: '走进一元',
					sons: [{
							title: '关于一元',
							img: '../static/image/daohang/04.jpg',
							img2: '../../../static/image/daohang/04.jpg',
							link: './enteryy.html',
							link2: '../../enteryy.html',
							mLink: true
						},
						{
							title: '新闻中心',
							img: '../static/image/daohang/05.jpg',
							img2: '../../../static/image/daohang/05.jpg',
							link: './newscenter.html',
							link2: '../../newscenter.html',
							mLink: false,
							sons: [{
									title: '公司新闻',
									link: './newscenter.html?type=1',
									link2: '../../newscenter.html?type=1',
									mLink: true
								},
								{
									title: '展会动态',
									link: './newscenter.html?type=2',
									link2: '../../newscenter.html?type=2',
									mLink: true
								},
								{
									title: '技术交流',
									link: './newscenter.html?type=3',
									link2: '../../newscenter.html?type=3',
									mLink: true
								}
							]
						},

					]

				},
				{
					title: '加入一元',
					link: 'join.html',
					link2: '../../join.html',
					mLink: true
				},
				{
					title: '联系我们',
					link: 'contact.html',
					link2: '../../contact.html',
					mLink: true
				}
			],
			defaultProps: {
				children: 'sons',
				label: 'title'
			},
			level1Msg: [

			],
			level2Msg: [],
			searchInput: ''
		}
	},
	methods: {
		changeURLPar(destiny, par, par_value) {
			var pattern = par + '=([^&]*)';
			var replaceText = par + '=' + par_value;
			if (destiny.match(pattern)) {
				var tmp = '/\\' + par + '=[^&]*/';
				tmp = destiny.replace(eval(tmp), replaceText);
				return (tmp);
			} else {
				if (destiny.match('[\?]')) {
					return destiny + '&' + replaceText;
				} else {
					return destiny + '?' + replaceText;
				}
			}
			return destiny + '\n' + par + '\n' + par_value;
		},
		toSearch() {
			const that = this;
			let ts_href = window.location.href;
			let ts_indexof = ts_href.lastIndexOf("/");
			//获取地址“/”之后的的内容
			let ts_indexText = ts_href.substring(ts_indexof + 1);
			//获取地址“.html”的下标
			let ts_htmlBeforeText = ts_indexText.indexOf(".html");
			//获取 “/”到".html"之间的内容
			let ts_mainText = ts_indexText.substring(0, ts_htmlBeforeText);
			if (ts_mainText == 'search') {
				let a = location.protocol + '//' + location.host + location.pathname;
				history.pushState(null, null, a);
				appSearch._data.searchTxt.code += 1;
				appSearch._data.searchTxt.txt = that.searchInput;
			} else {
				if (level == 1) {
					window.location.href = './search.html?search=' + that.searchInput;
				} else {
					window.location.href = '../../search.html?search=' + that.searchInput;
				}
			}
		},
		findeMaxPdl() {
			const that = this;
			let tree = document.getElementsByClassName('el-tree-node__content');
			let maxPdl = 0;
			let pdlArr = [];
			for (let i = 0; i < tree.length; i++) {
				let pdl = tree[i].style.paddingLeft;
				pdl = parseInt(pdl.slice(0, pdl.length - 2));
				pdlArr.push(pdl);
				if (i == tree.length - 1) {
					maxPdl = Math.max(...pdlArr);
					that.setTreeSize(maxPdl);
				}
			}

		},
		setTreeSize(maxPdl) {
			const that = this;
			let tree = document.getElementsByClassName('el-tree-node__content');
			for (let i = 0; i < tree.length; i++) {
				let pdl = tree[i].style.paddingLeft;
				pdl = parseInt(pdl.slice(0, pdl.length - 2));
				if (pdl >= maxPdl) {
					let spanDom = tree[i].childNodes[tree[i].childNodes.length - 1].style;
					spanDom.fontSize = '14px';
					spanDom.fontWeight = 'normal'
				}
			}
		},
		toIndexPage() {
			if (level == 1) {
				window.location.href = './index.html';
			} else {
				window.location.href = '../../index.html';
			}

		},
		handleNodeClick(currentItem) {
			const that = this;
			console.log(currentItem);
			if (currentItem.mLink) {
				if (currentItem.mLink == true) {
					if (level == 1) {
						window.location.href = currentItem.link;
					} else if (level == 2) {
						window.location.href = currentItem.link2;
					}
				}
			}
		},
		toLink(currentItem, who = 1) {
			const that = this;
			// console.log(currentItem.link);
			console.log(who);
			if (currentItem.link) {
				if (who == 1) {
					window.location.href = currentItem.link;
				} else if (who == 2) {
					window.location.href = currentItem.link2;
				}
			}
		},
		changeImg(item, who = 1) {
			const that = this;
			if (who == 1) {
				that.showImg = item.img;
			} else {
				that.showImg2 = item.img2;
			}

		},
		hideLevel1() {
			const that = this;
			that.level1Msg = [];
		},
		hideLevel2() {
			const that = this;
			that.level2Msg = [];
		},
		changeLevel2Msg(curretindex) {
			const that = this;
			let msg = that.level1Msg[curretindex];
			if (msg.sons) {
				that.level2Msg = msg.sons;
			} else {
				that.level2Msg = [];
			}

		},
		changeLevel1Msg(curretindex) {
			const that = this;
			let msg = that.dhMsg[that.actIndex].sons[curretindex].sons;
			that.level1Msg = msg;
		},
		setWhiteBox() {
			const that = this;
			document.getElementById('navHead').classList.add('whiteBox');
			that.whiteMode = false;
		},
		changeActIndex(currentIndex) {
			const that = this;
			if (currentIndex != 0) {
				document.getElementById('whiteBoard').style.display = 'block';
				document.getElementById('whiteBoard').style.animation = 'whiteBoard_show 0.2s ease-out both';
				if (currentIndex == 1) {
					that.actIndex = 1;
				} else if (currentIndex == 2) {
					that.actIndex = 2;
				}
			} else {
				document.getElementById('whiteBoard').style.animation = 'whiteBoard_hide 0.15s ease-out both';
				setTimeout(function() {
					document.getElementById('whiteBoard').style.display = 'none';
				}, 100)
			}
		},
		showLang() {
			const that = this;
			let langBox = document.getElementsByClassName('langSelect')[0];
			langBox.style.display = 'flex';
			setTimeout(() => {
				langBox.style.top = "60px";
				langBox.style.opacity = 1;
			}, 100)
		},
		hideLang() {
			const that = this;
			let langBox = document.getElementsByClassName('langSelect')[0];
			langBox.style.top = "100px";
			langBox.style.opacity = 0;
			setTimeout(() => {
				langBox.style.display = 'none';
			}, 200)
		},
		changeBtn() {
			const that = this;
			if (that.btnState == 1) { //动作是展开
				document.getElementsByClassName('icon-ego-menu')[0].style.display = 'none';
				document.getElementsByClassName('icon-guanbi')[0].style.display = 'block';
				document.getElementsByClassName('blackLogo')[0].style.display = 'block';
				document.getElementsByClassName('whiteLogo')[0].style.display = 'none';
				that.btnState = 2;
				that.ifShowMenu = true;
				setTimeout(() => {
					document.getElementsByClassName('menu_m')[0].style.opacity = '1';
				}, 100)
			} else { //动作是收起
				document.getElementsByClassName('blackLogo')[0].style.display = 'none';
				document.getElementsByClassName('whiteLogo')[0].style.display = 'block';
				document.getElementsByClassName('icon-ego-menu')[0].style.display = 'block';
				document.getElementsByClassName('icon-guanbi')[0].style.display = 'none';
				document.getElementsByClassName('menu_m')[0].style.opacity = '0';
				that.btnState = 1;
				setTimeout(() => {
					that.ifShowMenu = false;
				}, 200)
			}
		},
		hideBoard(e) {
			const that = this;
			if (that.ifTop) {
				that.whiteMode = true;
				document.getElementById('navHead').classList.remove('whiteBox');
			} else {
				that.whiteMode = false;
			}
			document.getElementById('whiteBoard').style.animation = 'whiteBoard_hide 0.15s ease-out both';
			setTimeout(function() {
				document.getElementById('whiteBoard').style.display = 'none';
			}, 100)

		},
		scrollTop() {
			const that = this;
			that.scrollData_head = document.documentElement.scrollTop || document.body
				.scrollTop; //减100是为了让元素更靠近可视范围
		}
	},
	watch: {
		scrollData_head(newVal, oldVal) {
			const that = this;
			let toTopBtn = document.getElementsByClassName('toTopBtn')[0];
			if (newVal >= 800) {
				toTopBtn.style.display = "block";
				setTimeout(() => {
					toTopBtn.style.opacity = 1;
				}, 0)
			} else {
				toTopBtn.style.opacity = 0;
				setTimeout(() => {
					toTopBtn.style.display = "none";
				}, 0)
			}
			if (that.ifShowMenu == false) {

				if (newVal == 0) {
					document.getElementById('navHead').style.top = '0px';
					document.getElementById('navHead').classList.remove('whiteBox');
					// document.getElementsByClassName('icon-ego-menu')[0].style.color = "#fff";
					that.ifTop = true;
					that.whiteMode = true;
				} else {
					that.ifTop = false;
					if (newVal > oldVal & newVal > 70) {
						//下滑
						document.getElementById('navHead').style.top = '-90px';
					} else {
						// 上滑
						document.getElementById('navHead').style.top = '0px';
						if (newVal >= 25) {
							document.getElementById('navHead').classList.add('whiteBox');
							that.whiteMode = false;
							// document.getElementsByClassName('icon-ego-menu')[0].style.color = "#000";

						} else {
							that.whiteMode = true;
						}

					}
				}
			}
		}
	},
	mounted() {
		const that = this;
		if(typeof(pageAdd)=='number'){
			that.actPage=pageAdd;
		}
		else{
			that.actPage=1;
		}
		window.addEventListener("scroll", that.scrollTop);
		let sw = window.screenWidth = document.body.clientWidth;
		that.findeMaxPdl();
		window.addEventListener("resize", function() {
			return (() => {
				window.screenWidth = document.body.clientWidth;
				that.screenWidth = window.screenWidth;
				if (that.screenWidth > 920) {
					document.getElementsByClassName('blackLogo')[0].style.display = 'none';
					document.getElementsByClassName('whiteLogo')[0].style.display = 'block';
					document.getElementsByClassName('icon-ego-menu')[0].style.display = 'block';
					document.getElementsByClassName('icon-guanbi')[0].style.display =
						'none';
					document.getElementsByClassName('menu_m')[0].style.opacity = '0';
					that.btnState = 1;
					setTimeout(() => {
						that.ifShowMenu = false;
					}, 200)
				}
			})();
		})
	},
	template: `
	<div :class="(ifTrans?'header':'header whiteBox1')" id="navHead" v-show='ifShowHead' @mouseleave="hideBoard()">
		<!-- pcHead -->
		<div class="headerBox">
			<div class="logoBox">
				<a href="javascript:void(0)"  @click="toIndexPage()">
					<img src="../static/image/logo1.png">
				</a>
			</div>
			<!-- 导航链接 -->
			<div class="linkBox" @mouseenter="setWhiteBox()">
				<ul class="navUl">
					<li @mouseenter="changeActIndex(0)"><a @mouseenter="changeActIndex(0)" href="./index.html"
							:class="actPage==0?'actLink':(whiteMode?(ifTrans?'whiteColor':'blackColor'):'txt')">首页</a></li>
					<li @mouseenter="changeActIndex(1)"><a @mouseenter="changeActIndex(1)"
							href="./product/dnzl/index.html"
							:class="actPage==1?'actLink':(whiteMode?(ifTrans?'whiteColor':'blackColor'):'txt')">产品中心</a></li>
					<li @mouseenter="changeActIndex(2)"><a @mouseenter="changeActIndex(2)" href="./enteryy.html"
							:class="actPage==2?'actLink':(whiteMode?(ifTrans?'whiteColor':'blackColor'):'txt')">走进一元</a></li>
					<li @mouseenter="changeActIndex(0)"><a @mouseenter="changeActIndex(0)" href="./join.html"
							:class="actPage==3?'actLink':(whiteMode?(ifTrans?'whiteColor':'blackColor'):'txt')">加入一元</a></li>
					<li @mouseenter="changeActIndex(0)"><a @mouseenter="changeActIndex(0)" href="./contact.html"
							:class="actPage==4?'actLink':(whiteMode?(ifTrans?'whiteColor':'blackColor'):'txt')">联系我们</a></li>
				</ul>
			</div>
			<!-- 搜索框 -->
			<div class="searchBox">
				<div class="searchContent">
					<a href="javascript:void(0)" @click="toSearch()"><i
							:class="whiteMode?(ifTrans?'iconfont icon-sousuo whiteColor':'iconfont icon-sousuo blackColor'):'iconfont icon-sousuo txt' "></i></a>
					<input type="text" v-model="searchInput" placeholder="搜索"
						:class="whiteMode?(ifTrans?'blackInput':'whiteInput'):'whiteInput'"
						@keyup.enter="toSearch()" />
				</div>
			</div>
			<!-- 语言切换 -->
			<div class="langBox">
				<div :class="whiteMode?(ifTrans?'whiteColor':'blackColor'):'txt'" @mouseenter="showLang()"
					@mouseleave="hideLang()">
					<i class="iconfont icon-yuyan"></i>
					<span>CN</span>
					<div class="langSelect">
						<a href="https://www.yiyen.com/">English</a>
						<a href="./index.html">简体中文</a>
					</div>
				</div>
			</div>
		</div>
		<!-- mHeader -->
		<div class="headerBox_m">
			<div class="headerBox_m_center">
				<a href="javascript:void(0)" class="logo_m" @click="toIndexPage()">
					<img src="../static/image/logo1.png" class="whiteLogo">
					<img src="../static/image/logo2.png" class="blackLogo">
				</a>
				<div class="icon_menu">
					<i class="iconfont icon-ego-menu" @click="changeBtn()"></i>
					<i class="iconfont icon-guanbi" @click="changeBtn()"></i>
				</div>
			</div>
		</div>
		<div class="menu_m" v-show="ifShowMenu">
			<div class="menuBox">
				<el-tree :data="dhMsg2" :props="defaultProps" @node-click="handleNodeClick" :render-after-expand="false"></el-tree>
				<div class="searchBox_m">
					<input type="text" placeholder="Search" v-model="searchInput" />
					<i class="iconfont icon-sousuo" @click="toSearch()"></i>
				</div>
			</div>
		</div>
		<!-- 内容显示区域 -->
		<div class="whiteBoard" id="whiteBoard">
			<div class="whiteBoardMsg">
				<div class="whiteBoardMsg_left">
					<div class="imgBox">
						<img :src="showImg" alt="">
					</div>
				</div>
				<div class="whiteBoardMsg_right">
					<div class="level1">
						<ul class="levelUl1">
							<li class="l1Item" v-for="(item,index) in dhMsg[actIndex].sons" :key="index"
								@mouseenter="changeImg(item)">
								<div @click="toLink(item)">
									<h4>{{item.title}}</h4>
									<i class="iconfont icon-arrow-right"></i>
								</div>
								<ul class="levelUl2">
									<li class="l2Item" v-for="(item2,index2) in item.sons" :key="index2">
										<div @click="toLink(item2)">
											<span>{{item2.title}}</span>
											<i class="iconfont icon-arrow-right"></i>
										</div>
										<ul class="levelUl3" v-if="item2.sons">
											<li class="l3Item" v-for="(item3,index3) in item2.sons" :key="index3">
												<div @click="toLink(item3)">
													<span>{{item3.title}}</span>
													<i class="iconfont icon-arrow-right"></i>
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>`
};
//全局注册组件，所有的vue实列都可以使用
// Vue.component('MyComp', MyComp);

var appHeader = new Vue({
	el: '#navHead',
	data: {
		message: 'Hello Vue!'
	},
	//局部注册组件，只能当前的vue实列可以使用
	components: {
		yiyHeader: yiyHeader
	}
})

function toTop() {
	//  设置一个定时器
	const upRoll = setInterval(() => {
		const top = document.documentElement.scrollTop // 每次获取页面被卷去的部分
		const speed = top / 25 // 每次滚动多少 （步长值）
		if (document.documentElement.scrollTop !== 0) {
			document.documentElement.scrollTop -= speed // 不在顶部 每次滚动到的位置
		} else {
			clearInterval(upRoll) // 回到顶部清除定时器
		}
	}, 10)
}
