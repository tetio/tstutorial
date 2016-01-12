/// <reference path="../lib/phaser.d.ts" />
module states {
    export class PlayerUp extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "osaa", 0);
            this.anchor.setTo(0.5, 0);
            this.inputEnabled = true;
            this.input.enableDrag(true);
            this.events.onDragStop.add(this.onDragStop);

            game.physics.arcade.enableBody(this);
            game.add.existing(this);
        }

        update() {
            this.body.velocity.y = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y = -150;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y = 150;
            }
            if (this.body.velocity.x != 0 || this.body.velocity.y != 0) {
                console.log("Mv(" + this.body.position.x + ", " + this.body.position.y + ")");
            }
        }

        onDragStop(currentSprite: Phaser.Sprite) {
            console.log("D&D(" + currentSprite.position.x + ", " + currentSprite.position.y + ")");
        }
    }
}