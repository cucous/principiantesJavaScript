function nombreResolucion(a, b) {


    if (a >= 1280 && b >= 720 && a <= 1920 && b <= 1080 || a == 1280 && b == 720) {
        return "HD";

    } else if (a >= 1920 && b >= 1080 && a <= 2560 && b <= 1440 || a == 1920 && b == 1080) {
        return "Full HD";
    } else if (a >= 2560 && b >= 1440 && a <= 3840 && b <= 2160 || a == 2560 && b == 1440) {
        return "WQHD";
    } else if (a >= 3840 && b >= 2160 && a <= 7680 && b <= 4320 || a == 3840 && b == 2160) {
        return "4K";
    } else if (a >= 7680 && b >= 4320 && a <= 15360 && b <= 8640 || a == 7680 && b == 4320) {
        return "8K";
    } else {
        return "Otra resolución";
    }

    /*
        switch (true) {
    
            case (a == 1280 && b == 720):
                console.log("HD");
                break;
            case (a == 1920 && b == 1080):
                console.log("Full HD");
                break;
            case (a == 2560 && b == 1440):
                console.log("WQHD");
                break;
            case (a == 3840 && b == 2160):
                console.log("4K");
                break;
            case (a == 7680 && b == 4320):
                console.log("8K");
                break;
            default:
                console.log("Otra resolución");
                console.log("La resolución es: " + a + "x" + b);
                break;
        }
    
        */

}


// Pasar parametros
let nombre = nombreResolucion(1280, 1080);

console.log(nombre);




