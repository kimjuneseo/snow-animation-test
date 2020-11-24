window.onload = function(){
    setInterval(function(){
        // 속설 설정 부분
       let snow = document.createElement('div'); //div snow 생성
        snow.classList.add('snow'); //snow의 클래스 목록에 snow 넣어줌
       let size = Math.round(Math.random()*10+10);  //5에서 35사이의 난수를 만들고 올림하여 정수로 만듦.
        snow.style.width = size+'px'; //snow의 width와 height를 정해줌
        snow.style.height = size+'px';
        snow.style.left = Math.random()*(window.innerWidth-size) + 'px'; //x좌표 랜덤하게 지정
        document.body.appendChild(snow); //설정이 끝난 snow를 body에 추가

        //낙하
       let drop = Math.round(Math.random()*5+10)*1000; //10000~15000 범위의 1000단의로 정수 생성
        snow.animate([{ //추가된 snow에 아래로 내려가는 애니메이션 생성
            top: '100%' //top값을 100%로 줌으로서 맨 아래까지 내겨가게 만듦
        }],{
            duration:drop,  //에니메이션의 지속지간을 설정
            easing: 'ease-out' //애이메이션을 부드럽게 하는 효과 , ease out은 갈수록 느려짐
        })
        setTimeout(function(){ //애니매이션이 끝나는 시간까지 기다리게 함
            snow.remove();  //애니메이션이 끝날시 스스로를 삭제시킴. div갯수가 무한히 늘어나는걸 막기 위함
        },drop);
    },60);
}