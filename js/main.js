var por = {
		'face':0,
		'money':0,
		'body':0,
		'brains':0,
		'feel':{
		}
	}
	
var choosegril = [];

var block = document.querySelector("#bolck")

var global = document.querySelector("#global")

var buttons ={
	"start":document.querySelector("#start"),
	"event":document.querySelector("#event"),
	"restart":document.querySelector("#restart"),
	"end":document.querySelector("#end"),
}

var dateno = 1;

var nowevent = {};

var nowgril = {};

var hasnewevnt = false;

var btn_class = ['blue','green','black','yellow','purple','gblue']

window.onload = function(){
	document.querySelector("#txtinput").innerText = '新的'+title+'生活开始了'
	buttons['start'].innerText = title_button
	buttons['restart'].innerText = '重新'+title_button
}

var eventlist = [];

function startgame()
{
	por = {
		'face':0, //颜值
		'money':0, //财力
		'body':0, //体力
		'brains':0, //智力
		'feel':{  //好感
		}
	}
	hasnewevnt = false;
	eventlist = unstart()
	if(getCookie('event')){
		eventlist = JSON.parse(getCookie('event'))
		console.log(eventlist)
	}
	document.querySelectorAll(".ins").forEach(function(data){
		block.removeChild(data)
	});
	document.querySelectorAll(".insbutton").forEach(function(data){
		global.removeChild(data)
	});
	dateno = 1;
	var number = Math.floor(Math.random()*grilname.length);
	choosegril = getRandomArrayElements(grilname,number==0?1:number)
	var txt = '和你同时'+title_button+'的还有'
	choosegril.forEach(function(gril){
		txt += " "+gril
		por.feel[gril] = 0
	})
	var div = document.createElement('div')
	div.innerText = txt +" 于是，美好的"+title+"生活开始了";
	div.className = "ins"
	block.appendChild(div)
	buttons["start"].style.display = "none";
	buttons["end"].style.display = "none";
	buttons["event"].style.display = "";
	buttons["restart"].style.display = "";
}

function events(){
	buttons["event"].style.display = "none";
	var div = document.createElement('div');
	if(!hasnewevnt){
		nowevent = getRandomArrayElements(eventlist,1)[0];
		nowgril = choosegril[Math.floor(choosegril.length*Math.random())]
	}
	var isnewday = nowevent['isnewday'] != undefined ?nowevent['isnewday']:true
	var txt = isnewday?"\r"+title_button+"第"+dateno+"周\r":"\r";
	dateno += isnewday?1:0;
	eventlist.remove(nowevent);
	div.innerText =  txt+nowevent.evn.replace(/grilname/g,nowgril);
	div.className = "ins"
	block.appendChild(div);
	for(item in nowevent.buttons){
		var button = document.createElement('button');
		button.onclick = (function(item){
			return function(){choose(item)}
		})(item)
		button.classList.add('insbutton');
		button.classList.add(getRandomArrayElements(btn_class,1))
		button.id = item
		button.innerText = nowevent.buttons[item].txt
		global.appendChild(button)
	}
}



function choose(data){
	document.querySelectorAll(".insbutton").forEach(function(data){
		global.removeChild(data)
	});
	var txt = nowevent.buttons[data].txt+'\r'+nowevent.buttons[data].over.replace(/grilname/g,nowgril);
	var div = document.createElement('div');
	for( itemx in nowevent.buttons[data].number){
		if(itemx === "feel"){
			por.feel[nowgril] += nowevent.buttons[data].number.feel
		}else{
			por[itemx] += nowevent.buttons[data].number[itemx]
		}
	}
	div.innerText =  txt;
	div.className = "ins"
	div.classList.add('resins')
	block.appendChild(div);
	if(nowevent.buttons[data].event){
		nowevent = nowevent.buttons[data].event
		hasnewevnt = true
		buttons["event"].style.display = "";
	}else{
		hasnewevnt = false
		if(eventlist.length<1){
			buttons['end'].style.display = "";
		}else{
			buttons["event"].style.display = "";
		}				
	}
}

function end(){
	alert("做了做了，在做了。。等等后续吧")
	
}


function getRandomArrayElements(arr, count) {
	var shuffled = arr.slice(0),
		i = arr.length,
		min = i - count,
		temp, index;
	while(i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}
