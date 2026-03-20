const inputItem = document.querySelector('#input-item'); 
const btnGuardar = document.querySelector('#btn-guardar'); 
const inventario = document.querySelector('.inventario'); 
 
function criaSlot() { 
  const li = document.createElement('li')
  return li
} 
 
function criaNomeItem(nome) { 
 const span = document.createElement('span')
 span.innerHTML = nome
 return span
} 
 
function criaBotaoDrop() { 
 const drop = document.createElement('button')
 drop.innerText = 'drop'
 drop.setAttribute('class','drop')
 return drop
} 
 
function adicionarAoInventario(nome) { 
    const li = criaSlot()
    const item = criaNomeItem(nome)
    const drop = criaBotaoDrop()
  li.appendChild(item)
  li.appendChild(drop)

  return li
} 
 
btnGuardar.addEventListener('click', function() { 
 const item = inputItem.value
 if(!item) return

 const itemPronto = adicionarAoInventario(item)
 inventario.appendChild(itemPronto)

 inputItem.value = ''
 inputItem.focus()

}); 
 
inventario.addEventListener('click', function(e) { 
  const le = e.target
  if (le.classList.contains('drop')){
    le.parentElement.remove()
  }
}); 
