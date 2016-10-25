

$(document).ready(function(){

	
	var ids = ["page_home_top_h1_1","page_home_top_h1_2","page_home_bottom_h1_1"];
	var textArrs = [["Nice ","to ","meet ","you ","Qiange","~"],["You ","are ","my ","little ","luck","!"],["Press ","to ","continue ","our ","story",".",".","."]];

	addTextIteration(ids,textArrs,0);
	
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
		},400);
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