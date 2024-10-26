var arr = [
{
	id:"room1",
	src:"2.webp",
	price: "$ 6728",
	title:"Appartment",
	des:"Get started by choosing from one of our pre-built page templates to showcase your properties"
},
{
	id:"room2",
	src:"3.webp",
	price: "$ 6728",
	title:"Classic Home",
	des:"Get started by choosing from one of our pre-built page templates to showcase your properties"
},
{
	id:"room3",
	src:"2.webp",
	price: "$ 6728",
	title: "Office",
	des:"Get started by choosing from one of our pre-built page templates to showcase your properties"
}
]
var box1 = document.getElementById('box1')

	var str = ""
	for(i of arr){
	
		str += `<div style="width:440px; height:465px;  font-family:'Open Sans', Arial, sans-serif; border:1px solid #BECCD6">
		<img src="${i.src}" width="440px" height="220px"> 
		<p style = "color:#00AEFF; margin-left:15px; font-size:22px">${i.price}</p>
		<p style = "color:black; font-size:20px; margin-left:15px; font-weight:bold; line-height:1.2">${i.title}</p>
		<p style = "color:#5E5E5E; font-size: 17px; margin-left:15px; line-height:1.6; text-align:left; font-weight:400">${i.des}</p>
		<div style="width:440px; height:55px; display:flex; align-items:center; justify-content:space-evenly; border:1px solid #BECCD6">
		<img src="6.svg"; width="20px"; height="14px">
		<span style="color:black; font-size:14px">2 bedroom</span>
		<img src="5.svg"; width="20px"; height="14px">
		<span style="color:black; font-size:14px">2 bedroom</span>
		<img src="4.svg"; width="20px"; height="14px">
		<span style="color:#192839; font-size:14px">1050 Sq Ft</span>
		</div>
		</div>`
}
	
	box1.innerHTML=str

var arr1 = [
{
	id:"room4",
	src:"2.webp",
	price: "$ 6728",
	title:"Appartment",
	des:"Get started by choosing from one of our pre-built page templates to showcase your properties"
},
{
	id:"room5",
	src:"3.webp",
	price: "$ 6728",
	title:"Classic Home",
	des:"Get started by choosing from one of our pre-built page templates to showcase your properties"
},
{
	id:"room6",
	src:"2.webp",
	price: "$ 6728",
	title: "Office",
	des:"Get started by choosing from one of our pre-built page templates to showcase your properties"
}
]
var box3 = document.getElementById('box3')

	var str1 = ""
	for(i of arr1){
	
		str1 += `<div style="width:440px; height:465px;  font-family:'Open Sans', Arial, sans-serif; border:1px solid #BECCD6">
		<img src="${i.src}" width="440px" height="220px"> 
		<p style = "color:#00AEFF; margin-left:15px; font-size:22px">${i.price}</p>
		<p style = "color:black; font-size:20px; margin-left:15px; font-weight:bold; line-height:1.2">${i.title}</p>
		<p style = "color:#5E5E5E; font-size: 17px; margin-left:15px; line-height:1.6; text-align:left; font-weight:400">${i.des}</p>
		<div style="width:440px; height:55px; display:flex; align-items:center; justify-content:space-evenly; border:1px solid #BECCD6">
		<img src="6.svg"; width="20px"; height="14px">
		<span style="color:black; font-size:14px">2 bedroom</span>
		<img src="5.svg"; width="20px"; height="14px">
		<span style="color:black; font-size:14px">2 bedroom</span>
		<img src="4.svg"; width="20px"; height="14px">
		<span style="color:#192839; font-size:14px">1050 Sq Ft</span>
		</div>
		</div>`
}
	
	box3.innerHTML=str1

