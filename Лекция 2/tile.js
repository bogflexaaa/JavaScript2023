export class Tile {

    x = 0;
    y = 0;
    value = 0;   

    tileElement = null;

    constructor(gridElement){
        
        this.tileElement = document.createElement('div');
        this.tileElement.classList.add('tile');
        this.setValue(Math.random() > 0.5 ? 2 : 4);
        gridElement.appendChild(this.tileElement);
    }

    setXY(x,y) {
        this.x = x;
        this.y = y;
        this.tileElement.style.setProperty('--x', x);
        this.tileElement.style.setProperty('--y', y);
    }

    setValue(value) {
        this.value = value;
        this.tileElement.textContent = value;
        const bgLightness = Math.log2(value) * 20;
        this.tileElement.style.backgroundColor = `hsl(25, 60%, ${bgLightness}%)`;
        this.tileElement.style.color = bgLightness > 50 ? 'hsl(20, 25%, 10%)' : 'hsl(20, 25%, 90%)';
    }
}