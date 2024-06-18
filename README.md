# Pathfinding Visualizer

LINK: https://algo-path-finder-visualiser.netlify.app/

## Overview

**Pathfinding Visualizer** is a web application built with React that visualizes the Dijkstra algorithm, a popular pathfinding algorithm used to find the shortest path between nodes in a graph. This project is designed to provide an interactive way to understand how the algorithm works, making it easier for users to see the steps involved in finding the shortest path from a start node to a finish node on a grid.

## Features

- **Interactive Grid**: Users can create walls on the grid by clicking and dragging the mouse.
- **Visualization**: Visualizes the Dijkstra algorithm step-by-step, highlighting visited nodes and the shortest path.
- **Reset Functionality**: Allows users to reset the grid to its initial state with a single click.

## Technologies Used

- **React**: For building the user interface and handling state.
- **CSS**: For styling the grid and nodes.
- **JavaScript**: For implementing the Dijkstra algorithm and other functionalities.

## Project Structure

The project consists of the following components:

- **Node Component**: Renders each node in the grid, handling mouse events.
- **PathfindingVisualizer Component**: Manages the state of the grid and controls the visualization process.
- **Dijkstra Algorithm Implementation**: Contains the logic for the Dijkstra algorithm, including the functions `dijkstra` and `getNodesInShortestPathOrder`.
