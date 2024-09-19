// Título da Prática:  Como trabalhar com Classes?
// Objetivos: Compreender o uso de classes

class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

let gerente = new Gerente('João', 36, 'Gerente de TI', 'Tecnologia');
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

console.log('\n');

let desenvolvedor = new Desenvolvedor('Rafaela', 36, 'Desenvolvedora', 'Ruby');
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();

// Título da Prática:  Como usamos exception?
// Objetivos: Implementar uso de exception

function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');

    erroDiv.innerText = mensagem;
}

function exibirResultado(mensagem) {    
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerText = mensagem;
}

document.getElementById('cargo').addEventListener('change', function() {
    const cargo = this.value;

    if (cargo === 'gerente') {
        document.getElementById('departamento-label').style.display = 'block';
        document.getElementById('departamento').style.display = 'block';
        document.getElementById('linguagem-label').style.display = 'none';
        document.getElementById('linguagem').style.display = 'none';
    } else if (cargo === 'desenvolvedor') {
        document.getElementById('departamento-label').style.display = 'none';
        document.getElementById('departamento').style.display = 'none';
        document.getElementById('linguagem-label').style.display = 'block';
        document.getElementById('linguagem').style.display = 'block';
    }
});

document.getElementById('form-funcionario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const cargo = document.getElementById('cargo').value.trim();
    const departamento = document.getElementById('departamento').value.trim();
    const linguagem = document.getElementById('linguagem').value.trim();
    
    try {
        if (!nome) {
            throw new Error("O nome deve ser preenchido.");
        }
        
        if (!idade || isNaN(idade) || idade <= 0) {
            throw new Error("A idade deve ser um número válido e maior que zero.");
        }

        if (cargo === "") {
            throw new Error("Por favor, selecione um cargo válido.");
        }
        
        let funcionario;

        if (cargo === 'gerente') {
            if (!departamento) {
                throw new Error("O departamento deve ser preenchido para o gerente.");
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
            exibirResultado(`Olá, meu nome é ${nome}, tenho ${idade} anos, sou ${cargo} e estou gerenciando o departamento de ${departamento}.`);
        } else if (cargo === 'desenvolvedor') {
            if (!linguagem) {
                throw new Error("A linguagem de programação deve ser preenchida para o desenvolvedor.");
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
            exibirResultado(`Olá, meu nome é ${nome}, tenho ${idade} anos, sou ${cargo} e estou trabalhando como ${linguagem}.`);
        }

        exibirErro('');
    } catch (erro) {
        exibirErro(erro.message);
    }
});
