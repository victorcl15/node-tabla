const fs = require("fs")

const crearArchivo = async(base = 5, listar=false, hasta=10) => {
    

        
            try{

                if(listar){
                console.log("========================")
                console.log(`Tabla del ${base}:`)
                console.log("========================")

                }
                   

   

        let salida = ""
        for(i=1; i<=hasta; i++ ){
            salida += `${base} x ${i} = ${base*i}\n`
        }

            if(listar){
                console.log(salida)
            }
               
                fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
                return (`tabla-${base}.txt`)
                
        
            }catch(err) {
             throw err
            }
            
        }



//     console.log("========================")
//     console.log(`Tabla del ${base}:`)
//     console.log("========================")

//     const promise = new Promise((resolve, reject) => {

//         let salida = ""
//         for(i=1; i<11; i++ ){
//             salida += `${base} x ${i} = ${base*i}\n`
//         }

//         if(salida){
//             try{
//                 console.log(salida)
//                 fs.writeFileSync(`tabla-${base}.txt`, salida)
//                 resolve(`tabla-${base}.txt`)
                
        
//             }catch(err) {
//                 if(err) throw err
//             }
            
//         }else {
//             reject("Ocurrio un error con la tabla.")
//         }
//     })

// return promise
    

    //console.log(salida)

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if(err) throw err

    //     console.log(`tabla-${base}.txt creado`)
    // })



module.exports = {
    crearArchivo
}