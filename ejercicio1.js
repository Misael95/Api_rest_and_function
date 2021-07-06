let input = [
    'La caída de los gigantes',
    'El apostador',
    'El apostador',
    'El psicoanalista',
    'El psicoanalista',
    'Viaje al fin de la noche',
    'La caída de los gigantes',
    'Puente a la realidad',
    'La caída de los gigantes',
    'El psicoanalista',
]


let sortLibros = (input) => {
    let result = []
    let res = {}
    let object_def = { name: '', count: 1}
    input.forEach(function(registro) {
        res[registro] = res[registro] ? (res[registro] + 1) : 1;
    });
    result = Object.entries(res).map((entri)=> {
        return {name: entri[0], count: entri[1]}
    })
    console.log(result);
      

    return result
};