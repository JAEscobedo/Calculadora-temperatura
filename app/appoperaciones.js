function operacionFcn() {
    temp = document.getElementById("numberOne").value;
    opcion = document.getElementById("ListBox1").value;

    temp = parseFloat(temp);

    if(opcion == 1){
        alert('Elige una opción')
    }

    if(opcion == 2) {
        result = temp + 273.15;
        var conDecimal = result.toFixed(2);   
        document.getElementById("resultado").innerHTML = "El resultado es: " + conDecimal;
    }

    if(opcion == 3) {
        result = temp - 273.15;  
        var conDecimal = result.toFixed(2); 
        document.getElementById("resultado").innerHTML = "El resultado es: " + conDecimal;
    }

    if(opcion == 4) {
        result = (temp*1.8)+32;
        var conDecimal = result.toFixed(2);   
        document.getElementById("resultado").innerHTML = "El resultado es: " + conDecimal;
    }

    if(opcion == 5) {
        result = (temp-32)/1.8;  
        var conDecimal = result.toFixed(2); 
        document.getElementById("resultado").innerHTML = "El resultado es: " + conDecimal;
    }

    if(opcion == 6) {
        result = 1.8*(temp - 273.15) + 32;   
        var conDecimal = result.toFixed(2);
        document.getElementById("resultado").innerHTML = "El resultado es: " + conDecimal;
    }

    if(opcion == 7) {
        result = 5/9*(temp - 32) + 273.15;   
        var conDecimal = result.toFixed(2);
        document.getElementById("resultado").innerHTML = "El resultado es: " + conDecimal;
    }
} 

