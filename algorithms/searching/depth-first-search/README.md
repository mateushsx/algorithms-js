# Depth Fisrt Search

A **Busca em profundidade** ou do inglês _Depth First Search_ é um dos algoritmos mais famosos quando se trata de Grafos. Ela pecorre os Vértices de um Grafo G atráves da expansão da lista de vértices vizinhos em relação a um vérticie inicial para achar o vértice alvo ou simplesmente para descobrir todos os vétrices de um grafo.

## Como funciona

A busca em profundidade pode começar de duas formas:

1. O vértice inicial é selecionado manualmente.
2. O vértice inicial é selecionado aleatoriamente


 __Abordagem recursiva__: 
 
 - Após selecionar o vértice inicial, o algoritmo o marca em uma lista de vértices já visitados para evitar ciclos. Em seguida, verifica os vértices vizinhos. Se o vértice vizinho ```w``` ainda não tiver sido visitado, o algoritmo chama recursivamente a função, passando w como o novo vértice inicial.

__Abordagem iterativa__:

- Após a seleção do vértice inicial, é criada uma pilha para auxiliar na quantidade de vértices que ainda faltam ser visitados, sendo inicializada com o vértice inicial.

- Após isso é realizado a extração do vértice ```v``` com o metódo de desempilhar e caso esse vértice ainda não foi visitado,ele é marcado como visitado e todos os vértices vizinhos dele são empilhados.

## Código de exemplo
O código a seguir implementa a busca em profundidade tanto recursivamente como iterativamente
```
const adjancyMatrix = [
  [1, 2], // Vértice 00 possui arestas com : Vértice 01 e 02
  [0, 2, 3], // Vértice 01 possui arestas com : Vértice 00 ,02 e 03
  [0, 1, 4], // Vértice 02 possui arestas com : Vértice 00 ,01 e 04
  [1, 4], // Vértice 03 possui arestas com : Vértice 01 e 04
  [3, 4], // Vértice 04 possui arestas com : Vértice 04 e 03
];

const visited = [];

for (let idx = 0; idx < adjancyMatrix.length; idx++) {
  visited.push(false);
}

function recursiveDFS(adjancyMatrix, visited, vertex) {
  const neighboors = adjancyMatrix[vertex];

  visited[vertex] = true;

  console.log(
    `Visitando o vértice ${vertex} que tem conexão com: ${neighboors}`
  );

  for (let w of neighboors) {
    if (!visited[w]) {
      recursiveDFS(adjancyMatrix, visited, w);
    }
  }
}

function iterativeDFS(adjancyMatrix, visited, vertex) {
  const stack = [vertex];

  while (stack.length > 0) {
    let v = stack.pop();

    if (!visited[v]) {
      visited[v] = true;

      console.log(
        `Visitando o vértice ${v} que tem conexão com: ${adjancyMatrix[v]}`
      );

      for (let idx = 0; idx < adjancyMatrix[v].length; idx++) {
        let w = adjancyMatrix[v][idx];

        if (!visited[w]) {
          stack.push(w);
        }
      }
    }
  }
}

recursiveDFS(adjancyMatrix, visited, 0);
iterativeDFS(adjancyMatrix, visited, 0);

```

## Explicação do código

* __Matriz de adjacência__: A matriz ```adjancyMatrix``` representa o Grafo e suas conexões, sendo cada linha matriz um vértice de 0 á 4 e cada coluna os vizinhos que compõem as arestas de cada vértice.

* __Função__: Ambas as funções ```recursiveDFS``` e ```iterativeDFS``` recebem 3 parâmetros:

- ```adjancyMatrix```: A matriz de adjacência que representa um Grado G qualquer.
- ```visited```: uma lista de vértices visitados
- ```vertex```: O vértice que será realizada a expansão da DFS.

O algorimto irá visitar todos os vérices do grafo, porém so irá expandir a busca para aqueles que ainda não foram visitados. 

* __Saída__: A saída padrão para este código é a descoberta de todos vértices do grafo, conforme a seguinte exemplo de saída do console:

```
Visitando o vértice 0 que tem conexão com: 1,2
Visitando o vértice 2 que tem conexão com: 0,1,4
Visitando o vértice 4 que tem conexão com: 3,4
Visitando o vértice 3 que tem conexão com: 1,4
Visitando o vértice 1 que tem conexão com: 0,2,3
````

## Complexidade de tempo:

A complexidade de tempo da busca em profundidade é __O(V+E)__, onde __V__ é o número total de vértices e __E__ a quantidade total de arestas presentes no __Grafo G__, isso significa que no pior caso o algoritmo irá pecorrer todos os vértices e todas as arestas do Grafo para ou descobrir todos vértices ou achar um elemento.

## Quando usar busca por profundidade?

* Quando é nescessário a exploração completa de um Grafo.

* Quando um problema em questão pode ser modelado como um problema de detecção de ciclo

* Verificar se existe um caminho entre dois vértices em um Grafo G.
