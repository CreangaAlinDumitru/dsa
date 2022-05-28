
let elev =prompt(" Nota elev ");

elev =+elev;//convertesc din string in number

let text = "Nota elevului este "+elev +" prin urmare este ";



    if (elev >=5&&elev<=10){
        text+=" promovat "
    }else if(elev>=1&&elev<5){
        text+=" corigent ";
        
    }else{

        text="Nota  este invalida ";
    }


alert(text);