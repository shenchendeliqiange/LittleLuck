

$(document).ready(function(){
	var ids = ["page_home_top_h1_1","page_home_top_h1_2","page_home_bottom_h1_1"];
	//var textArrs = [["Nice ","to ","meet ","you ","Qiange","~"],["You ","are ","my ","little ","luck","!"],["Press ","to ","continue ","our ","story",".",".","."]];
	var textArrs = [["N","i","c","e ","t","o ","m","e","e","t ","y","o","u ","Q","i","a","n","g","e","~"],["Y","o","u ","a","r","e ","m","y ","l","i","t","t","l","e ","l","u","c","k","!"],["P","r","e","s","s ","t","o ","c","o","n","t","i","n","u","e ","o","u","r ","s","t","o","r","y",".",".","."]];

	addTextIteration(ids,textArrs,0);
	
	$("#page_home_bottom_h1_1").click(function(){
		$("#page_1").css("display","block");
	});
	
	$("#search").click(function(){
		alert("我还没做完！");
	});
	
	$("#achieve").click(function(){
		alert("敬请期待");
	});
	
	$("#publish").click(function(){
		alert("我想你了！！");
	});
	
});

function addTextIteration(ids,arrs,count){
	var flag = ids.length;
	if(count < flag)
	{
		var flag = 0;
		var textTimer = setInterval(function(){
			var str = "";
			for(var i = 0;i < flag;i++){
				str += arrs[count][i];
			}
			$("#"+ids[count]).html(str);
			flag++;
			if(flag == arrs[count].length+1){
				clearInterval(textTimer);
				addTextIteration(ids,arrs,count+1);
			}
		},200);
	}
	
}

function addText(id,arr){
	var flag = 0;
	var textTimer = setInterval(function(){
		var str = "";
		for(var i = 0;i < flag;i++){
			str += arr[i];
		}
		$("#"+id).html(str);
		flag++;
		if(flag == arr.length+1){
			clearInterval(textTimer);
		}
	},400);
}