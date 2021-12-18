$(document).ready(function(){

    //검색버튼창 노출
    $('.search_icon').click(function(){
        $('.searchWbox').css('display','flex');
        $('body').addClass('ofhy');
    });

    //검색창 닫기버튼 이벤트
    $('#seachWrap .close').click(function(){
        $('.searchWbox').css('display','none');
        $('body').removeClass('ofhy');
    });

    //검색창 내의 검색버튼
    $('.b_search_icon').click(function(){
        if( $("[name='srcinput']").val() == '' ){
            //검색인풋의 검색어가 없을 때
            alert('검색어를 입력하고 누르세요.');
            return false;
        }else{
            alert('검색이동');
        }
    });
    
    const naviTag = $('#gnb').html(); //#gnb안의 자식컨텐츠들을 저장해라
    $('#allMenu').append(`<ul id='mgnb'>${naviTag}</ul>`);
    //햄버거버튼 아래에 넣어라

    //사이트맵의 상단위치 고정하기
    let hdHeight = $('#hd').height();
        //$('#hd').attr('data-height',hdHeight); //attr data 하면 어느속성이든 넣을 수 있음
    $('#mgnb').css('top',hdHeight);
    
        //스크롤이벤트        
        $(window).scroll(function(){

            // $('#gnb').removeClass('wide'); //gnb초기화

            if( $(window).scrollTop() > 0 ){
                $('body').addClass('scroll');
                $('#hd h1 img').attr('src', 'img/logo2.svg');
            }else{
                $('body').removeClass('scroll');
                $('#hd h1 img').attr('src', 'img/logo.svg');
            }
            hdHeight = $('#hd').height(); //스크롤 할때마다 div의 height값을 책정
            // 같지않아 $('#hd').height() != $('#hd').css('height');
            // 이제같다 $('#hd').height() == parseInt($('#hd').css('height'));
            $('#mgnb').css('top',hdHeight); //gnb의 시작위치에 적용
            // $('#hd').attr('data-height',hdHeight);
        });

        //햄버거버튼
        $('#allMenu').click(function(){
            $(this).toggleClass('show');
            $("#mgnb").toggleClass('wide');
        });
})