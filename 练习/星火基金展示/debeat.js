 var bar = document.getElementsByClassName('bar');
// 以上变量

// 用于聚焦
//
// 基本思路如下：：》》
// // 获取当前的对象。
// 获取当前对象所在子节点的目录数，
// 通过目录数，依次改变样式 （
// 分情况：
//   在边上的 改变附近的。
//   在中间的改变邻居
// ）
// 移出是恢复原状。（思路一样。）
var bordern =  function(){
var position =findIndex(bar,this);
switch(position){
  case 0:
    bar[0].className = "bar bar1 catch";
    bar[1].className = "bar pressbar2 touch";
    bar[2].className = "bar pressbar3 beat";
    bar[3].className = "bar pressbar4 safe"
    break;
  case 1:
    bar[0].className = "bar pressbar1 press";
    bar[1].className = "bar bar2 catch";
    bar[2].className = "bar pressbar3 press";
    bar[3].className = "bar pressbar4 safe"
  break;
  case 2:
    bar[0].className = "bar pressbar1 safe";
    bar[1].className = "bar pressbar2 press";
    bar[2].className = "bar bar3 catch";
    bar[3].className = "bar pressbar4 press"
  break;
  case 3:
    bar[0].className = "bar pressbar1 safe";
    bar[1].className = "bar pressbar2 beat";
    bar[2].className = "bar pressbar3 touch";
    bar[3].className = "bar bar4 catch"
  break;
}
};
// 用于恢复
var slim = function(){
    bar[0].className = "bar bar1";
    bar[1].className = "bar bar2";
    bar[2].className = "bar bar3";
    bar[3].className = "bar bar4"
}
var findIndex = function(Arr,value) {
        for (var i = 0; i < Arr.length; i++) {
            if (Arr[i] === value)
                return i;
        }
    }
// 以上函数

window.onload = function(){
  for (var i = bar.length - 1; i >= 0; i--) {
     bar[i].onmouseover = bordern;
     bar[i].onmouseout = slim;
  };
  // 给目录的每一条柱子都添加动作
}




// 双击时进入主题
//     上 顶出 左右蔓延
// 🔎改变样式 变成每个主题向⬇按可以看到详细的介绍。
// 一个主题下的书页的右侧可以点击之后

