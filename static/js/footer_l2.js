// 定义一个名为 MyComp 的新组件
var yiyFooter = {
	data: function() {
		return {
			
		}
	},
	template: `
	<div class="footer">
		<div class="footerBox">
			<div class="footLogo">
				<div class="logoBox">
					<a href="">
						<img src="../../../static/image/logo2.png">
					</a>
				</div>
			</div>
			<div class="shareBox">
				<div class="footer_tab_link">
					<a href="../../index.html">首页</a>
					<a href="../../product/dnzl/index.html">产品中心</a>
					<a href="../../enteryy.html">走进一元</a>
					<a href="../../join.html">加入一元</a>
					<a href="../../contact.html">联系我们</a>
				</div>
				<!-- 分享链接 -->
				<div class="shareContent">
					<ul class="shareUl">
						<li><i class="iconfont icon-yousanjiao"></i></li>
						<li><i class="iconfont icon-bofang-copy"></i></li>
						<li>
							<i class="iconfont icon-weixin"></i>
							<div class="toShow"></div>
						</li>
						<li>
							<i class="iconfont icon-xinlang"></i>
							<div class="toShow"></div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 版权信息 -->
			<div class="banquanBox">
				<span>Copyright</span>
				<a href="https://beian.miit.gov.cn/">浙ICP备18041239号</a>
				<span>© 2021 一元电气科技有限公司 版权所有</span>
			</div>
			<div class="banquanBox_m">
				<span>Copyright浙ICP备18041239号© 2021 一元电气科技有限公司 版权所有</span>
			</div>
		</div>
	</div>
	`
};
//全局注册组件，所有的vue实列都可以使用
// Vue.component('MyComp', MyComp);

var appFooter = new Vue({
	el: '#navFooter',
	data: {
		
	},
	//局部注册组件，只能当前的vue实列可以使用
	components: {
		yiyFooter: yiyFooter
	}
})
