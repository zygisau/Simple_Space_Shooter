import Game from './game';

function createRoot() {
    const element = document.createElement('div');
    element.setAttribute('id', 'root');
    return element;
}

function createCanvas(element) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    element.appendChild(canvas);
}

function app() {
    const rootDiv = createRoot();
    createCanvas(rootDiv);

    // Start the game
    document.addEventListener('DOMContentLoaded', () => new Game, false);

    return rootDiv;
  }
  
document.body.appendChild(app());