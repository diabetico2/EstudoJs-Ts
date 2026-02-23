const nome = 'rebeca';
const contatentacao = "olá " + nome + "!";
const template = ` olá ${nome} !  ` //? mais otimizado aparentemente
console.log(contatentacao, template)

// * expressões

console.log (`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log (`ei...${up('cuidado')}`)