let express = require('express')
let mysql = require('mysql')
let puerto = 3000
let app = express()


app.listen(puerto,function(){
    console.log("Servidor en linea ")
})

//Base de datos
//Parametros de conexion
let conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pw'
})
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('Conectado a la Base de datos')
    }
})

//Rutas
//Ruta de inicio - raiz
app.get('/',function(req,res){
    res.send('Ruta de inicio');

})

//Ruta a todos articulos
app.get('/api/articulos',function(req,res){
    conexion.query("Select * From articulos",function(error,filas){
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Ruta a un articulo
app.get('/api/articulos/:id',function(req,res){
    conexion.query("Select * From articulos Where id =?",[req.params.id],function(error,fila){
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})

//Ruta para agregar un articulo
app.post('/api/articulos',function(req,res){
    let data ={descripcion:req.body.descripcion,
              precio:req.body.precio,
              cantidad:req.body.cantidad}
    let sql="INSERT INTO articulos SET ?"
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })

})