setInterval(clock,1000);
	function clock(){
		d=new Date();
		ts=d.toLocaleTimeString();
		s=document.getElementById("display");
		s.innerHTML=ts;
		s.style.fontSize="18px";	
		s.style.color="white";
	}
var indexValue=1;
showImg(indexValue);

function btm_slide(e){
	showImg(indexValue=e);
}
function side_slide(e){
	showImg(indexValue+=e);
}
function showImg(e){
var i;
const img=document.querySelectorAll(".fadeSlider img");
const slider=document.querySelectorAll("#btm_slider span");
if(e>img.length){
	indexValue=1;
}
if(e<1){
	indexValue=img.length;
}
for(i=0;i<img.length;i++){
	img[i].style.display="none";
}
for(i=0;i<slider.length;i++){
	slider[i].style.background="none";
}
img[indexValue-1].style.display="block";
slider[indexValue-1].style.background="white";
}
    if(localStorage.length>0){
	document.getElementById("us").value=localStorage.getItem("u");
	document.getElementById("password").value=localStorage.getItem("p");
	} 	