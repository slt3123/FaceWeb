function sur()
    {
    document.getElementById('bilde').src="./img/sur.jpg";    
    }

function trist()
    {
    document.getElementById('bilde').src="./img/trist.jpg";    
    }

function glad()
{
    document.getElementById('bilde').src="./img/glad.jpg";    
}

function redd()
{
    document.getElementById('bilde').src="./img/redd.jpg";    
}

// Lager funkjon for random bilde
function random() {
    // Får et helt tall uten komma fra 1-6
    var num =  Math.floor(Math.random() * 6) + 1;
    // Kjører funkjonen som endrer bilde etter tallet som blir laget
    if (num == 1){
        glad()
    } else if (num == 2){
        redd()
    }else if (num == 3){
        sint()
    }else if (num == 4){
        spro()
    }else if (num == 5){
        sur()
    }else if (num == 6){
        trist()
    }
}
