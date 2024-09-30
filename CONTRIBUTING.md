
# Diretrizes para Contribuição

Obrigado por querer contribuir com este repositório! Para garantir a consistência e qualidade do código, siga as diretrizes abaixo.

## Estrutura do Projeto

- Cada algoritmo deve estar em uma pasta separada dentro de `algorithms/<categoria>/<nome-do-algoritmo>/`.
- O arquivo principal do algoritmo deve ser `index.js`.
- A documentação do algoritmo deve estar em `README.md`, escrita em **português**.

### Exemplo de Estrutura

```plaintext
algorithms-js/
├── algorithms/
│   ├── sorting/
│   │   ├── quick-sort/
│   │   │   ├── index.js
│   │   │   └── README.md
│   └── searching/
│       ├── binary-search/
│       │   ├── index.js
│       │   └── README.md

```

## Padrões de Implementação

- O código deve ser escrito em **JavaScript (Node.js)** e em **inglês**.
- Siga as boas práticas de programação, incluindo o uso de nomes claros e verificações de parâmetros.

### Exemplo de Implementação (`index.js`)

```javascript
const elements = [2, 8, 3, 1, 5];
const elementToFind = 3;

function linearSearch(array, item) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return item;
    }
  }

  return -1;
}

const result = linearSearch(elements, elementToFind);
console.log('Resultado:', result);
```

## Padrões de Documentação

A documentação de cada algoritmo deve ser feita no arquivo `README.md`, em **português**.

### Estrutura do `README.md`

- Nome do Algoritmo
- Como funciona: Explicação detalhada do funcionamento.
- Código de exemplo: Implementação do algoritmo em JavaScript.
- Explicação do código: Descrição do que cada parte do código faz.
- Complexidade de Tempo: Análise da complexidade temporal e, se aplicável, espacial.
- Quando usar: Situações ideais para o uso do algoritmo.

### Exemplo de `README.md`

```markdown
# Linear Search

A **Busca Linear** percorre todos os elementos de um array até encontrar o item desejado ou até verificar todos os elementos.

## Código de exemplo

const elements = [2, 8, 3, 1, 5];
const elementToFind = 3;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return item;
    }
  }

  return -1;
}

### Complexidade de Tempo

A busca linear tem complexidade **O(n)**.

```

## Submetendo um Pull Request

1. Faça um **fork** do repositório.
2. Crie um novo **branch** para sua feature ou correção (`git checkout -b feature/nome-da-feature`).
3. Adicione e comite suas alterações.
4. Envie um **pull request** com uma descrição clara do que foi alterado ou adicionado.

### **Exemplo de Pull Request**

#### Título do PR

```text
Adicionar implementação do algoritmo Quick Sort
```

#### Descrição do PR

```markdown
### Descrição
Este pull request adiciona a implementação do algoritmo **Quick Sort** na categoria de algoritmos de ordenação (`sorting`). O algoritmo foi implementado em JavaScript, seguindo as diretrizes de contribuição, e a documentação foi escrita em português, conforme solicitado.

### Mudanças principais:
- Implementação do **Quick Sort** em `index.js`.
- Adicionada documentação do algoritmo em `README.md` com a explicação de como o algoritmo funciona, sua complexidade temporal, e exemplos de uso.
- Incluído um teste básico para validar o algoritmo com diferentes entradas.

### Arquivos adicionados:

algorithms/sorting/quick-sort/index.js
algorithms/sorting/quick-sort/README.md


### Como testar
1. Execute o algoritmo com os seguintes dados de exemplo:
const elements = [10, 5, 3, 7, 2, 8];
const sortedArray = quickSort(elements);
console.log(sortedArray);  // Saída esperada: [2, 3, 5, 7, 8, 10]

2. Verifique se o algoritmo ordena corretamente diferentes arrays de números.

### Checklist

- [x] Segui as diretrizes de contribuição descritas em `CONTRIBUTING.md`.
- [x] O código foi escrito em inglês.
- [x] A documentação foi escrita em português.
- [x] Testei minha implementação localmente para verificar a funcionalidade.

```

### Explicação de cada parte do PR

1. **Título do PR**: Deve ser descritivo e conciso, mencionando qual algoritmo foi adicionado ou modificado.

2. **Descrição do PR**:
   - **Descrição**: Um breve resumo sobre o que o Pull Request está fazendo, qual algoritmo foi adicionado e em qual categoria.
   - **Mudanças principais**: Lista das principais adições ou alterações, como implementação do algoritmo e documentação.
   - **Arquivos adicionados**: Caminho e nomes dos arquivos que foram incluídos no PR.
   - **Como testar**: Um exemplo de como executar o código adicionado para verificar se ele está funcionando corretamente.
   - **Checklist**: Um checklist para garantir que o contribuinte seguiu todas as etapas necessárias, como seguir o padrão de código e documentação.

Esse exemplo ajudará a padronizar os Pull Requests, facilitando a revisão e integração de novas contribuições no repositório.
