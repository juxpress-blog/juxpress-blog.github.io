// JavaScript Document
var dt = new Date();
			if(dt.getDate()>=10&&dt.getMonth()>=10){
			document.getElementById("datetime").innerHTML = ((dt.getDate())+"/"+(dt.getMonth()+1));
			}
			else{
			if(dt.getDate()<=10&&dt.getMonth()>=10){
			document.getElementById("datetime").innerHTML = ("0"+(dt.getDate())+"/"+(dt.getMonth()+1));
			}
			else{
			if(dt.getDate()>=10&&dt.getMonth()<=10){
			document.getElementById("datetime").innerHTML = ((dt.getDate())+"/0"+(dt.getMonth()+1));
			}
			else{
			document.getElementById("datetime").innerHTML = ("0"+(dt.getDate())+"/0"+(dt.getMonth()+1));
			}
			}
			}