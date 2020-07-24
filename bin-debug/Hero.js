var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hero = (function () {
    function Hero(team, position, name) {
        // var data = RES.getRes("test_json");
        // var txtr = RES.getRes("test_png");
        // var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        // var mc1:egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("1"));
        // this.mc = mc1;
        this.heroMessage = {
            foot: {
                hp: 120,
                hpRecovery: 10,
                mp: 50,
                mpRecovery: 5,
                //生命，生命恢复，法力值，法力回复
                phyArmor: 10,
                manaArmor: 10,
                phyMissRate: 0.05,
                //物理防御，魔法防御，闪避几率
                phyDamage: 10,
                attackSpeed: 1,
                critRate: 0.3,
                //物理伤害，攻击速度，暴击率，暴击伤害需要单独做逻辑
                manaDamage: 5,
            },
            archer: {
                hp: 100,
                hpRecovery: 10,
                mp: 80,
                mpRecovery: 5,
                phyArmor: 3,
                manaArmor: 3,
                phyMissRate: 0.1,
                phyDamage: 25,
                attackSpeed: 1.2,
                critRate: 0.5,
                manaDamage: 5,
            },
            mage: {
                hp: 80,
                hpRecovery: 5,
                mp: 100,
                mpRecovery: 10,
                phyArmor: 2,
                manaArmor: 2,
                phyMissRate: 0.0,
                phyDamage: 5,
                attackSpeed: 1,
                critRate: 0.0,
                manaDamage: 20,
            }
        };
        this.img_sources = {
            foot: "swordman_png",
            archer: "bowman_png"
        };
        this.positions = {
            1: [80, 50],
            2: [40, 80],
        };
        this.mc = this.createEuiImageByName(this.img_sources[name]);
        //测试start
        console.log(this.img_sources['foot']);
        console.log(RES.getRes("swordman_png"));
        //end
        var mc = this.mc;
        mc.addEventListener(egret.Event.ENTER_FRAME, this.attackAndCheck, this);
        mc.width = 100;
        mc.height = 100;
        mc.top = this.positions[position][0];
        if (team == 1) {
            mc.left = this.positions[position][1];
        }
        else {
            mc.right = this.positions[position][1];
            mc.scaleX = -1;
        }
        this.hp = this.heroMessage[name].hp;
        this.hpRecovery = this.heroMessage[name].hpRecovery;
        this.mp = this.heroMessage[name].mp;
        this.mpRecovery = this.heroMessage[name].mpRecovery;
        this.phyArmor = this.heroMessage[name].phyArmor;
        this.manaArmor = this.heroMessage[name].manaArmor;
        this.phyMissRate = this.heroMessage[name].phyMissRate;
        this.phyDamage = this.heroMessage[name].phyDamage;
        this.attackSpeed = this.heroMessage[name].attackSpeed;
        this.critDamage = this.phyDamage * 2.0;
        this.critRate = this.heroMessage[name].critRate;
        this.manaDamage = this.heroMessage[name].manaDamage;
        //从英雄数据中获取数值
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
    Hero.prototype.attackAndCheck = function (event) {
        if (this.getHp() == 0) {
            this.mc.removeEventListener(egret.Event.ENTER_FRAME, this.attackAndCheck, this);
            this.mc.parent.removeChild(this.mc);
        }
        this.target.hp = this.target.hp - this.phyDamage;
        //Math.random()>critRate?phyDamage:phyDamage*2.0;
        //物理伤害公式，可计算是否暴击
    };
    Hero.prototype.getTarget = function (target) {
        this.target = target;
    };
    Hero.prototype.getHp = function () {
        return this.hp;
    };
    Hero.prototype.createEuiImageByName = function (name) {
        var result = new eui.Image();
        result.texture = RES.getRes(name);
        return result;
    };
    return Hero;
}());
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=Hero.js.map