/**
 * EXERCÍCIO GUIADO: SISTEMA DE FUNCIONÁRIOS COM HERANÇA
 */

// Objeto base - molde comum para todos
const funcionarioBase = {
  baterPonto(hora) {
    console.log(`${this.nome} bateu ponto às ${hora}`);
  },
  
  calcularSalario() {
    return this.salarioBase;
  },
  
  info() {
    return `${this.nome} - ${this.departamento} - R$ ${this.calcularSalario()}`;
  }
};

// ===================================================================
// FUNCIONÁRIOS ESPECÍFICOS
// ===================================================================

// Desenvolvedor: ganha bônus
const desenvolvedor = {
  nome: 'Allan',
  salarioBase: 2000,
  departamento: 'TI',
  linguagem: 'JavaScript',
  
  calcularSalario() {
    return this.salarioBase + 500;  // SHADOWING + bônus
  },
  
  debugar() {
    console.log(`${this.nome} está debugando`);
  }
};

// Gerente: bônus por equipe
const gerente = {
  nome: 'Carlos',
  salarioBase: 2000,
  departamento: 'RH',
  equipe: 5,
  
  calcularSalario() {
    return this.salarioBase + (this.equipe * 100);  // SHADOWING
  },
  
  reuniao() {
    console.log(`${this.nome} realizando reunião`);
  }
};

// Designer: sem bônus
const designer = {
  nome: 'Maria',
  salarioBase: 2000,
  departamento: 'Design',
  software: 'Figma',
  
  calcularSalario() {
    return this.salarioBase;  // Sem bônus
  }
};

// ===================================================================
// ESTABELECENDO HERANÇA
// ===================================================================

Object.setPrototypeOf(desenvolvedor, funcionarioBase);
Object.setPrototypeOf(gerente, funcionarioBase);
Object.setPrototypeOf(designer, funcionarioBase);

/**
 * Cadeias:
 * desenvolvedor → funcionarioBase → Object.prototype → null
 * gerente → funcionarioBase → Object.prototype → null
 * designer → funcionarioBase → Object.prototype → null
 */

// ===================================================================
// TESTES
// ===================================================================

console.log("===== DESENVOLVEDOR =====");
desenvolvedor.baterPonto("09:00");  // HERDADO
console.log(desenvolvedor.calcularSalario());  // CUSTOMIZADO (shadowing)
console.log(desenvolvedor.info());  // HERDADO, usa calcularSalario customizado
desenvolvedor.debugar();

console.log("\n===== GERENTE =====");
gerente.baterPonto("08:30");
console.log(gerente.calcularSalario());
console.log(gerente.info());
gerente.reuniao();

console.log("\n===== DESIGNER =====");
designer.baterPonto("10:00");
console.log(designer.calcularSalario());
console.log(designer.info());

// ===================================================================
// BENEFÍCIO: ADICIONAR NOVO MÉTODO AO BASE
// ===================================================================

// Todos ganham acesso automaticamente
funcionarioBase.aumento = function(percentual) {
  this.salarioBase *= (1 + percentual / 100);
  console.log(`${this.nome} +${percentual}%`);
};

desenvolvedor.aumento(10);
console.log(`Novo salário: ${desenvolvedor.calcularSalario()}`);
