//Development script, remember to convert to production, but create a copy first
var game = new Kiwi.Game();
var gameState = new Kiwi.State( 'gameState' );
gameState.preload = function () {
    Kiwi.State.prototype.preload.call(this);
    this.addSpriteSheet( 'BertSprite', '../bin/spritesheet.png', 32, 32 );
    this.addImage( 'background', '../bin/space-background.png' );
};
myState.create = function(){
 
    Kiwi.State.prototype.create.call( this );
 
    this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.background, 0, 0 );
    this.character = new Kiwi.GameObjects.Sprite( this, this.textures.BertSprite, 50, 30 );
};
/*On two occasions I have been asked, ‘Pray, Mr. Babbage, if
you put into the machine wrong figures, will the right answers
come out?’ […] I am not able rightly to apprehend the kind of
confusion of ideas that could provoke such a question.”
—Charles Babbage, Passages from the Life of a Philosopher
(1864)*/