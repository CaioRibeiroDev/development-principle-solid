# SOLID

## S - Single-responsibility principal
### Uma classe, component até função deve ter uma unica responsabilidade

```js
  class ProductService {
    getAllProducts() {
      // lógica para buscar todos os produtos
    }

    saveProduct(product) {
      // lógica para salvar um produto
    }

    deleteProduct(productId) {
      // lógica para excluir um produto
    }
  }

  //Neste exemplo, a classe ProductService tem três métodos que fazem diferentes operações relacionadas a produtos. No entanto, essa classe não segue o Princípio da Responsabilidade Única, pois tem múltiplas responsabilidades. Podemos refatorar essa classe da seguinte maneira:

  class ProductService {
    getAllProducts() {
      // lógica para buscar todos os produtos
    }
  }

  class ProductRepository {
    saveProduct(product) {
      // lógica para salvar um produto
    }

    deleteProduct(productId) {
      // lógica para excluir um produto
    }
  }

  //Aqui, a classe ProductService agora tem apenas uma única responsabilidade: buscar todos os produtos. As responsabilidades de salvar e excluir produtos foram movidas para uma nova classe, chamada ProductRepository. Agora, cada classe tem uma única responsabilidade e é mais fácil de entender, testar e manter o código.
```

---

## O - Open-closed principle
###  Classes entidades ou funções devem estar abertas para extensão mas fechadas para modificação

De acordo com esse princípio, uma classe, entidade ou função deve estar aberta para extensão, mas fechada para modificação. Isso significa que o comportamento de uma classe ou função deve ser estendido sem precisar modificar o código-fonte original.

Em outras palavras, quando novos requisitos surgirem, você deve ser capaz de estender o comportamento do sistema sem precisar modificar o código-fonte original. Isso é geralmente feito através de herança, interfaces ou injeção de dependência.

Ao seguir este princípio, você evita modificar o comportamento existente do sistema, o que pode levar a bugs e outros problemas. Em vez disso, você adiciona novas funcionalidades sem alterar o código existente, o que torna o sistema mais flexível e fácil de manter.

```js
class Shape {
  draw() {
    // lógica para desenhar uma forma genérica
  }
}

class Circle extends Shape {
  draw() {
    // lógica para desenhar um círculo
  }
}

class Rectangle extends Shape {
  draw() {
    // lógica para desenhar um retângulo
  }
}

function drawShapes(shapes) {
  shapes.forEach((shape) => shape.draw());
}

const shapes = [new Circle(), new Rectangle()];

drawShapes(shapes);
```

Nesse exemplo, temos uma classe Shape que define o comportamento genérico para desenhar uma forma. Em seguida, temos duas classes Circle e Rectangle que estendem a classe Shape e implementam o método draw para desenhar um círculo e um retângulo, respectivamente.

Finalmente, temos uma função drawShapes que recebe uma lista de objetos de forma e chama o método draw de cada objeto, sem precisar saber qual é a forma exata.

Dessa forma, podemos adicionar novas formas, estendendo a classe Shape, sem precisar modificar a função drawShapes. Isso segue o princípio Aberto-Fechado, pois a classe Shape está aberta para extensão (adicionando novas formas) e fechada para modificação (a função drawShapes não precisa ser alterada quando novas formas são adicionadas).

---

## L - Liskov Substitution Principle
### Se temos uma classe e dela criarmos uma subclasse (ou seja uma herança) o objeto ou instancia resultante dessa subclasse tem que conseguir substituir o obejto da classe principal sem quebrar um programa

De acordo com esse princípio, se uma classe é usada como base para uma subclasse, então os objetos dessa subclasse devem ser capazes de substituir objetos da classe base sem quebrar o comportamento do programa.

Isso significa que a subclasse deve manter as mesmas propriedades e comportamentos da classe base, ou seja, ela não deve alterar o comportamento da classe base de forma imprevisível.

Esse princípio é importante porque permite que o código seja mais flexível e escalável. Quando uma classe pode ser substituída por uma subclasse, o código pode ser mais facilmente adaptado às mudanças nos requisitos do software sem quebrar o comportamento do programa.

Por exemplo, considere uma classe Shape com um método calculateArea(). Uma subclasse dessa classe poderia ser Square. Se o Square não substituir corretamente a Shape, e não implementar corretamente o método calculateArea(), então o comportamento do programa pode ser quebrado.

Portanto, é importante seguir o Princípio da Substituição de Liskov ao projetar hierarquias de classes e garantir que as subclasses sejam substituíveis pelas classes base.

```js
class Shape {
  calculateArea() {
    // lógica para calcular a área de uma forma genérica
    return 0;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  calculateArea() {
    // lógica para calcular a área de um quadrado
    return this.sideLength * this.sideLength;
  }
}

function printArea(shape) {
  console.log(`Area: ${shape.calculateArea()}`);
}

const square = new Square(5);
printArea(square); // Imprime "Area: 25"
```

Nesse exemplo, temos uma classe Shape que define o comportamento genérico para calcular a área de uma forma. Em seguida, temos uma classe Square que estende a classe Shape e implementa o método calculateArea para calcular a área de um quadrado.

