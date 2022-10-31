// let docH =     $(document).height();      // 整份文件高度
// let winH =   $(window).height();        // 視窗高度
// let winW =   $(window).width();         // 視窗寬度
// let scrTop = $(window).scrollTop();     // 被卷出視窗的高度
// let objH =   $('section').outerHeight();// 元素本身的高度
// let objTop = $('section').offset().top; // 元素'頂端'離文件頂部距離
// let objBtop = objTop + objH;            // 元素'底端'離文件頂部距離



//  計算元素 top (有定位或旋轉時)
function getOffsetTop(element){
    // var offsetLeft = 0;
    var offsetTop  = 0;
    while(element){
        // offsetLeft += element.offsetLeft;
        offsetTop  += element.offsetTop;
        element = element.offsetParent;
    }
    // return [offsetLeft, offsetTop];
    return [offsetTop];
}



// click 事件
$(function click(){
    $('.js-click').click(function(){
        $(this).toggleClass('on');
    });
});



// 底線跟隨滑鼠
// function mousemove(event){
//     let line = document.getElementById('move-line');
//     let objW = document.getElementById('move-line-box').offsetWidth;
//     let objT = document.getElementById('move-line-box').offsetTop
//              + document.getElementById('move-line-box').offsetHeight / 2;
//     let lineLeft = (window.innerWidth - objW) / 2;
//     let lineRight = objW + lineLeft;
//     // 線段長 100px，容器有 padding:30px

//     if(event.pageX < lineLeft + 30 && event.pageY < objT){
//         line.style.left = 30 + 'px';
//     }
//     if(event.pageX > lineRight - 30 && event.pageY < objT){
//         line.style.left = objW - 130 + 'px';
//     }
//     if(event.pageX > lineLeft + 80 && event.pageX < lineRight - 80 && event.pageY < objT){
//         line.style.left = event.pageX - lineLeft -50 + 'px';
//     }
// }
// window.addEventListener('mousemove', mousemove);



// 捲動螢幕事件
$(function scroll(){
    $(window).on('scroll', function (){
        let scrTop = $(window).scrollTop();
        let winH = $(window).height();
        let winW = $(window).width();

        // header 捲動出現影子
        if( $(window).scrollTop() > 0){
            $('header').addClass('js-hd-shadow');
        }
        else{
            $('header').removeClass('js-hd-shadow');
        }

        // aside 選單出現
        if( scrTop > 400){
            $('aside').removeClass('out');
            $('aside').addClass('in');
        }
        else{
            $('aside').addClass('out');
        }

        // 物件出現的動畫
        $('.js-scroll').each(function(){
            // let objTop = getOffsetTop(this);
            // console.log(objTop)
            if( winW < 768 ){
                let objTop = getOffsetTop(this);
                if (scrTop > objTop - winH + winH / 8){
                    $(this).removeClass('out');
                    $(this).addClass('in');
                }
                else{
                    $(this).addClass('out');
                }
            }
            else if(winW >= 768){
                let objTop = getOffsetTop(this);
                if (scrTop > objTop - winH + winH / 5){
                    $(this).removeClass('out');
                    $(this).addClass('in');
                }
                else{
                    $(this).addClass('out');
                }
            }
        });
    });
});



// 電梯
$(function elevator(){
    $('.js-elevator').on('click', function(){
        let objTop = $(this).attr('data-position');
        $('body,html').animate({
            scrollTop: $(objTop).position().top,
        },1000, 'easeInOutQuad');
        return false; //擋住連結
      });
});