class Hero{
    public mc:egret.MovieClip;
    public flag:number;
    public targetx:number;
    public targety:number;
    
    public hp:number;
    public hpRecovery:number;
    public mp:number;
    public mpRecovery:number;
    public phyArmor:number;
    public manaArmor:number;
    public phyMissRate:number;
    public phyDamage:number;
    public attackSpeed:number;
    public critDamage:number;
    public critRate:number;
    public manaDamage:number;

    public team:number;
    public heroNumber = {
    foot:{
        hp:120,
        hpRecovery:10,
        mp:50,
        mpRecovery:5,
        //生命，生命恢复，法力值，法力回复
        phyArmor:10,
        manaArmor:10,
        phyMissRate:0.05,
        //物理防御，魔法防御，闪避几率
        phyDamage:10,
        attackSpeed:1,
        critRate:0.3,
        //物理伤害，攻击速度，暴击率，暴击伤害需要单独做逻辑
        manaDamage:5,
        //魔法伤害
    },
    archer:{
        hp:100,
        hpRecovery:10,
        mp:80,
        mpRecovery:5,

        phyArmor:3,
        manaArmor:3,
        phyMissRate:0.1,

        phyDamage:25,
        attackSpeed:1.2,
        critRate:0.5,
        
        manaDamage:5,
    },
    mage:{
        hp:80,
        hpRecovery:5,
        mp:100,
        mpRecovery:10,

        phyArmor:2,
        manaArmor:2,
        phyMissRate:0.0,

        phyDamage:5,
        attackSpeed:1,
        critRate:0.0,
        
        manaDamage:20,
    }
};

    constructor(team:number,name:string){
        var data = RES.getRes("test_json");
        var txtr = RES.getRes("test_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        var mc1:egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("1"));
        this.mc = mc1;
        var that = this;
        this.mc.addEventListener(egret.Event.ENTER_FRAME,this.move,this);
        this.mc.anchorOffsetX = 53;
        this.mc.anchorOffsetY = 58.5;
        this.mc.scaleX = 1;
        this.mc.x = 53;
        this.mc.y = 458.5;
        this.targetx = 1000;
        this.targety = 1000;

        this.hp = this.heroNumber[name].hp;
        this.hpRecovery = this.heroNumber[name].hpRecovery;
        this.mp = this.heroNumber[name].mp;
        this.mpRecovery = this.heroNumber[name].mpRecovery;
        this.phyArmor = this.heroNumber[name].phyArmor;
        this.manaArmor = this.heroNumber[name].manaArmor;
        this.phyMissRate = this.heroNumber[name].phyMissRate;
        this.phyDamage = this.heroNumber[name].phyDamage;
        this.attackSpeed = this.heroNumber[name].attackSpeed;
        this.critDamage = this.phyDamage*2.0;
        this.critRate = this.heroNumber[name].critRate;
        this.manaDamage = this.heroNumber[name].manaDamage;
        //从英雄数据中获取数值

        this.flag = 1;
        if(team == 1){
            this.team = 1;
        }else{
            this.team = 0;
            this.mc.x = 500;
            this.mc.scaleX = -1; 
        }
    }
    public move(event:egret.TouchEvent):void{
        if(this.getHp() == 0){
            this.mc.removeEventListener(egret.Event.ENTER_FRAME,this.move,this);
            this.mc.parent.removeChild(this.mc);
        }
        if(this.mc.hitTestPoint(this.targetx,this.targety)){
                if(this.flag == 1){
                    this.mc.gotoAndPlay("attack1",1);
                    this.flag = 0;
                }else{
                    this.mc.gotoAndPlay("attack2",1);                    
                    this.flag = 1; 
                }
                this.hp = this.hp - this.phyDamage;
                //Math.random()>critRate?phyDamage:phyDamage*2.0;
                //物理伤害公式，可计算是否暴击
        }else{
                if(this.flag == 1){
                    this.mc.gotoAndPlay("move1",1);
                    this.flag = 0;
                }
                else{
                    this.mc.gotoAndPlay("move2",1);
                    this.flag = 1;
                }
            if (this.team == 1){      
                this.mc.x = this.mc.x + 4;
            }else{
                this.mc.x = this.mc.x - 4;
            }
        }    
    }
    public setTargetPosition(targetx,targety):void{
        this.targetx = targetx;
        this.targety = targety;
    }
    public getHp(){
        return this.hp;
    }
}