export class Cell {

    x = 0;
    y = 0;
    linkedTile = null;

    constructor(gridElement, x, y) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridElement.appendChild(cell);
        this.x = x;
        this.y = y;    
   
    }

    linkTile(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTile = tile;
    }

    isEmpty(){
        return !this.linkedTile;
    }

    unlinkTile() {
        this.linkedTile = null;
    }

    linkTileForMerge(tile){
        tile.setXY(this.x, this.y);
        this.linkedTileForMerge = tile;
    }

    canAccept(newTile) {
        return this.isEmpty() || (this.linkedTile.value === newTile.value && !this.linkedTileForMerge);
    }

    mergeTiles() {
        this.linkedTile.setValue(this.linkedTile.value * 2); 
        this.linkedTileForMerge.tileElement.remove();
        this.linkedTileForMerge = null;
    }
}