$(function(){

            
    var setTime = 100;
    var setScore = 0;
    var hamTimer = "";
    var hamW = '';
    var myH = '';
    var setHam = 'wert';

    function timeR(){
        hamTimer = setInterval(function(){
            
            setTime--;
            
            $('.time').text(setTime);

            if(setTime <= 0){
                gameEnd();
            }

            if(setScore == 0){
                setHam = 'wert';
            }else if(setScore < 5){
                setHam = 'werta';
            }else if(setScore < 10){
                setHam = 'wertas';
            }else if(setScore < 15){
                setHam = 'wertresd';
            }else if(setScore < 20){
                setHam = 'wertresdf';
            }else if(setScore < 25){
                setHam = 'wertresdfg';
            }else if(setScore < 30){
                setHam = 'wertresdfgz';
            }else if(setScore < 35){
                setHam = 'wertresdfgzx';
            }else if(setScore < 40){
                setHam = 'wertresdfgzxc';
            }

            $('.ham_wrap .hj_burger .heart').removeClass('active');
            $('.ham_wrap .hj_burger .sad').removeClass('active');

        }, 1000);
    }
    
    function randomHam(){
        var hamQ = '';
        var hamG = setHam;
        myH = '';
        
        for(var i=0; i<6; i++){
            hamQ += hamG.charAt(Math.floor(Math.random()* hamG.length));
        }

        hamW = 'q' + hamQ + 'q';

        $('.my').text(hamW);
        hjBurger(hamW);               

    }
           
    function hjBurger(h){
        var hjH = h.split('');

        for(var i = 0; i < 8; i++){
            $('.hj_burger .hamburger').prepend("<div class="+hjH[i]+">"+"</div>");
        }
        
    }


    

    $('.btn_wrap button').on('click', function(){

        if($('.bottom_wrap .hamburger > div').length < 8){
            if($(this).hasClass('q')){
                myH = myH.concat('q');
                $('.bottom_wrap .hamburger').prepend('<div class="q"></div>');
            }else if($(this).hasClass('w')){
                myH = myH.concat('w');
                $('.bottom_wrap .hamburger').prepend('<div class="w"></div>');
            }else if($(this).hasClass('e')){
                myH = myH.concat('e');
                $('.bottom_wrap .hamburger').prepend('<div class="e"></div>');
            }else if($(this).hasClass('r')){
                myH = myH.concat('r');
                $('.bottom_wrap .hamburger').prepend('<div class="r"></div>');
            }else if($(this).hasClass('t')){
                myH = myH.concat('t');
                $('.bottom_wrap .hamburger').prepend('<div class="t"></div>');
            }else if($(this).hasClass('a')){
                myH = myH.concat('a');
                $('.bottom_wrap .hamburger').prepend('<div class="a"></div>');
            }else if($(this).hasClass('s')){
                myH = myH.concat('s');
                $('.bottom_wrap .hamburger').prepend('<div class="s"></div>');
            }else if($(this).hasClass('d')){
                myH = myH.concat('d');
                $('.bottom_wrap .hamburger').prepend('<div class="d"></div>');
            }else if($(this).hasClass('f')){
                myH = myH.concat('f');
                $('.bottom_wrap .hamburger').prepend('<div class="f"></div>');
            }else if($(this).hasClass('g')){
                myH = myH.concat('g');
                $('.bottom_wrap .hamburger').prepend('<div class="g"></div>');
            }else if($(this).hasClass('z')){
                myH = myH.concat('z');
                $('.bottom_wrap .hamburger').prepend('<div class="z"></div>');
            }else if($(this).hasClass('x')){
                myH = myH.concat('x');
                $('.bottom_wrap .hamburger').prepend('<div class="x"></div>');
            }else if($(this).hasClass('c')){
                myH = myH.concat('c');
                $('.bottom_wrap .hamburger').prepend('<div class="c"></div>');
            }
        }else{
            alert('버거가 터지려고 합니다.');
        }
        
        



    });

    $('.ok').on('click', function(){

        $('.hamburger').html('');
        

        if(hamW == myH){
            hamO();
            randomHam();
        }else{
            hamX();
            randomHam();
        }
    })
   

    function hamO(){
        setTime = setTime + 5;
        setScore = setScore + 1;
        
        $('.ham_wrap .hj_burger .heart').addClass('active');
        $('.score').text(setScore);
    }

    function hamX(){
        $('.ham_wrap .hj_burger .sad').addClass('active');
        setTime = setTime - 3;            
    }

    function gameEnd(){
        clearInterval(hamTimer);
        setScore = 0;
        $('.end .last').text($('.score').text());
        $('.end').css('display', 'flex');
    }

    $('.btn_start').on('click', function(){
        $('.start').hide();
        randomHam();
        timeR();
    });
    
})