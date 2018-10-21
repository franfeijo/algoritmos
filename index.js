 // 1, 2, 3, 5, 8, 13, 21, ..., n
function fibonnaci(tamanhoDaSequencia) {
    let lista = [1, 2]

    for(let i = 0; lista.length < tamanhoDaSequencia; i++) {
        let penultimo = lista[lista.length - 2]
        let ultimo = lista[lista.length - 1]

        lista.push(penultimo + ultimo)
    }

    return lista
}

let listaFibonnaci5Elementos = fibonnaci(5)