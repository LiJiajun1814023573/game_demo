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
//定义的eui.Image和eui.Button都可以直接获取，
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
        this.first_hero.texture = RES.getRes("mage_png");
        this.second_hero.texture = RES.getRes("bowman_png");
        this.hero11 = new Hero(1, 1, "mage");
        this.hero12 = new Hero(1, 2, "archer");
        ;
        this.hero21 = new Hero(2, 1, "foot");
        this.hero22 = new Hero(2, 2, "mage");
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
        //倒计时
        this.time_label.text = "60";
        var timer = new egret.Timer(1000, 60);
        timer.addEventListener(egret.TimerEvent.TIMER, onTimer, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        timer.start();
        function onTimer(evt) {
            this.time_label.text--;
        }
        function onTimerComplete(evt) {
        }
        this.skill_11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_11_onTouch, this); //技能按钮监听器
        this.skill_12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_12_onTouch, this);
        this.skill_13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_13_onTouch, this);
        this.skill_21.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_21_onTouch, this);
        this.skill_22.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_22_onTouch, this);
        this.skill_23.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_23_onTouch, this);
        this.game_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
        5;
    };
    GameScene.prototype.skill_11_onTouch = function (e) {
        if (this.hero11.mp >= 20) {
            this.hero21.hp -= 20;
            this.hero11.mp -= 20;
        }
    };
    GameScene.prototype.skill_12_onTouch = function (e) {
        if (this.hero11.mp >= 20) {
            this.hero12.phyDamage += 5;
            this.hero11.mp -= 20;
        }
    };
    GameScene.prototype.skill_13_onTouch = function (e) {
        if (this.hero11.mp >= 50) {
            this.hero21.mp -= 40;
            this.hero22.mp -= 40;
            this.hero11.mp -= 50;
        }
    };
    GameScene.prototype.skill_21_onTouch = function (e) {
        if (this.hero11.mp >= 20) {
            this.hero22.hp -= 20;
            this.hero12.hp += 20;
        }
    };
    GameScene.prototype.skill_22_onTouch = function (e) {
        if (this.hero11.mp >= 20) {
            this.hero22.hp -= 40;
            this.hero12.mp -= 20;
        }
    };
    GameScene.prototype.skill_23_onTouch = function (e) {
        if (this.hero11.mp >= 50) {
            this.hero21.hp -= 30;
            this.hero22.hp -= 30;
            this.hero21.phyArmor -= 5;
            this.hero22.phyArmor -= 5;
            this.hero12.mp -= 50;
        }
    };
    GameScene.prototype.tap = function (e) {
        var s1 = new EndScene();
        SceneManager.Instance.pushScene(s1);
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map