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

var dt = new Date();
			if(dt.getDate()>=10&&dt.getMonth()>=10){
			document.getElementById("datetimeM").innerHTML = ((dt.getDate())+"/"+(dt.getMonth()+1));
			}
			else{
			if(dt.getDate()<=10&&dt.getMonth()>=10){
			document.getElementById("datetimeM").innerHTML = ("0"+(dt.getDate())+"/"+(dt.getMonth()+1));
			}
			else{
			if(dt.getDate()>=10&&dt.getMonth()<=10){
			document.getElementById("datetimeM").innerHTML = ((dt.getDate())+"/0"+(dt.getMonth()+1));
			}
			else{
			document.getElementById("datetimeM").innerHTML = ("0"+(dt.getDate())+"/0"+(dt.getMonth()+1));
			}
			}
			}


//Showing and hiding the top menu on clicking the menu button & clicking outside respectively:	

	var mb = document.getElementById("menuButtonM");
	var mi = document.getElementById("mtItemsM");
	var mc = document.getElementById("menuCloseButtonM");
	var sl = document.getElementById("semiwhiteLeftBMTM");
	var sr = document.getElementById("semiwhiteRightBMTM");
						
			var n=0;
			
			window.addEventListener('click',function(e){
					
			if(mb.contains(e.target)){n=1}
			else{n=0}
			
			if(mc.contains(e.target)||sl.contains(e.target)||sr.contains(e.target)){
			mb.style="initial";
			mi.style="initial";			
			}
			
			if(n==0){
				if(mi.contains(e.target)){n==1}
				else{
				mb.style="initial";
				mi.style="initial";
				}
			}
			
			if(n==1){
			mb.style.visibility = "hidden";
			mb.style.opacity="0";			
			mb.addEventListener('transitionend',function(){
			n=1;
			
			mb.style.display = "none";
			mi.style.display = "flex";
			mi.style.flexDirection = "column";
			mi.style.alignItems = "center";	
			mi.style.visibility = "visible";})			
			}			
			})
			
	
//For refreshing footer:
	var vw = window.innerWidth;
	var vh = window.innerHeight;

	var hl = document.getElementById("headlines");
		var hlT = hl.getBoundingClientRect();
		var a = hlT.top;
			
function bodyOnload(){	
	
setTimeout(function(){	
	
	//Calulating body height and using it to set the "top" value of Document ending:	
	
	var hl = document.getElementById("headlines");	
	var ns = document.getElementById("news");
	
	var ft = document.getElementById("footer");
	//For detecting end of document:	
	/*var de = document.getElementById("documentEnd");	
	de.style.top = hlT.top + hl.offsetHeight + ns.offsetHeight + "px" ;*/
	
	var fh =  a + hl.offsetHeight + ns.offsetHeight;
		var fhpx = fh + "px";
		var fhvw = fh/vw*100 + "vw";
	
	
	//Defining the placement of the footer:
	
	if(fh>=window.innerHeight){ft.style.top=fhpx;}
	else{ft.style.top="100vh";}
	
	bodyOnload();
},1)
	
}


//For translating content:

var tc = document.getElementsByClassName("translateContentM");
var hml = document.getElementById("hmLeftButtonM");
var hmr = document.getElementById("hmRightButtonM");
	
	var m=0;
	var td=64.5173/3;
	

	window.addEventListener("click",function(f){
	
			//Translating content right:
			if(hml.contains(f.target)){
				if(m>=-9&&m<0){
				for(var i=0;i<tc.length;i++){
					tc[i].style.transform = "translate("+ td*(m+1) +"vw)";	
				}
			m++;
				}
			}
			//Translating content left:
			if(hmr.contains(f.target)){
				if(m>-9&&m<=0){
				for(var i=0;i<tc.length;i++){
					tc[i].style.transform = "translate("+ td*(m-1) +"vw)";
				}			
			m--;
				}
			}

	})

//Placing the headlines:
/*var hls = document.getElementById("headlines");

hls.style.top = 44*vw/vh + "vh";
hls.style.maxHeight = (100-(44*vw/vh)) + "vh";*/
