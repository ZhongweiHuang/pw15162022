//alert("Alerta en archivo externo javascript")
function funcionAlerta(){
    alert("Di clic");
}


function quitarSITEC(){
    /*let pregunta = confirm("Seguro de quitar SITEC");
    if(pregunta == true) //if(!pregunta==false)
    {
        alert("SITEC Borrado .... :(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Shiiiaaale";
    }*/

   
    if(confirm("Seguro de quitar SITEC")) //if(!pregunta==false)
    {
        alert("SITEC Borrado .... :(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Shiiiaaale";
    }
}

async function traePersona(){
    const respuesta =await fetch("https://randomuser.me/api/");
    //console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos.result(0).name.last+" "+datos.results[0].name.first);

}