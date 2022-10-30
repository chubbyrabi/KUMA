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



//  header 捲動出現影子
$(function scroll(){
    $(window).on('scroll', function (){
        if( $(window).scrollTop() > 0){
            $('header').addClass('js-header-shadow');
        }
        else{
            $('header').removeClass('js-header-shadow');
        }
    });
});



//  選單 click 事件
$(function aside(){
    $('.class-series>li').click(function(){
        // 麵包屑換字
        $('#at').text('');
        $(this).find('h3').clone().appendTo('#at');

        // 選單折疊
        $('.class-series>li').not(this).find('.series-list').hide();
        $(this).find('.series-list').toggle(300);

        // 樣式改變
        $('.class-series>li').not(this).find('.js-click').removeClass('on');
        $(this).find('.js-click').toggleClass('on');

        // 更換商品列表(圖片)
        $('.list-series').removeClass('on');
        let list = $(this).attr('data-switch');
        $(list).addClass('on');
    });
});



$(function(){
    $('.class-series>li').on('click',function(){
        if($(this).attr('data-clickState') == 1) {
            $(this).attr('data-clickState', 0);
            $('.class-series>li').not(this).attr('data-clickState') == 1;

            // $(this).find('.plus-minus').addClass('js-click');
            // $('.class-series>li').not(this).find('.plus-minus').remove('js-click');
        }
        else {
            $(this).attr('data-clickState', 1);
        }
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



// 橡皮擦 4.0 版
// $(function eraser(){
//     // click 發出叫聲
//     let timer = null;
//     $('.eraser').click(function(){
//         let winW = $(window).width();
//         clearTimeout(timer);

//         if( winW >= 768 ){
//             $('.js-yell').clone().appendTo(this);
//             let theText = $(this).attr('data-text');
//             $(this).find('.js-yell').show().text(theText);
//             $('.eraser').not(this).find('.js-yell').remove();

//             timer = setTimeout(function(){
//                 $('.eraser .js-yell').remove();
//             }, 1500);
//         }
//     });

//     // hover 時 shock 效果
//     $('.eraser').hover(function(){
//         $(this).addClass('js-shock').find('img').stop(true).animate({
//             bottom: '20px',
//         },100);
//         $('.eraser').not(this).removeClass('js-shock').find('img').animate({
//             bottom: '0px',
//         },100);

//     },function(){
//         $(this).removeClass('js-shock').find('img').animate({
//             bottom: '0px',
//         },100);
//     });
// });



// 捲動螢幕事件
$(function scroll(){
    $(window).on('scroll', function (){
        let scrTop = $(window).scrollTop();
        let winH = $(window).height();
        let winW = $(window).width();

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

        // 標籤顯示區塊名稱
		$('#Show, #Intro, #Activity').each(function(){
			// let objTop = $(this).offset().top;
			let objTop = getOffsetTop(this);
			if (scrTop > objTop - winH + winH / 2){
                let theText = $(this).attr('id');
                $('#block-tag').show().text(theText);
                // console.log(theText)
			}
		});
    });
});



//  電梯
$(function elevator(){
    $('.js-elevator').on('click', function(){
        let objTop = $(this).attr('data-position');
        $('body,html').animate({
            scrollTop: $(objTop).position().top,
        },1000, 'easeInOutQuad');
        return false; //擋住連結
      });
});



// 捲動螢幕彈出 1.0 版
// $(function(){
//     $(window).on('scroll', function (){
//         let scrTop = $(window).scrollTop();
//         let winH = $(window).height();
//         let objTop = $('.activity-title').offset().top;

//         if (scrTop > objTop - winH + winH / 4){
//             $('.activity-title').addClass('in');
//         }else{
//             $('.activity-title').removeClass('in');
//         }
//     });
// });



// 標籤顯示區塊名稱 1.0 版
// $(function scroll(){
// 	$(window).on('scroll', function (){
//         let scrTop = $(window).scrollTop();
//         let winH = $(window).height();
// 		$('.show, .intro, .activity').each(function(){
// 			let objTop = $(this).offset().top;

// 			if (scrTop > objTop - winH + winH / 4){
//                 let theText = $(this).attr('class');
//                 $('.block-tag').show().text(theText);
//                 // console.log(theText)
// 			}
// 		});
// 	});
// });



// 標籤顯示區塊名稱 > els.forEach 待研究
// $(function scroll(){
// 	$(window).on('scroll', function (){
//         const els = document.querySelectorAll('.js-scroll');
//         els.forEach((el) => {
//             const elTop = el.getBoundingClientRect().top;
//             if (elTop < window.innerHeight && elTop > 0) {
//                 // VIEWPORT內
//                 let theText = $(this).attr('class');
//                 $('.block-tag').show().text(theText);
//                 console.log(theText);
//             }
//         })
// 	});
// });



// 標籤顯示區塊名稱 1.0 > 廢棄
// $(function(){
//     $(window).on('scroll', function(){
//         let docH =     $(document).height();      // 整份文件高度
//         let winH =     $(window).height();        // 視窗高度
//         let scrTop = $(window).scrollTop();     // 被卷出視窗的高度
//         let objH =   $('section').outerHeight();// 元素本身的高度
//         let objTop = $('section').offset().top; // 元素'頂端'離文件頂部距離
//         let objBtop = objTop + objH;            // 元素'底端'離文件頂部距離

//         let min = objTop - winH + winH / 5;
//         let max = objBtop - winH / 2;

//         if (scrTop > min && scrTop < max ){
//             let theText = $('section').attr('class');
//             $('.block-tag').show().text(theText);

//             console.log(theText);
//         }else{
//             $('.block-tag').text('') //測試
//         }
//     });
// });



// 標籤顯示區塊名稱 1.0 > 廢棄
// $(function(){
//     $(window).on('scroll', function(){
//         $('.show, .intro, ,activity').each(function(){

//             let docH =     $(document).height();  // 整份文件高度
//             let winH =     $(window).height();    // 視窗高度
//             let scrTop = $(window).scrollTop(); // 被卷出視窗的高度
//             let objH =   $(this).outerHeight(); // 元素本身的高度
//             let objTop = $(this).offset().top;  // 元素'頂端'離文件頂部距離
//             // let objBtop = objTop + objH;     // 元素'底端'離文件頂部距離

//             let min = objTop - winH + winH / 5;
//             let max = objTop + objH - winH / 5;
//             // let max = objBtop - winH / 5;

//             if (scrTop > min && scrTop < max){
//                 let theText = $(this).attr('class');
//                 $('.block-tag').show().text(theText);
//             }
//         });
//     });
// });



// 橡皮擦 3.0 版 (只要寫1個div)
// $(function(){
//     // 點擊發出叫聲
//     $('.eraser').click(function(){
//         let winW = $(window).width();
//         if( winW >= 768 ){
//             // 複製 div 到 li 裡
//             $('.js-yell').clone().appendTo(this);
//             let theText = $(this).attr('data-text');
//             $(this).find('.js-yell').show().text(theText);
//             $('.eraser').not(this).find('.js-yell').remove();
//             // 1.5 秒後叫聲消失
//             setTimeout(function(){
//                 $('.eraser>.js-yell').remove();
//             }, 1500);
//         }
//     });
//     // hover 跳起來
//     $('.eraser').hover(function(){
//         $(this).addClass('mouseOver eraserShock').stop(true).animate({
//              bottom: '20px'
//         },100);
//         $('.eraser').not(this).removeClass('mouseOver eraserShock').animate({
//             bottom: '0px',
//         },100);
//     },function(){
//         $(this).removeClass('mouseOver eraserShock').animate({
//             bottom: '0px',
//         },100);
//     });
// });



// 橡皮擦 2.0 版 (要寫15個div事先隱藏)
// $(function(){
//     // 點擊發出叫聲
//     $('.eraser').click(function(){
//         let theText = $(this).attr('data-text');
//         $(this).find('.js-yell').show().text(theText);
//         $('.eraser').not(this).find('.js-yell').hide();
//         // 3 秒後叫聲消失
//         setTimeout(function(){
//             $(this).find('.js-yell').hide();
//         }, 1500);
//     });
//     // hover 跳起來
//     $('.eraser').hover(function(){
//         $(this).addClass('eraserShock').stop(true).animate({
//              bottom: '20px'
//         },100);
//         $('.eraser').not(this).removeClass('eraserShock').animate({
//             bottom: '0px',
//         },100);
//     });
// });



// 橡皮擦 1.0 版 (很長...)
// $(function(){
//     // over 時跳起來
//     $('.eraser').on('mouseover',function(){
//         $(this).addClass('mouseOver eraserShock').stop(true).animate({
//              bottom: '20px'},100);
//         $('.eraser').not(this).animate({
//             bottom: '0px',
//         },100);
//     });

//     // 點下去發出叫聲
//     $('.eraser').on('mousedown',function(){
//         let theText = $(this).attr('data-text');
//         $(this).addClass('eraserClick');
//         $('.eraserClick>div').show().text(theText);
//     });

//     // out 時落地，叫聲消失
//     $('.eraser').on('mouseup mouseout',function(){
//         $(this).removeClass('eraserClick eraserShock').animate({
//             bottom: '0px'},100);
//         $('.js-yell').hide(); //想要延遲'字'消失的時間
//     });
// });



// hover 抖動
// $(function(){
//     if ($('.contact_area').length) {
//         $('.contact_area').mouseenter(function () {
//             $('.top_human, .btm_human').addClass('hvr');
//         }).mouseleave(function () {
//             $('.top_human, .btm_human').removeClass('hvr');
//         });
//     }
// });