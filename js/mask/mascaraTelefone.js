/*
 * Para Input que deseja aplicar utilize data-js="inputphone"
 * Exemplo:
	<label class="label-form">DDD + Telefone</label>
  <input type="text" class="input-form" id="telefone" placeholder="Digite seu telefone com DDD" required data-js="inputphone" maxlength="15"/>
*/

// MASCARA DE TELEFONE
const $input = document.querySelector('[data-js="inputphone"]')
$input.addEventListener('input', handleInput, false)

function handleInput (e) {
  e.target.value = phoneMask(e.target.value)
}

function phoneMask (phone) {
  return phone.replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, "($1) $2")
  .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
}
