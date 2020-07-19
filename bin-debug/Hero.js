var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hero = (function () {
    function Hero(team) {
        var data = RES.getRes("test_json");
        var txtr = RES.getRes("test_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("1"));
        this.mc = mc1;
        var that = this;
        this.mc.addEventListener(egret.Event.ENTER_FRAME, this.move, this);
        this.mc.anchorOffsetX = 53;
        this.mc.anchorOffsetY = 58.5;
        this.mc.scaleX = 1;
        this.mc.x = 53;
        this.mc.y = 458.5;
        this.targetx = 1000;
        this.targety = 1000;
        this.hp = 100;
        this.flag = 1;
        if (team == 1) {
            this.team = 1;
        }
        else {
            this.team = 0;
            this.mc.x = 500;
            this.mc.scaleX = -1;
        }
    }
    Hero.prototype.move = function (event) {
        if (this.hp == 0) {
            this.mc.removeEventListener(egret.Event.ENTER_FRAME, this.move, this);
            this.mc.parent.removeChild(this.mc);
        }
        if (this.mc.hitTestPoint(this.targetx, this.targety)) {
            if (this.flag == 1) {
                this.mc.gotoAndPlay("attack1", 1);
                this.flag = 0;
            }
            else {
                this.mc.gotoAndPlay("attack2", 1);
                this.flag = 1;
            }
            this.hp = this.hp - 10;
        }
        else {
            if (this.flag == 1) {
                this.mc.gotoAndPlay("move1", 1);
                this.flag = 0;
            }
            else {
                this.mc.gotoAndPlay("move2", 1);
                this.flag = 1;
            }
            if (this.team == 1) {
                this.mc.x = this.mc.x + 4;
            }
            else {
                this.mc.x = this.mc.x - 4;
            }
        }
    };
    Hero.prototype.setTargetPosition = function (targetx, targety) {
        this.targetx = targetx;
        this.targety = targety;
    };
    Hero.prototype.getHp = function () {
        return this.hp;
    };
    return Hero;
}());
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=Hero.js.map