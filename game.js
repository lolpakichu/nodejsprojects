var config = {
    type:Phaser.AUTO,
    width:512,
    height:512,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y:200}
        }
    },
    scene: [ scene ]
};

var player;

var platforms;

var game = new Phaser.Game(config);