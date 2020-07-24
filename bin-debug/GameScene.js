var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this) || this;
    }
    GameScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameScene.prototype.onComplete = function () {
        this.first_hero.texture = RES.getRes("swordman_png");
        this.second_hero.texture = RES.getRes("bowman_png");
        this.hero11 = new Hero(1, 1, "foot");
        this.hero12 = new Hero(1, 2, "archer");
        ;
        this.hero21 = new Hero(2, 1, "archer");
        this.hero22 = new Hero(2, 2, "foot");
        var heros = [this.hero11, this.hero12, this.hero21,
            this.hero22,
        ];
        var mcs = [this.hero11.mc,
            this.hero12.mc,
            this.hero21.mc,
            this.hero22.mc,];
        heros[0].target = heros[2];
        heros[1].target = heros[3];
        heros[2].target = heros[0];
        heros[3].target = heros[1];
        for (var i = 0; i < 4; i++) {
            this.addChild(mcs[i]);
        }
        this.game_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
    };
    GameScene.prototype.tap = function (e) {
        var s1 = new EndScene();
        SceneManager.Instance.pushScene(s1);
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map