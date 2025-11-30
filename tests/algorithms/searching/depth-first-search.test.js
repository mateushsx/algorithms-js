const depthFirstSearch = require('../../../algorithms/searching/depth-first-search/index.js');

describe('Depth First Search', () => {
  it('should return visited vertices using recursive DFS', () => {
    const adjacencyMatrix = [
      [1, 2],
      [0, 2, 3],
      [0, 1, 4],
      [1, 4],
      [2, 3],
    ];
    const startVertex = 0;
    const result = depthFirstSearch(adjacencyMatrix, startVertex, true);
    expect(result).toEqual([0, 1, 2, 4, 3]);
  });

  it('should return visited vertices using iterative DFS', () => {
    const adjacencyMatrix = [
      [1, 2],
      [0, 2, 3],
      [0, 1, 4],
      [1, 4],
      [2, 3],
    ];
    const startVertex = 0;
    const result = depthFirstSearch(adjacencyMatrix, startVertex, false);
    expect(result).toEqual([0, 2, 4, 3, 1]);
  });

  it('should return empty array when adjacency matrix is empty', () => {
    const adjacencyMatrix = [];
    const startVertex = 0;
    const result = depthFirstSearch(adjacencyMatrix, startVertex);
    expect(result).toEqual([]);
  });

  it('should return empty array when start vertex is out of bounds', () => {
    const adjacencyMatrix = [
      [1, 2],
      [0, 2, 3],
      [0, 1, 4],
    ];
    const startVertex = 10;
    const result = depthFirstSearch(adjacencyMatrix, startVertex);
    expect(result).toEqual([]);
  });

  it('should return single vertex when start vertex has no neighbors', () => {
    const adjacencyMatrix = [[]];
    const startVertex = 0;
    const result = depthFirstSearch(adjacencyMatrix, startVertex);
    expect(result).toEqual([0]);
  });

  it('should use recursive DFS by default', () => {
    const adjacencyMatrix = [
      [1, 2],
      [0, 2, 3],
      [0, 1, 4],
      [1, 4],
      [2, 3],
    ];
    const startVertex = 0;
    const result = depthFirstSearch(adjacencyMatrix, startVertex);
    expect(result).toEqual([0, 1, 2, 4, 3]);
  });
});
