//为维持可拓展性，可分子类继承Hero
class Hero{
    public mc:eui.Image;
    public flag:number;
    public targetx:number;
    public targety:number;
    
    public maxhp:number;
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
    public target:Hero;
    public team:number;

    public heroMessage = {
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
        public img_sources = {
            foot:"swordman_png",
            archer:"bowman_png",
            mage: "mage_png"
        };
        public positions = {
            1: [40,50],
            2: [80,100]
        }
    constructor(team:number,position:number,name:string){
        // var data = RES.getRes("test_json");
        // var txtr = RES.getRes("test_png");
        // var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        // var mc1:egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("1"));
        // this.mc = mc1;
        
        this.mc = this.createEuiImageByName(this.img_sources[name]);


        var mc  = this.mc;  
        mc.addEventListener(egret.Event.ENTER_FRAME,this.attackAndCheck,this);
        mc.width = 80 ;
        mc.height = 80;
        mc.top = this.positions[position][0];
        if(team == 1){
            mc.left = this.positions[position][1];           
        }else {
            mc.scaleX = -1;
            mc.right = this.positions[position][1];
        }
        this.hp = this.heroMessage[name].hp;
        this.maxhp = this.hp;
        this.hpRecovery = this.heroMessage[name].hpRecovery;
        this.mp = this.heroMessage[name].mp;
        this.mpRecovery = this.heroMessage[name].mpRecovery;
        this.phyArmor = this.heroMessage[name].phyArmor;
        this.manaArmor = this.heroMessage[name].manaArmor;
        this.phyMissRate = this.heroMessage[name].phyMissRate;
        this.phyDamage = this.heroMessage[name].phyDamage;
        this.attackSpeed = this.heroMessage[name].attackSpeed;
        this.critDamage = this.phyDamage*2.0;
        this.critRate = this.heroMessage[name].critRate;
        this.manaDamage = this.heroMessage[name].manaDamage;
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
    public attackAndCheck(event:egret.TouchEvent):void{
        if(this.getHp() == 0){
            this.mc.removeEventListener(egret.Event.ENTER_FRAME,this.attackAndCheck,this);
            this.mc.parent.removeChild(this.mc);
        }         
            this.target.hp = this.target.hp - this.phyDamage;
                //Math.random()>critRate?phyDamage:phyDamage*2.0;
                //物理伤害公式，可计算是否暴击
    }
    public getTarget(target:Hero):void{
        this.target = target;
    }
    public getHp(){
        return this.hp;
    }
    private createEuiImageByName(name: string): eui.Image {
        let result = new eui.Image();
        result.texture = RES.getRes(name);
        return result;
    }
}