function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let resul = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert("[ERRO] Faltam dados!")
    }else {
        res.innerHTML=`Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            for(let c = i; c <= f; c += p){
                resul.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for(let c = i; c <= f; c += p){
                resul.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }resul.innerHTML += `\u{1F3C1}`
}
            
    
    
    
    
    
    
    
    
    
    
    
      
            
       
 









