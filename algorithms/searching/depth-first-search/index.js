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
