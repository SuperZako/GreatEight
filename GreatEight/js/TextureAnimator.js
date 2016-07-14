var TextureAnimator = (function () {
    function TextureAnimator(texture, tilesHorizontal, tilesVertical, numberOfTiles, tileDisplayDuration) {
        // note: texture passed by reference, will be updated by the update function.
        this.texture = texture;
        this.tilesHorizontal = tilesHorizontal;
        this.tilesVertical = tilesVertical;
        this.numberOfTiles = numberOfTiles;
        this.tileDisplayDuration = tileDisplayDuration;
        this.currentDisplayTime = 0; // how long has the current image been displayed?
        this.currentTile = 0; // which image is currently being displayed?
        //this.tilesHorizontal = tilesHoriz;
        //this.tilesVertical = tilesVert;
        // how many images does this spritesheet contain?
        //  usually equals tilesHoriz * tilesVert, but not necessarily,
        //  if there at blank tiles at the bottom of the spritesheet.
        //this.numberOfTiles = numTiles;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1 / this.tilesHorizontal, 1 / this.tilesVertical);
        // how long should each image be displayed?
        //this.tileDisplayDuration = tileDispDuration;
    }
    TextureAnimator.prototype.update = function (milliSec) {
        var texture = this.texture;
        this.currentDisplayTime += milliSec;
        while (this.currentDisplayTime > this.tileDisplayDuration) {
            this.currentDisplayTime -= this.tileDisplayDuration;
            this.currentTile++;
            if (this.currentTile == this.numberOfTiles)
                this.currentTile = 0;
            var currentColumn = this.currentTile % this.tilesHorizontal;
            texture.offset.x = currentColumn / this.tilesHorizontal;
            var currentRow = Math.floor(this.currentTile / this.tilesHorizontal);
            texture.offset.y = currentRow / this.tilesVertical;
        }
    };
    return TextureAnimator;
}());
//# sourceMappingURL=TextureAnimator.js.map