// let docH =     $(document).height();      // 整份文件高度
// let winH =   $(window).height();        // 視窗高度
// let winW =   $(window).width();         // 視窗寬度
// let scrTop = $(window).scrollTop();     // 被卷出視窗的高度
// let objH =   $('section').outerHeight();// 元素本身的高度
// let objTop = $('section').offset().top; // 元素'頂端'離文件頂部距離
// let objBtop = objTop + objH;            // 元素'底端'離文件頂部距離



// click 事件
$(function click(){
    $('.js-click').click(function(){
        $(this).toggleClass('on');
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
        $('.class-series>li').not(this).find('.series-name').removeClass('on');

        // 更換商品列表(圖片)
        $('.list-series').removeClass('open');
        let list = $(this).attr('data-switch');
        $(list).addClass('open');
    });

    $('.series-name-lg').click(function(){
        // 麵包屑換字
        $('#at').text('');
        $(this).find('span').clone().appendTo('#at');

        // 更換商品列表(圖片)
        $('.list-series').removeClass('open');
        let list = $(this).attr('data-switch');
        $(list).addClass('open');
    });
});



// 捲動螢幕事件
$(function scroll(){
    $(window).on('scroll', function (){
        // header 捲動出現影子
        if( $(window).scrollTop() > 0){
            $('header').addClass('js-hd-shadow');
        }
        else{
            $('header').removeClass('js-hd-shadow');
        }
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