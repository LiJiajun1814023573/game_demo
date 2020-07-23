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
        this.hero1 = new Hero(1, "foot");
        this.hero2 = new Hero(0, "foot");
        var mc1 = this.hero1.mc;
        var mc2 = this.hero2.mc;
        this.addEventListener(egret.Event.ENTER_FRAME, this.setP, this);
        this.addChild(mc1);
        this.addChild(mc2);
        this.game_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
    };
    GameScene.prototype.tap = function (e) {
        var s1 = new EndScene();
        SceneManager.Instance.pushScene(s1);
    };
    GameScene.prototype.setP = function () {
        this.hero1.setTargetPosition(this.hero2.mc.x, this.hero2.mc.y);
        this.hero2.setTargetPosition(this.hero1.mc.x, this.hero1.mc.y);
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map