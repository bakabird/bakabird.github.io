function Tag(obj){
  return document.getElementsByTagName(obj);
}
function Id(obj){
  return document.getElementById(obj);
}
function Name(obj){
  return document.getElementsByName(obj);
}
function Class(obj){
  return document.getElementsByClassName(obj);
}

function alarmafter5(){
alert('time up!');
var music = document.createElement('audio');
music.src = "The Rain.mp3";
music.autoplay = "autoplay";
music.id = 'alarm';
Tag("body")[0].appendChild(music);
};
function stop(){
  var music = Id('alarm');
Tag("body")[0].removeChild(music);
}
function timeset(){
  var  timeLast = Id('time').value;
  var timeOutInMin = timeLast;
  var  timeOutInsec  = timeOutInMin * 60*1000;
  timeOutShow(timeOutInMin);
  setTimeout("alarmafter5()",timeOutInsec);
  // 添加判断的是不是正 时间的判断
};

  // setTimeout("stop()",5000);
function timeOutShow(timeOutInMin){
  var timeOut = document.createTextNode(timeOutInMin);
  var timeShow = document.createElement('h1');
  timeShow.id = "timeShow";
  timeShow.appendChild(timeOut);
  Tag("body")[0].appendChild(timeShow);
      if(Id("timeShow").innerHTML*2 % 1=== 0){
  setInterval('Id("timeShow").innerHTML=Id("timeShow").innerHTML - 0.5',30000);
}
else{
  alert('no');
  var ii = (Id("timeShow").innerHTML*2-Math.floor(Id("timeShow").innerHTML*2))*30000;
   setTimeout("dd()",ii);
};
}


function dd () {
  Id("timeShow").innerHTML= Math.floor(Id("timeShow").innerHTML*2)/2;
  setInterval('Id("timeShow").innerHTML=Id("timeShow").innerHTML - 0.5',30000);
}



// 把这个数字乘以2 再次向下取整后留下的数子
// 把该数字 ＊30000 用这个数作为settimeout的时间 做一个去除。
// or
// 把这个数字处以2 这个数就是要消耗掉的时间，单位：分
// so 这个数字 ＊60 ＊1000 save as 一个变量 用其作为setimeout的时间堆做一次 削减。

