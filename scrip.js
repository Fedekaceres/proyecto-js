function log(){
    let verificacion = false;
    let nickSave = "nombre";
    let pSave = "contraseña";
    while(verificacion==false){
        let nick = prompt("Ingrese su nickname");
        let password = prompt("Ingrese su contraseña")
        if(nick===nickSave && pSave===password){
            verificacion= true;
            alert("Bienvenido/a de vuelta "+nickSave);
        }else{
            alert("Su nickname o contraseña son incorrectos");
        }
    }
}
log();