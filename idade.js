function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('texto')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        alert('Verifique os dados e tente novamente')
    }else { 
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - fAno.value
        res.innerHTML = `Idade calculada ${idade} anos`
      
    }
}