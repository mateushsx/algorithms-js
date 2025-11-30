const breadthFirstSearch = require('../../../algorithms/searching/breadth-first-search/index.js');

describe('Breadth First Search', () => {
  it('should return visited vertices in BFS order', () => {
    const adjMatrix = [[1, 4, 2], [5, 3], [3, 6], [1, 2, 4], [0, 3], [1], [2]];
    const startVertex = 0;
    const result = breadthFirstSearch(adjMatrix, startVertex);
    expect(result).toEqual([0, 1, 4, 2, 5, 3, 6]);
  });

  it('should return visited vertices starting from different vertex', () => {
    const adjMatrix = [
      [1, 2],
      [0, 2, 3],
      [0, 1, 4],
      [1, 4],
      [2, 3],
    ];
    const startVertex = 2;
    const result = breadthFirstSearch(adjMatrix, startVertex);
    expect(result).toEqual([2, 0, 1, 4, 3]);
  });

  it('should return empty array when adjacency matrix is empty', () => {
    const adjMatrix = [];
    const startVertex = 0;
    const result = breadthFirstSearch(adjMatrix, startVertex);
    expect(result).toEqual([]);
  });

  it('should return empty array when start vertex is out of bounds', () => {
    const adjMatrix = [
      [1, 2],
      [0, 2, 3],
      [0, 1, 4],
    ];
    const startVertex = 10;
    const result = breadthFirstSearch(adjMatrix, startVertex);
    expect(result).toEqual([]);
  });

  it('should return single vertex when start vertex has no neighbors', () => {
    const adjMatrix = [[]];
    const startVertex = 0;
    const result = breadthFirstSearch(adjMatrix, startVertex);
    expect(result).toEqual([0]);
  });

  it('should handle disconnected graph correctly', () => {
    const adjMatrix = [[1], [0], [3], [2]];
    const startVertex = 0;
    const result = breadthFirstSearch(adjMatrix, startVertex);
    expect(result).toEqual([0, 1]);
  });
});
