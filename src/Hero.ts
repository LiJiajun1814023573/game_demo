class Hero{
    public mc:egret.MovieClip;
    public flag:number;
    public targetx:number;
    public targety:number;
    public hp:number;
    public team:number;
    constructor(team:number){
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
        this.hp = 100;
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
        if(this.hp == 0){
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
                this.hp = this.hp - 10;
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