Finalmente, temos uma função printArea que recebe um objeto de forma e chama o método calculateArea. Neste exemplo, passamos um objeto Square para a função printArea, e ela é capaz de calcular e imprimir a área correta do quadrado, demonstrando que o objeto Square pode ser substituído pelo objeto Shape sem quebrar o comportamento do programa, seguindo o Princípio da Substituição de Liskov.

---

## I - Interface Segregation Principle
### Clientes nao deve ser forçados a depender de metodos que eles nao usam (Clientes seria uma Classe que é forçada a implementar metodos que ela nao vai precisar e nao faz sentido pra ela )

De acordo com esse princípio, as interfaces de um sistema devem ser separadas em grupos coesos de funcionalidades, e os clientes devem depender apenas das interfaces que realmente precisam.

Isso significa que uma classe não deve ser forçada a implementar métodos que não precisa e não fazem sentido para ela. Se uma classe precisar de um conjunto diferente de métodos em comparação com outras classes, então ela deve ter sua própria interface separada.

Esse princípio é importante porque ajuda a evitar dependências desnecessárias e a tornar o código mais flexível e adaptável. Quando as interfaces são segregadas corretamente, os clientes só precisam conhecer as interfaces que eles usam, o que torna o código mais fácil de manter e modificar.

Por exemplo, considere uma interface Machine que contém métodos para iniciar, pausar e desligar uma máquina. Uma classe Printer pode precisar apenas do método print(), enquanto uma classe Scanner pode precisar apenas do método scan(). Nesse caso, é melhor criar interfaces separadas para Printer e Scanner, cada uma contendo apenas os métodos necessários para a respectiva funcionalidade, em vez de forçar ambas as classes a implementar todos os métodos da interface Machine.

Portanto, é importante seguir o Princípio da Segregação de Interfaces ao projetar interfaces e garantir que os clientes dependam apenas das interfaces que realmente precisam.

```js
// Interface para uma classe que pode imprimir documentos
class Printable {
  print() {}
}

// Classe que implementa a interface Printable e imprime documentos
class Printer extends Printable {
  print() {
    console.log("Imprimindo documento...");
  }
}

// Classe que não precisa da funcionalidade de impressão
class Document {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }

  // outras funcionalidades relacionadas a documentos
}

// Classe que precisa da funcionalidade de impressão
class Report {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }

  print() {
    console.log("Gerando relatório...");
    console.log(this.content);
  }
}

// Função que recebe um objeto Printable e chama o método print()
function doPrint(printable) {
  printable.print();
}

const printer = new Printer();
doPrint(printer); // Imprime "Imprimindo documento..."

const document = new Document("Documento 1", "Este é um documento");
const report = new Report("Relatório 1", "Este é um relatório");
doPrint(document); // Não faz nada, pois Document não implementa Printable
doPrint(report); // Imprime "Gerando relatório..." e o conteúdo do relatório
```

---

## D - Dependency Inversion  Principle
### Um modulo ele nao deve depender de detalhes de implementação de outro modulo diretamente, deve existir uma abstração;

Em outras palavras, ao invés de um módulo depender diretamente de outro, ele deve depender de uma interface ou abstração que represente esse outro módulo. Isso ajuda a reduzir o acoplamento entre os módulos e torna o código mais flexível e fácil de manter.

Aqui está um exemplo simples em JavaScript para ilustrar o DIP:

```js
// Interface para um serviço de envio de emails
class EmailService {
  sendEmail(to, subject, body) {}
}

// Classe que depende de um serviço de envio de emails para notificar usuários
class UserNotifier {
  constructor(emailService) {
    this.emailService = emailService;
  }

  notify(user, message) {
    const to = user.email;
    const subject = "Notificação";
    const body = `Olá, ${user.name}! ${message}`;
    this.emailService.sendEmail(to, subject, body);
  }
}

// Classe concreta que implementa o serviço de envio de emails
class GmailEmailService extends EmailService {
  sendEmail(to, subject, body) {
    console.log(`Enviando email para ${to} usando o serviço do Gmail...`);
    console.log(`Assunto: ${subject}`);
    console.log(`Corpo: ${body}`);
  }
}

// Usando o código
const emailService = new GmailEmailService();
const user = { name: "João", email: "joao@gmail.com" };
const userNotifier = new UserNotifier(emailService);
userNotifier.notify(user, "Você tem uma nova mensagem!");
```

Neste exemplo, temos uma interface EmailService que define um método sendEmail. Em seguida, temos uma classe UserNotifier que depende de um serviço de envio de emails para notificar usuários.

Observe que a classe UserNotifier não depende diretamente da classe concreta GmailEmailService. Em vez disso, ela depende da abstração EmailService, que pode ser implementada por qualquer serviço de envio de emails.

Por fim, temos a classe concreta GmailEmailService que implementa a interface EmailService. Ao criar uma instância de UserNotifier, passamos uma instância de GmailEmailService como argumento. Isso mostra como o Princípio da Inversão de Dependência pode ser aplicado para permitir que diferentes implementações de um serviço sejam usadas sem modificar a classe que depende dele.

## Referencias

Isso foi construido com base no video do Felipe Deschamps: https://www.youtube.com/watch?v=6SfrO3D4dHM&list=TLPQMDQwNDIwMjMgjpHISnR89g&index=1