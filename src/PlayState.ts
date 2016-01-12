/// <reference path="../lib/phaser.d.ts" />
/// <reference path="Player.ts"/>
/// <reference path="PlayerUp.ts"/>
module states {

    export class PlayState extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        playerUp: PlayerUp;

        create() {
            this.background = this.add.sprite(0, 0, "level1");
            this.music = this.add.audio("zap", 1, false);
            this.music.play();

            this.player = new Player(this.game, 130, 284);
            this.playerUp = new PlayerUp(this.game, 250, 100);
        }

    }

}
