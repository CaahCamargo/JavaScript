/*
 * Para Input que deseja aplicar utilize data-js="inputcep"
 * Exemplo:
	<label class="label-form">CEP</label>
  <input type="text" class="input-form" id="cep" placeholder="Digite seu CEP" required data-js="inputcep" maxlength="15"/>
*/

// MASCARA DE CEP
const $inputcep = document.querySelector('[data-js="inputcep"]')
$inputcep.addEventListener('input', handleInput, false)

function handleInput (e) {
  e.target.value = cepMask(e.target.value)
}

function cepMask (cep) {
  return cep.replace(/\D/g, '')
  .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
}