function arrayObjectIndexOf(myArray, searchTerm, property) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

function calculate(){

	var subject= document.getElementById("subject").value;
    var num= document.getElementById("courseNum").value;
    var sub_num= subject.concat(num);
    var results= document.getElementById("results");
    var html = "";
    results.innerHTML = "";
    var inst_array = [];
    var update_array = [];

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
            var inst = groups[sub_num][i]['instructor'];
            var person = {
                aprec: a,
                instructor: inst
            };
            if (arrayObjectIndexOf(inst_array, inst, "instructor")==-1){
                inst_array.push(person);
            }
            // inst_array.push(person);
    	}

        inst_array.sort(function(a, b){
            return b.aprec-a.aprec
        });
        console.log(inst_array.length);
        for (var j=0; j<inst_array.length; j++) {
            html+="<div>" + (j+1) + ". " + inst_array[j].instructor + "</div>";
        }
    		
    }
    console.log(html);
    results.innerHTML = html;
}