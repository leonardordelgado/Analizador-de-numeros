let bt = document.querySelector('button#adicionar')
bt.addEventListener('click', add)//Adiciona o evento e faz chamada da função add

let BtFin = document.querySelector('button#finalizar')
BtFin.addEventListener('click', finalizar)//Adiciona o evento e faz chamada da função finalizar

let btApagar = document.querySelector('button#apagar')
btApagar.addEventListener('click', apagar)//Adiciona o evento e faz chamada da função apagar

let num = document.querySelector('input#numero')
let select = document.querySelector('select#list')
let res = document.querySelector('div#res')
let valores = []
let remov = ""
let tot = ""
function apagar(){//apaga os elementos do select e do vetor
    let id =  document.getElementById('list').selectedIndex;
    let id2 = document.getElementById('list').options;
    
    console.log(num.value)
     if(id2[id]  == undefined){
        alert("Selecione um valor")
     }else{
        remov = `${id2[id].id}`
        tot = Number(remov)
        isRemove(tot)//chama a função que remove os elemtentos do select
        isRemoveValores(tot, valores)//chama a função que remove os elemtentos do vetor
        
        
        
    }
}
 function isRemove(t){//remove os elemtentos do select
    res.innerHTML =''
    let list = document.getElementById('list')
   list.removeChild(document.getElementById(`${t}`))
 }

 function isRemoveValores(t,v){//remove os elemtentos do vetor
    let remove = v.indexOf(t)
    v.splice(remove, 1)
    console.log(v)
    
 }


function add(){//adiciona os elemtos ao vetor e ao select
    let n = +(num.value)
    if(isNun(n) && !isList(n, valores)){
        addList(n, valores)//faz a chamada da função que ira adicionar os valores 
    }else{
        alert("erro")
    }
    num.value = ""
    num.focus()
    
}

function isNun(n){//retorna verdadeiro ou falso para a verificação do add
    if(n >= 1 && n<=100 ){
        return true
    }else{
        return false
    }
}

function isList(n, l){// retorna ver ou fals para a verificação do add
    if(l.indexOf(n)!= -1){
        return true
    }else{
        return false
    }
}

 function addList(n, l){//adiciona os elementos ao select em forma de option
    l.push(Number(n))
    let option = document.createElement('option')
    option.text = `o numero ${n} foi adicionado`
    option.setAttribute('id', `${n}`)
    select.appendChild(option)
    res.innerHTML =''
 }

 function finalizar(){//realiza os calculos para mostrar ao usuario

    if(valores.length == 0 ){
       alert("Adicione valores para analizarmos")
    }else{
        let soma = 0
        let media = 0
        let maior  = Math.max.apply(null, valores)
        let menor = Math.min.apply(null, valores)
        res.innerHTML = ""
        let info = document.createElement('p')
        if(valores.length == 1){
            info.innerHTML += `Ao todo temos ${valores.length} numero cadastrados <br>` 
        }else{
            info.innerHTML += `Ao todo temos ${valores.length} numeros cadastrados <br>` 
        }
        for(let pos in valores){
            soma += valores[pos]
        }
        media = soma / valores.length
        info.innerHTML +=`O maior numero informado e ${maior} <br>`
        info.innerHTML +=`O menor numero informado e ${menor} <br>`
        info.innerHTML +=`A soma dos valores e  ${soma} <br>`
        info.innerHTML +=`A media dos valores e  ${media} <br>`
        res.appendChild(info)
        
    }
 }
    