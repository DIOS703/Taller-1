var boton = document.getElementById("boton");
var formulario = document.querySelector('.frm1');
var casNombre = document.querySelector('.nombre');
var casComentario = document.querySelector('.comentario');
var contador = 0;
var comentarios = document.querySelector('.comentariosss');
boton.addEventListener("click",function(){
    var valor = true;
    while( Boolean(valor)){
        if(contador < 4 ){
            const currentdate = new Date(); 
            const fecha =currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();

            const li = document.createElement("div");
            li.className = 'alert alert-info ';

            const nombre1 = document.createElement("p");
            const comentario1 = document.createElement("p");
            nombre1.className = 'nombre1';
            comentario1.className = 'comentario1';

            nombre1.innerHTML = "<b>" + formulario.elements[0].value +"<b>" + "    " + "<sup>"+ fecha +"</sup>";
            comentario1.textContent = formulario.elements[1].value;
    
            if(nombre1.textContent.replace(/\s+/g, '').length < 3){
                alert("Como minimo deben haber 3 caracteres en nombre");
                valor = false;
            }
            else{
                if((comentario1.textContent.replace(/\s+/g, '').length < 1) || (comentario1.textContent.replace(/\s+/g, '').length > 200)){
                    alert("Deben haber entre 1 y 200 caracteres en comentario");
                    valor = false;
                }
                else{
                    li.appendChild(nombre1)
                    li.appendChild(comentario1);
                    comentarios.appendChild(li);
                    contador++;
                    casNombre.value = "";
                    casComentario.value = "";
                    valor = false;
                }
            }
        }
        else{
            var primerElemento = comentarios.querySelector('.alert');
            primerElemento.remove();
            contador--;
        }
    }
})