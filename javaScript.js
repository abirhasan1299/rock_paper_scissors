    function get_random (list) {
     return list[Math.floor((Math.random()*list.length))];
    }
    alert("Ready to Start Game ?");
    
    RPC = [1,2,3];

    UserScore = 0;
    PcScore = 0;

    // Rock ==1,Paper==2,Scissors==3

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const sis = document.querySelector("#sis");
    
    rock.onclick = function (params) {

        document.getElementById("user").innerHTML = "Rock";
        var random = get_random(RPC);

        if (random == 1) {
            document.getElementById("pc").innerHTML = "Rock";
        } else if (random == 2){
            document.getElementById("pc").innerHTML = "Paper";
        } else if (random == 3) {
            document.getElementById("pc").innerHTML = "Scissors";
        }

        if(rock.value==random){
            document.getElementById("result").innerHTML ="You Win";
        }else if(random==2){
            document.getElementById("result").innerHTML = "Pc Win";
            PcScore++;
            document.getElementById("pcscore").innerHTML = PcScore;
        } else if (random == 3) {
            document.getElementById("result").innerHTML = "You Win";
            UserScore++;
            document.getElementById("userscore").innerHTML = UserScore;
        }

    }
    paper.onclick = function (params) {

        document.getElementById("user").innerHTML = "Paper";
        var random = get_random(RPC);

        if (random == 1) {
            document.getElementById("pc").innerHTML = "Rock";
        } else if (random == 2) {
            document.getElementById("pc").innerHTML = "Paper";
        } else if (random == 3) {
            document.getElementById("pc").innerHTML = "Scissors";
        }
        
        if (paper.value == random) {
            document.getElementById("result").innerHTML = "Tie";
        } else if (random == 1) {
            document.getElementById("result").innerHTML = "You Win";
            UserScore++;
            document.getElementById("userscore").innerHTML = UserScore;
        } else if (random == 3) {
            document.getElementById("result").innerHTML = "Pc Win";
            PcScore++;
            document.getElementById("pcscore").innerHTML = PcScore;
        }
    }
    sis.onclick = function (params) {

        document.getElementById("user").innerHTML = "Scissors";
        var random = get_random(RPC);

        if (random == 1) {
            document.getElementById("pc").innerHTML = "Rock";
        } else if (random == 2) {
            document.getElementById("pc").innerHTML = "Paper";
        } else if (random == 3) {
            document.getElementById("pc").innerHTML = "Scissors";
        }

        if (sis.value == random) {
            document.getElementById("result").innerHTML = "Tie";
        } else if (random == 1) {
            document.getElementById("result").innerHTML = "Pc Win";
            PcScore++;
            document.getElementById("pcscore").innerHTML = PcScore;
        } else if (random == 2) {
            document.getElementById("result").innerHTML = "You Win";
            UserScore++;
            document.getElementById("userscore").innerHTML = UserScore;
        }
        
    }
    function timeout(){
        if(UserScore>PcScore){
            alert("You Win");
        }else{
            alert("You Looser !");
        }
        location.reload();
    }
    setTimeout(timeout, 15000);
    
