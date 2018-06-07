!function(){
    var duration = 10
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
          duration = 10
          break
        case 'fast':
          duration = 5
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
/**
*现在第一步先给佩奇画上它的小脑袋
**/
.head{
background-color: rgb(255,196,224);
border:4px solid rgb(231,149,192);
}
.cover{
background-color: rgb(255,196,224);
}
/**
 * 现在呢，画上佩奇的社会吹风机
**/
.nose{
background-color: rgb(255,196,224);
transform: rotate(20deg);
border:4px solid rgb(231,149,192);
}
.nares{
border:4px solid rgb(231,149,192);
background-color: rgb(255,196,224);
transform: rotate(38deg);
}

/**  这是它的两个小鼻孔 **/

.nares::after,.nares::before{
background-color: rgb(214,104,169);
}

.nares::after{top:50%;left:8%;}
.nares::before{top:40%;left:48%;}

/**
 * 还有两个猪耳朵*
**/
.ear.left,.ear.right{
background-color: rgb(255,196,224);
border:4px solid rgb(231,149,192);
}
.ear.left{transform: rotate(12deg)}
.ear.right{transform: rotate(36deg)}

/** 现在呢，画上佩奇的两只大眼睛**/

.eye.left{top:90px;left:150px;}
.eye.right{top:100px;left:180px;}
.eye{
border:4px solid rgb(231,149,192);
background-color: #fff;
}

/** 还有它的两个小眼珠子**/
.eye:after{
width:8px;height:8px;
background-color: #000;border-radius:100%;
top:30%;left:40%;
}

/**是时候给佩奇上个小腮红了**/

.face{
background-color: rgb(255,140,409);
border-radius:65% 50%;
}

/**来个小嘴巴 **/
.mouth{
  border-left-color:rgb(239,63,133);
  transform:rotate(-70deg);
}

/** 然后给佩奇穿上小红裙 **/
.leftDress{
height:80px;width:50px;
border: 4px solid rgb(227,53,63);
background-color: rgb(233,86,94);
border-radius:100% 0 0 0;
}
.rightDress{
border: 4px solid rgb(227,53,63);
background-color: rgb(233,86,94);
border-left:0px;
}
/**
 * 接着，这里是佩奇的左手
**/
.hand.left{
background-color: rgb(253,182,224);
transform: rotate(-22deg);
}
.hand.left::before{
top:8px;left:4px;
background-color: rgb(253,182,224);
transform: rotate(-52deg);
}
.hand.left::after{
top:-8px;left:6px;
background-color: rgb(253,182,224);
transform: rotate(52deg);
}
/**
 * 这里是佩奇的右手
**/
.hand.right{
background-color: rgb(253,182,224);
transform: rotate(208deg);
}
.hand.right::before{
background-color: rgb(253,182,224);
transform: rotate(-52deg);
top:8px;left:4px;
}
.hand.right::after{
background-color: rgb(253,182,224);
transform: rotate(52deg);
top:-8px;left:6px;
}
/**
 * 接下来画佩奇的小jio jio~
**/
.foot{
background-color: rgb(252,184,225);}
.foot.left{left:150px;}
.foot.right{left:190px}
.foot:after{
background-color: #000;transform: rotate(-15deg);
}
.shadow{
background-color: rgb(166, 168, 170);
border-radius: 50%;
}
/**
 * 最后，这个社会人送给你~
 * **/`
    writeCode('',code)
  
  }.call()