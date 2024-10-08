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

      console.log(`the vertex ${v} is being visited`);

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
