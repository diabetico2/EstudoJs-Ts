const inputNome = document.querySelector("#input-nome");
const selectClasse = document.querySelector("#select-classe");
const btnRecrutar = document.querySelector("#btn-recrutar");
const guilda = document.querySelector(".guilda");

// --- 1. ELEMENTO NOME (H3) ---
function criaNome(nome) {
  const h3 = document.createElement("h3");
  h3.innerHTML = nome;
  h3.setAttribute("class", "nome");
  return h3;
}

// --- 2. ELEMENTO CLASSE (P) ---
function criaClasse(classe) {
  const p = document.createElement("p");
  p.innerHTML = classe;
  p.setAttribute("class", "P");
  return p;
}

function limpar() {
  inputNome.value = "";
  selectClasse.value = "";
  inputNome.focus();
  selectClasse.focus();
}

// --- 3. BOTAO EXPULSAR (X) ---
function criaBotaoExpulsar() {
  const expulse = document.createElement("button");
  expulse.innerText = "expulsar";
  expulse.setAttribute("class", "expulse");
  return expulse;
}

// --- 4. O GERENTE (MONTA O CARD) ---
function montaCard(nome, classe) {
  // DICA: A div precisa ter a classe 'card' E a classe que veio no argumento.
  // Ex: div.classList.add('card', classe)
  const div = document.createElement("div");
  const nomeMembro = criaNome(nome);
  const classMembro = criaClasse(classe);
  const expulse = criaBotaoExpulsar()
  div.classList.add('card', classe)


  div.appendChild(nomeMembro);
  div.appendChild(classMembro)
  div.appendChild(expulse)

  return div;
}

// --- EVENTOS ---
btnRecrutar.addEventListener("click", function () {
   const nome = inputNome.value
   const classe = selectClasse.value

   if(nome === '' && classe === '') return

   const infos = montaCard(nome, classe)
   guilda.appendChild(infos)

   limpar()
});

guilda.addEventListener("click", function (e) {
   le = e.target
   if (le.classList.contains('expulse')){
      le.parentElement.remove()
   }
});
