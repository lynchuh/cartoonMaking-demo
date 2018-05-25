!function(){
    var duration = 50
    $('.buttons').on('click', 'button', function(e){
      let $button = $(e.currentTarget) // button
      let speed = $button.attr('data-speed')
      $button.addClass('active')
        .siblings('.active').removeClass('active')
      switch(speed){
        case 'slow':
          duration = 100
          console.log('hhh')
          break
        case 'normal':
          duration = 50
          break
        case 'fast':
          duration = 10
          break
      }
    })
    function writeCode(prefix, code, fn){
      let container = document.querySelector('#codeTag')
      let styleTag = document.querySelector('#styleTag')
      let codeWrapper = document.querySelector('.codeWrapper')
      console.dir(codeWrapper)
      let n = 0
      let id
      id = setTimeout(function run(){
        n+=1
        container.innerHTML = code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        codeWrapper.scrollTop=container.scrollHeight
        if(n < code.length){
          id = setTimeout(run, duration)
        }else{
          fn && fn.call()
        }
      }, duration)
    }
    let code = `/**
*先给佩奇来一个大草地
**/
.grass{
position: fixed;
bottom:0;
background-color: rgb(119,199,110);
height:100px;
width: 100%;
}
/**
*现在第一步先给佩奇画上它的小脑袋
**/
.head{
left:120px;top:80px;
height:100px;width:105px;
background-color: rgb(255,196,224);
border:4px solid rgb(231,149,192);
border-radius:100% 80% 80% 80%;
}
.cover{  
left:134px;top:120px;
height:20px;width:40px;
background-color: rgb(255,196,224);
transform: rotate(25deg);
}
/**
 * 现在呢，画上佩奇的社会吹风机
**/
.nose{
height: 60px;
width:100px;
background-color: rgb(255,196,224);
border:4px solid rgb(231,149,192);
border-radius:80% 50% 50% 80%;
border-right-color: transparent;
transform: rotate(20deg);
left:80px;top:66px;
}
.nares{
height:50px;width:35px;
background-color: rgb(255,196,224);
border:4px solid rgb(231,149,192);
border-radius:50%;
transform: rotate(38deg);
left:84px;top:58px;
}
/**
 * 这是它的两个小鼻孔
**/
.nares::after,.nares::before{
content:'';
position: absolute;
height:8px;width:8px;
background-color: rgb(214,104,169);
border-radius:50%;
}
.nares::after{
top:50%;left:8%;
}
.nares::before{
top:40%;left:48%;
}
/**
 * 还有两个猪耳朵*
**/
.ear.left{
top:54px;left:180px;
height:40px;width:24px;
background-color: rgb(255,196,224);
border:4px solid rgb(231,149,192);
border-radius:80% 80% 0 0;
transform: rotate(12deg);
}
.ear.right{
top:64px;left:210px;
height:40px;width:24px;
background-color: rgb(255,196,224);
border:4px solid rgb(231,149,192);
border-radius:80% 80% 0 0;
transform: rotate(36deg)
}

/**
 * 现在呢，画上佩奇的两只大眼睛
**/
.eye.left{
top:90px;left:150px;
}
.eye.right{
top:100px;left:180px;
}
.eye{
height:20px;width:20px;
border:4px solid rgb(231,149,192);
border-radius:50%;
background-color: #fff;
}
/**
 * 还有它的两个小眼珠子
**/
.eye:after{
content:'';
position: absolute;
width:8px;height:8px;
background-color: #000;
border-radius:100%;
top:30%;left:40%;
}
/**
 * 是时候给佩奇上个小腮红了
**/
.face{
top:130px;left:186px;
background-color: rgb(255,140,409);
height:26px;width:26px;
border-radius:65% 50%;
}
/**
 * 来个小嘴巴
**/
.mouth{
top:90px;left:128px;
width:80px;height:60px;
background-color: transparent;
border-radius:90%;
border:5px solid transparent;
border-left-color:rgb(239,63,133);
transform:rotate(-70deg);
}

/**
 * 然后给佩奇穿上小红裙
**/
.leftDress{
top:168px;left:126px;
height:80px;width:50px;
border: 4px solid rgb(227,53,63);
background-color: rgb(233,86,94);
border-right:0px;
border-radius:100% 0 0 0;
}
.rightDress{
top:168px;left:172px;
height:80px;width:50px;
border: 4px solid rgb(227,53,63);
background-color: rgb(233,86,94);
border-left:0px;
border-radius: 0 100% 0 0 ;
}
/**
 * 接着，这里是佩奇的左手
**/
.hand.left{
top:198px;left:92px;
height:6px;width:60px;
background-color: rgb(253,182,224);
border-radius:20%;
transform: rotate(-22deg);
}
.hand.left::before{
top:8px;left:4px;
content:'';
position: absolute;
background-color: rgb(253,182,224);
border-radius:32%;
height:5px;width:12px;
transform: rotate(-52deg);
}
.hand.left::after{
top:-8px;left:6px;
content:'';
position: absolute;
background-color: rgb(253,182,224);
border-radius:20%;
height:5px;width:12px;
transform: rotate(52deg);
}
/**
 * 这里是佩奇的右手
**/
.hand.right{
background-color: rgb(253,182,224);
height:6px;width:60px;
border-radius:20%;
transform: rotate(208deg);
top:198px;left:198px;

}
.hand.right::before{
content:'';
position: absolute;
background-color: rgb(253,182,224);
border-radius:32%;
height:5px;width:12px;
transform: rotate(-52deg);
top:8px;left:4px;
}
.hand.right::after{
content:'';
position: absolute;
background-color: rgb(253,182,224);
border-radius:20%;
height:5px;width:12px;
transform: rotate(52deg);
top:-8px;left:6px;
}
/**
 * 接下来画佩奇的小jio jio~
**/
.foot{
background-color: rgb(252,184,225);
width:6px;height:40px;

top:240px;
}
.foot.left{
left:150px;
}
.foot.right{
left:190px
}
.foot:after{
content:'';
position: absolute;
height:8px;
width:20px;
background-color: #000;
top:90%;
right:0%;
border-radius:50% 100%;
transform: rotate(-15deg);
}
.shadow{
height:20px;
width:100px;
background-color: #589454;
border-radius: 50%;
top:270px;
left:118px;
}
/**
 * 最后，这个社会人送给你~
 * **/`
    writeCode('',code)
  
  }.call()