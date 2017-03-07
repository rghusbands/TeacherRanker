

function calculate(){

	var subject= document.getElementById("subject").value;
    var num= document.getElementById("courseNum").value;
    var sub_num= subject.concat(num);
    var results= document.getElementById("results");
    var html = "";
    results.innerHTML = "";
    var inst_array = [];

	if (groups[sub_num] ==null){
    	html = "<p>No data found given specified input</p>";
    	results.innerHTML = html;
    	return;

	}
    else {

    	console.log(groups[sub_num].length);
    	var arraylength= groups[sub_num].length;

    	for (var i=0; i<arraylength; i++){
            var a = groups[sub_num][i]['aprec'];
            var b = groups[sub_num][i]['bprec'];
            var c = groups[sub_num][i]['cprec'];
            var inst = groups[sub_num][i]['instructor'];

            html+="<div>"+i+"</div>";
    		}
    		
    	}
        console.log(html);
        results.innerHTML = html;

}