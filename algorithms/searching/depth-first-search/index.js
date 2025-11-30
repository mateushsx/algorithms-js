function recursiveDFS(adjacencyMatrix, visited, vertex, result = []) {
  const neighbors = adjacencyMatrix[vertex];

  visited[vertex] = true;
  result.push(vertex);

  for (let w of neighbors) {
    if (!visited[w]) {
      recursiveDFS(adjacencyMatrix, visited, w, result);
    }
  }

  return result;
}

function iterativeDFS(adjacencyMatrix, visited, startVertex) {
  const stack = [startVertex];
  const result = [];

  while (stack.length > 0) {
    let v = stack.pop();

    if (!visited[v]) {
      visited[v] = true;
      result.push(v);

      for (let idx = 0; idx < adjacencyMatrix[v].length; idx++) {
        let w = adjacencyMatrix[v][idx];

        if (!visited[w]) {
          stack.push(w);
        }
      }
    }
  }

  return result;
}

function depthFirstSearch(adjacencyMatrix, startVertex, useRecursive = true) {
  if (!Array.isArray(adjacencyMatrix) || adjacencyMatrix.length === 0) {
    return [];
  }

  if (startVertex < 0 || startVertex >= adjacencyMatrix.length) {
    return [];
  }

  const visited = Array(adjacencyMatrix.length).fill(false);

  if (useRecursive) {
    return recursiveDFS(adjacencyMatrix, visited, startVertex);
  } else {
    return iterativeDFS(adjacencyMatrix, visited, startVertex);
  }
}

module.exports = depthFirstSearch;
