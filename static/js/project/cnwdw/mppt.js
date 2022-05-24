const appMppt = new Vue({
	el: '#appMppt',
	data() {
		return {
			mpptMsg:{
					name:'MPPT太阳能控制器',
					canshu:[
						{
							name:'支持电压：',
							val:'12V/24V/48V'
						},
						{
							name:'最大充电电流：',
							val:'60A'
						},
						{
							name:'效率：',
							val:'最高98%'
						},
						{
							name:'充电模式：',
							val:'三级优化充电'
						},
						{
							name:'防护等级：',
							val:'IP31（室内）'
						},
						{
							name:'电池温度传感器：',
							val:'有'
						},
						{
							name:'支持电池：',
							val:'多种铅酸电池'
						}
					]
				}
		}
	},
	mounted() {
		const that = this;
		
	}
})
