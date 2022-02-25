/*
 * Para Input que deseja aplicar utilize data-js="inputcpfcnpj"
 * Exemplo:
    <label class="label-form">
       Digite seu CPF ou CNPJ
    </label>
    <input type="text" class="input-form" id="cpfCnpj" placeholder="CPF ou CNPJ" required data-js="inputcpfcnpj" maxlength="18" />
 */

//MASCARA CPF CNPJ
const $inputcpfcnpj = document.querySelector('[data-js="inputcpfcnpj"]')
$inputcpfcnpj.addEventListener('input', handleInput, false)

function handleInput (e) {
    var mask = $inputcpfcnpj.value.length;

    if(mask <= 13){ 
        e.target.value = cpfMask(e.target.value)
    } else if(mask > 14){
        e.target.value = cnpjMask(e.target.value)
    }
}

 function cpfMask (cpf) {
   return cpf.replace(/\D/g, '')
     .replace(/(\d{3})(\d)/, "$1.$2")
     .replace(/(\d{3})(\d)/, "$1.$2")
     .replace(/(\d{3})(\d{1,2})/, "$1-$2")
     .replace(/(-\d{2})\d+?$/, "$1")
 }

 function cnpjMask (cnpj){
     return cnpj.replace(/\D/g, '')                           
     .replace(/^(\d{2})(\d)/,"$1.$2")             
     .replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
     .replace(/\.(\d{3})(\d)/,".$1/$2")           
     .replace(/(\d{4})(\d)/,"$1-$2")              
 }
