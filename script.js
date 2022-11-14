// PARTE 1
// 1. Crie uma classe Livro com as seguintes propriedades:
// ● Titulo - qual o nome do livro;
// ● Autor- quem escreveu o livro;
// ● Editora - qual empresa que publicou o livro;
// ● Ano de publicação - o ano em que o livro foi publicado
// ● Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);

// 2. Crie alguns objetos da classe Livro e adicione-os em um array;

// 3. Crie uma classe Biblioteca com as seguintes propriedades:
// ● Nome - nome da biblioteca;
// ● Endereco - onde a biblioteca fica localizada;
// ● Telefone - telefone de contato da biblioteca

// 4. Adicione na classe Biblioteca um método para buscar um livro específico, deve
// passar como parâmetro o nome do livro e exibir no console todas as informações
// de um livro;

// 5. Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser
// passado como parâmetro o nome do livro, então verificar a disponibilidade e se
// estiver disponível retornar true e trocar o valor da propriedade do livro para false, se
// não estiver disponível retornar false.

// 6. Adicione na classe Biblioteca um método de devolução de um livro, deve ser
// passado como parâmetro o nome do livro, então trocar o valor da propriedade de
// disponibilidade desse livro para true;

// 7. Crie um objeto da classe Biblioteca e chame seus métodos.

// PARTE 2 
// 1. Crie um método construtor para a classe Livro que recebe como parâmetro as
// informações que serão atribuídas as propriedades, com exceção de
// “Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado;

// 2. Na classe Biblioteca, adicione uma nova propriedade “AcervoDeLivros” que deve
// ser um array;

// 3. Crie um método construtor para a classe Biblioteca que deve receber como
// parâmetro as informações que serão atribuídas as propriedades, com exceção da
// “AcervoDeLivros”;

// 4. Na classe Biblioteca crie um método para adicionar um novo Livro na propriedade
// “AcervoDeLivros”;

class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade

    constructor(){
        this.Titulo = prompt("Informe o título do livro: ")
        this.Autor = prompt("Informe o nome do Autor: ")
        this.Editora = prompt("Informe a Editora do livro: ")
        this.AnoDePublicacao = prompt("Informe o ano de publicação do livro")
        this.Disponibilidade = true
    }
}

let livro
let nome

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros = []

    constructor(){
        this.Nome = prompt("Informe o nome da biblioteca: ")
        this.Endereco = prompt("Informe o endereço da biblioteca: ")
        this.Telefone = prompt("Informe o telefone da biblioteca: ")
    }

    buscarLivro(nome) {
        for (let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (this.AcervoDeLivros[i].Titulo == nome) {
                alert("Livro: " + this.AcervoDeLivros[i].Titulo + "\n"
                    + "Autor: " + this.AcervoDeLivros[i].Autor + "\n"
                    + "Editora: " + this.AcervoDeLivros[i].Editora + "\n"
                    + "Ano de publicação: " + this.AcervoDeLivros[i].AnoDePublicacao + "\n"
                    + "Disponibilidade: " + this.AcervoDeLivros[i].Disponibilidade)
            }
        }
    }

    EmprestarLivro(nome) {
        for (let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (nome == this.AcervoDeLivros[i].Titulo && this.AcervoDeLivros[i].Disponibilidade == true) {
                alert("Livro emprestado com sucesso!")
                this.AcervoDeLivros[i].Disponibilidade = false
            } else if (nome == this.AcervoDeLivros[i].Titulo && this.AcervoDeLivros[i].Disponibilidade == false) {
                alert("Livro não disponível!")
            }
        }
    }

    DevolverLivro(nome) {
        for (let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (nome == this.AcervoDeLivros[i].Titulo) {
                alert("Livro devolvido com sucesso")
                this.AcervoDeLivros[i].Disponibilidade = true
            }
        }
    }
}

let biblioteca = new Biblioteca

let continuar = true
while (continuar == true) {
    let opcao = prompt("Informe a opção desejada: 1- Adicionar novo livro; 2- Buscar livro; 3- Emprestar livro; 4- Devolver livro; 5- Finalizar programa")

    switch (opcao) {
        case "1":
            livro = new Livro()
            biblioteca.AcervoDeLivros.push(livro)
            break;
        case "2":
            nome = prompt("Informe o livro a ser pesquisado: ")
            biblioteca.buscarLivro(nome)
            break;
        case "3":
            nome = prompt("Informe o livro a ser emprestado: ")
            biblioteca.EmprestarLivro(nome)
            break;
        case "4":
            nome = prompt("Informe o livro a ser devolvido: ")
            biblioteca.DevolverLivro(nome)
            break;
        case "5":
            continuar = false
            break;
    }
}

// let livro1 = new Livro
// livro1.Titulo = "As 48 leis do poder"
// livro1.Autor = "Robert Greene"
// livro1.Editora = "Rooco Digital"
// livro1.AnoDePublicacao = "1998"
// livro1.Disponibilidade = true

// let livro2 = new Livro
// livro2.Titulo = "A interpretação dos sonhos"
// livro2.Autor = "Sigmund Freud"
// livro2.Editora = "Biblioteca Áurea"
// livro2.AnoDePublicacao = "1889"
// livro2.Disponibilidade = true

// let livro3 = new Livro
// livro3.Titulo = "Rápido e devagar"
// livro3.Autor = "Daniel Kahneman"
// livro3.Editora = "Objetiva"
// livro3.AnoDePublicacao = "2011"
// livro3.Disponibilidade = true

// let livro4 = new Livro
// livro4.Titulo = "As intermitências da morte"
// livro4.Autor = "José Saramago"
// livro4.Editora = "Porto Editora"
// livro4.AnoDePublicacao = "2005"
// livro4.Disponibilidade = true

// let livro5 = new Livro
// livro5.Titulo = "Psicologia das massas"
// livro5.Autor = "Sigmund Freud"
// livro5.Editora = "Companhia das letras"
// livro5.AnoDePublicacao = "1921"
// livro5.Disponibilidade = true