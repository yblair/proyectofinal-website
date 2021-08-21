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




app.get('/borcegos',  (req, res)=>{
    data.getAllProductos((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('pages/borcegos', {
            title,
            JSONBody
        });

    })
  
})

app.get('/zapatos',  (req, res)=>{
    data.getAllProductos((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('pages/zapatos', {
            title,
            JSONBody
        });

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

app.get('/botas',  (req, res)=>{
    data.getAllProductos((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('pages/botas', {
            title,
            JSONBody
        });

    })
  
})

app.get('/texanas',  (req, res)=>{
    data.getAllProductos((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('pages/texanas', {
            title,
            JSONBody
        });

    })
  
})

app.get('/zapatillas',  (req, res)=>{
    data.getAllProductos((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('pages/zapatillas', {
            title,
            JSONBody
        });

    })
  
})




app.listen(port, ()=>{
    console.log('Funcionando en el puerto 3000')
})



