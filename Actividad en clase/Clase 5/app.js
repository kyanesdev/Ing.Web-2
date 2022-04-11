var codigo = document.getElementById("codigo");
var descripcion = document.getElementById("descripcion");
var precio = document.getElementById("precio");
var cantidad = document.getElementById("cantidad");
var IVA1 = document.getElementById("IVA1");
var IVA2 = document.getElementById("IVA2");
var IVA;

var Lista=[];


var subtotal;



function agregarProducto(){
    
    if(document.getElementById("IVA1").checked){
        IVA = IVA1;
    }else if(document.getElementById("IVA2").checked){
        IVA = IVA2;
    }
    
    var producto = [codigo,descripcion,precio,cantidad,IVA];
    


    if(producto[0].value == "" || producto[1].value == "" || producto[2].value == "" || producto[3].value == "" || producto[4].value == ""){
        alert("Por favor llene todos los campos");
    }

    

    let prod = {};

        prod.codigo = producto[0].value;
        prod.descripcion = producto[1].value;
        prod.precio = producto[2].value;
        prod.cantidad = producto[3].value;
        prod.IVA = producto[4].value;
        prod.subtotal = (prod.precio * prod.cantidad) * (prod.IVA);
        
    
    Lista.push(prod);
    
    var tabla = document.getElementById("nvTabla");

    let header = `<tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>IVA</th>
                        <th>Subtotal</th>
                       </tr>`
    
    var body = "";
    
    Lista.forEach(produ=>{
    var {codigo, descripcion , precio , cantidad , IVA , subtotal } = produ;

    

    body += `<tr>
                <td>${codigo}</td>
                <td>${descripcion}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>${IVA}</td>
                <td>${subtotal}</td>
                <td><input type="button" id="btnEditar" value="Editar" onclick="agregarProducto()">
                <input type="button" id="btnBorrar" value="Borrar" onclick="borrar()"></td>
                
            <tr>`
            
    })

    tabla.innerHTML = header + body;

    console.log(btnEditar.getAttribute("onclick"));
    console.log(btnBorrar.getAttribute("onclick"));
}


const borrar = ()=>{
    Lista.forEach(produ=>{
        if(produ.codigo){
            Lista.splice(Lista.indexOf(produ),1);
        }
    })
}

const editarProducto = ()=>{
    Lista.forEach(produ=>{
        if(produ.codigo == codigo.value){
            produ.codigo = producto[0].value;
            produ.descripcion = producto[1].value;
            produ.precio = producto[2].value;
            produ.cantidad = producto[3].value;
            produ.IVA = producto[4].value;
            produ.subtotal = (produ.precio * produ.cantidad) * (produ.IVA);
        }
    })
}