// function nextPart(){
// bar[0].style.top='100vh';
// bar[1].style.top='100vh';
// bar[2].style.top='100vh';
// bar[3].style.top='100vh';
// document.getElementsByTagName('nav')[0].style.bottom="13vh";
// setTimeout("document.getElementsByClassName('warp1')[0].style.display='none'",1000)
// }
// function backPart(){
// document.getElementsByClassName('warp1')[0].style.display='block';
// bar[0].style.top='';
// bar[1].style.top='';
// bar[2].style.top='';
// bar[3].style.top='';
// document.getElementsByTagName('nav')[0].style.bottom="";
// }
// // 第二部分
// var ppt = document.getElementsByClassName('ppt');
// // ppt展示效果
// var tFoP2 = document.getElementsByClassName('tFoP2');
// function showP211(){
// tFoP2[1].style.color='#fff';
// tFoP2[1].style.backgroundColor='#C94B48';
// tFoP2[0].style.height='0vh';
// tFoP2[1].style.height='20vh';
// tFoP2[1].getElementsByTagName('h2')[0].style.lineHeight='20vh';
// tFoP2[2].style.height='10vh';
// tFoP2[2].getElementsByTagName('h2')[0].style.fontSize='6vh';
// tFoP2[2].getElementsByTagName('h2')[0].style.lineHeight='10vh';
// document.getElementsByClassName('paperfP21')[0].style.height = '70vh';
// setTimeout("document.getElementsByClassName('tFoP23')[0].style.display = 'block'",1);
// }
// function hideP211(){
// tFoP2[1].style.color='';
// tFoP2[1].style.backgroundColor='';
// tFoP2[0].style.height='';
// tFoP2[1].style.height='';
// tFoP2[1].getElementsByTagName('h2')[0].style.lineHeight='';
// tFoP2[2].style.height='';
// tFoP2[2].getElementsByTagName('h2')[0].style.fontSize='';
// tFoP2[2].getElementsByTagName('h2')[0].style.lineHeight='';
// document.getElementsByClassName('paperfP21')[0].style.height = '0';
// setTimeout("document.getElementsByClassName('tFoP23')[0].style.display = ''",1);
// }
// //第二张的第一个H2
// function showP212(){
// tFoP2[0].style.height='0vh';
// tFoP2[1].style.height='0';
// tFoP2[3].style.color='#fff';
// tFoP2[3].style.backgroundColor='#C94B48';
// tFoP2[3].style.height='20vh';
// tFoP2[3].getElementsByTagName('h2')[0].style.lineHeight='20vh';
// tFoP2[4].getElementsByTagName('h2')[0].style.fontSize='6vh';
// tFoP2[4].getElementsByTagName('h2')[0].style.lineHeight='10vh';
// document.getElementsByClassName('paperfP21')[1].style.height = '70vh';
// setTimeout("document.getElementsByClassName('tFoP23')[1].style.display = 'block'",1);
// }
// function hideP212(){
// tFoP2[0].style.height='';
// tFoP2[1].style.height='';
// tFoP2[3].style.color='';
// tFoP2[3].style.backgroundColor='';
// tFoP2[3].style.height='';
// tFoP2[3].getElementsByTagName('h2')[0].style.lineHeight='';
// tFoP2[4].getElementsByTagName('h2')[0].style.fontSize='';
// tFoP2[4].getElementsByTagName('h2')[0].style.lineHeight='';
// document.getElementsByClassName('paperfP21')[1].style.height = '0';
// setTimeout("document.getElementsByClassName('tFoP23')[1].style.display = ''",1);
// }
// //第二张的第二个H2
// // 画卷展示
// // 翻页功能
// function next1(){
// ppt[0].style.left='-100vw'
// ppt[1].style.left='0vw'
// ppt[2].style.left=''
// ppt[3].style.left=''
// ppt[4].style.left=''
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function next2(){
// ppt[0].style.left='-200vw'
// ppt[1].style.left='-100vw'
// ppt[2].style.left='0vw'
// ppt[3].style.left=''
// ppt[4].style.left=''
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function next3(){
// ppt[0].style.left='-300vw'
// ppt[1].style.left='-200vw'
// ppt[2].style.left='-100vw'
// ppt[3].style.left='0vw'
// ppt[4].style.left=''
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function next4(){
// ppt[0].style.left='-400vw'
// ppt[1].style.left='-300vw'
// ppt[2].style.left='-200vw'
// ppt[3].style.left='-100vw'
// ppt[4].style.left='0vw'
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function next5(){
// ppt[0].style.left='-500vw'
// ppt[1].style.left='-400vw'
// ppt[2].style.left='-300vw'
// ppt[3].style.left='-200vw'
// ppt[4].style.left='-100vw'
// ppt[5].style.left='0vw'
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function next6(){
// ppt[0].style.left='-600vw'
// ppt[1].style.left='-500vw'
// ppt[2].style.left='-400vw'
// ppt[3].style.left='-300vw'
// ppt[4].style.left='-200vw'
// ppt[5].style.left='-100vw'
// ppt[6].style.left='0vw'
// ppt[7].style.left=''
// }
// function next7(){
// ppt[0].style.left='-700vw'
// ppt[1].style.left='-600vw'
// ppt[2].style.left='-500vw'
// ppt[3].style.left='-400vw'
// ppt[4].style.left='-300vw'
// ppt[5].style.left='-200vw'
// ppt[6].style.left='-100vw'
// ppt[7].style.left='0vw'
// }
// function back2(){
// ppt[0].style.left='0'
// ppt[1].style.left='100vw'
// ppt[2].style.left=''
// ppt[3].style.left=''
// ppt[4].style.left=''
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function back3(){
// ppt[0].style.left='-100vw'
// ppt[1].style.left='0vw'
// ppt[2].style.left='100vw'
// ppt[3].style.left=''
// ppt[4].style.left=''
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function back4(){
// ppt[0].style.left='-200vw'
// ppt[1].style.left='-100vw'
// ppt[2].style.left='0'
// ppt[3].style.left='100vw'
// ppt[4].style.left=''
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function back5(){
// ppt[0].style.left='-300vw'
// ppt[1].style.left='-200vw'
// ppt[2].style.left='-100vw'
// ppt[3].style.left='0'
// ppt[4].style.left='100vw'
// ppt[5].style.left=''
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function back6(){
// ppt[0].style.left='-400vw'
// ppt[1].style.left='-300vw'
// ppt[2].style.left='-200vw'
// ppt[3].style.left='-100vw'
// ppt[4].style.left='0'
// ppt[5].style.left='100vw'
// ppt[6].style.left=''
// ppt[7].style.left=''
// }
// function back7(){
// ppt[0].style.left='-500vw'
// ppt[1].style.left='-400vw'
// ppt[2].style.left='-300vw'
// ppt[3].style.left='-200vw'
// ppt[4].style.left='-100vw'
// ppt[5].style.left='0'
// ppt[6].style.left='100vw'
// ppt[7].style.left=''
// }
// function back8(){
// ppt[0].style.left='-600vw'
// ppt[1].style.left='-500vw'
// ppt[2].style.left='-400vw'
// ppt[3].style.left='-300vw'
// ppt[4].style.left='-200vw'
// ppt[5].style.left='-100vw'
// ppt[6].style.left='0'
// ppt[7].style.left='100vw'
// }


// 打开
function onpenbannerP2111(){
  document.getElementById('bannerP2111').style.position='absolute';
    document.getElementById('bannerP2111').style.top='0';
    document.getElementById('bannerP2111').style.height='100vh';
    document.getElementById('outbannerP2111').style.display='block';
    document.getElementById('outbannerP2111').style.height='7vh';
     document.getElementById('outbannerP2111').style.fontSize='5vh';
          document.getElementById('dedede').style.display='block';

}
function outbannerP2111(){
  document.getElementById('bannerP2111').style.position='';
    document.getElementById('bannerP2111').style.top='';
    document.getElementById('bannerP2111').style.height='';
    document.getElementById('outbannerP2111').style.display='none';
    document.getElementById('outbannerP2111').style.height='';
     document.getElementById('outbannerP2111').style.fontSize='';
               document.getElementById('dedede').style.display='';
}
