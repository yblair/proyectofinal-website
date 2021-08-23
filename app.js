const express = require ('express');
const app = express();
const path = require('path');
const data = require('./utils/data')
const title = 'Serafina'
const port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  (req, res)=>{
    data.getAllProductos((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('index', {
            title,
            JSONBody
        });

    })
  
})



app.get('/registro', (req, res)=>{
    res.render('pages/registro',{
        title: `${title} | Registro`,
        
    })
})

app.get('/contacto', (req, res)=>{
    res.render('pages/contacto', {
        title:`${title} | Contacto`,
        
    })
})






app.get('/productos',  (req, res)=>{
    data.getAllProductos((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('pages/productos', {
            title,
            JSONBody
        });

    })
  
})






app.listen(port, ()=>{
    console.log('Funcionando en el puerto 3000')
})



