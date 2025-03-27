$(document).ready(()=> {

    //왼쪽 메뉴 햄버거클릭
    $('header button').eq(0).click(()=> {
        $("#black").fadeIn();
        $("#leftMenu").stop().animate({left:0});
    });
    //검은바탕 클릭 시, 메뉴가 왼쪽으로 들어감
    $("#black").click(()=>{
        $("#leftMenu").stop().animate({left:"-70%"});
        $("#black").fadeOut();
    });

}); //끝!!