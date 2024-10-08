# Breadth First Search

A **Busca em largura** ou do inglês _breadth First Search_ é um algoritmo bastante utilizado para realizar buscas em estruturas de Grafos. Ela é bem parecida com a busca em profundidade(DFS), sendo sua principal diferença a forma como expandimos a busca pelos nós vizinhos em relação ao nó inicial.

Essa expansão ocorre em forma a analoga a uma teia de aranha, em que é visitado primeiro todos os vizinhos do vérice inicial para após isso expandir para os outros vértices(vizinhos dos vizinho).

![Busca em Largura](https://miro.medium.com/v2/resize:fit:1400/1*PvXMyl7PHuW8GAszMlYKZQ.gif)

Fonte do GIF: [Medium](https://medium.com/@anwarhermuche/m%C3%A9todos-de-busca-em-grafos-bfs-dfs-cf17761a0dd9)

## Como funciona

A busca em largura é implementada geralmente na forma interativa e funciona da seguinte maneira:

 1. É escolhido um vértice inicial para começar a expansão do grafo, e depedendo do probelma a ser resolvido, também é passado um vértice alvo para a busca.

 2. É iniciado uma estrutura de fila com o vértice inicial sendo o seu primeiro elemento.

 3. Após a inicialização da fila, é feito a remoção do vértice e se este vértice ainda não foi visitado, ele é marcado como visitado e é obtido uma lista de seus vértices vizinhos.

 4. É feito uma iteração na lista de vizinhos e é feito uma checagem para cada vizinho, se este vizinho ainda não foi visitado, ele é adicionado a fila para ser visitado.

 5. É feito a repetição dos passos 3 e 4 até que todos os vértices do grafo sejam visitados.

## Código de exemplo
O código a seguir implementa a busca em profundidade tanto recursivamente como iterativamente
```javascript
function BFS(adjMatrix, visited, startVertex) {
  const queue = [startVertex];

  if (startVertex >= adjMatrix.length) {
    console.log("The Adjency Matrix don't contain that start vertex");
    return -1;
  }

  while (queue.length > 0) {
    let v = queue.shift();

    if (!visited[v]) {
      visited[v] = true;

      const neighboors = adjMatrix[v];

      console.log(`the vertex ${v + 1} is being visited`);

      for (let neighboor of neighboors) {
        if (!visited[neighboor]) {
          queue.push(neighboor);
        }
      }
    }
  }
  console.log('All vertex were visited');
}

function fillVisitedArray(booleanArray, length) {
  for (let idx = 0; idx < length; idx++) {
    booleanArray.push(false);
  }

  return booleanArray;
}

const adjMatrix = [[1, 4, 2], [5, 3], [3, 6], [1, 2, 4], [0, 3], [1], [2]];

const visited = fillVisitedArray([], adjMatrix.length);

BFS(adjMatrix, visited, 0);

```

## Explicação do código

* __Matriz de adjacência__: A matriz ```adjMatrix``` representa o Grafo e suas conexões, sendo cada linha da matriz um vértice de 0 á 6 e cada coluna, os vizinhos que compõem as arestas de cada vértice.


* __Função__: A Função **DFS** recebe 3 paramêtros:

- ```adjMatrix```: A matriz de adjacência que representa um Grado G qualquer.
- ```visited```: uma lista de vértices visitados
- ```startVertex```: O vértice que será realizada a expansão da DFS.

O algorimto irá visitar todos os vérices do grafo, porém so irá expandir a busca para aqueles que ainda não foram visitados, dando prioridade para os vizinhos do vértice atual. 

* __Saída__: A saída padrão para este código é a descoberta de todos vértices do grafo, conforme a seguinte exemplo de saída do console:

```
the vertex 0 is being visited
the vertex 1 is being visited
the vertex 4 is being visited
the vertex 2 is being visited
the vertex 5 is being visited
the vertex 3 is being visited
the vertex 6 is being visited

All vertex were visited

````

## Complexidade de tempo:

A complexidade de tempo da busca em profundidade é __O(V+E)__, onde __V__ , ou seja ela tem um complexidade de tempo linear em função di total de vértices e o total de arestas do grafo.

## Quando usar busca por profundidade?

* Em problemas pode ser modelado em encontrar o menor caminho de um grafo não ponderado.

* Em problemas de exploração de grafos ou redes.

* Achar uma árvore geradora minima(MST) e problemas de busca em labirintos.
