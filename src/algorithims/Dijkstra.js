// const node = {
//   row,
//   col,
//   isVisited,
//   distance,
// };

export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  if (!startNode || !finishNode || !startNode === finishNode) {
    return false;
  }

  // const nodes = [];
  //   nodes[startNode].distance = 0;
  startNode.distance = 0;
  //   const unvistedNodes = nodes.slice();
  const unvistedNodes = getAllNodes(grid);
  while (!!unvistedNodes.length) {
    sortedNodeByDistance(unvistedNodes);
    const closestNode = unvistedNodes.shift();

    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) {
      return visitedNodesInOrder;
    }
    updateNeighbours(closestNode, grid);
  }
}
function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}
function sortedNodeByDistance(unvistedNodes) {
  unvistedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateNeighbours(node, grid) {
  const neighbours = getNeighbours(node, grid);
  for (const neighbour of neighbours) {
    neighbour.distance = node.distance + 1;
  }
}

function getNeighbours(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}
