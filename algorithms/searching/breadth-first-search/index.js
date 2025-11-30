function breadthFirstSearch(adjMatrix, startVertex) {
  if (!Array.isArray(adjMatrix) || adjMatrix.length === 0) {
    return [];
  }

  if (startVertex < 0 || startVertex >= adjMatrix.length) {
    return [];
  }

  const queue = [startVertex];
  const visited = Array(adjMatrix.length).fill(false);
  const result = [];

  while (queue.length > 0) {
    let v = queue.shift();

    if (!visited[v]) {
      visited[v] = true;
      result.push(v);

      const neighbors = adjMatrix[v];

      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

module.exports = breadthFirstSearch;
