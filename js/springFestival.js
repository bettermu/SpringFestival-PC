;(function($,w,doc){
	/*轮播图*/
	(function(){
		
		//初始化
		var num=0;
		$('.main-slider ul li').eq(num).css('display','block');
		var len=$('.main-slider ul li').length;
		$('.main-slider .next').on('click',function(){
			num= ++num>len-1?0:num;
			change(num);
		})
		$('.main-slider .prev').on('click',function(){
			num= --num<0?len-1:num;
			change(num);
		})
		//切换方法
		function change(num){
			$('.main-slider ul li').eq(num).fadeIn(500).siblings().fadeOut(500);
		}
	})();

	


})(jQuery,window,document)