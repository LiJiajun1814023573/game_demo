//定义的eui.Image和eui.Button都可以直接获取，
class GameScene extends Scene {
	public hero11: Hero;
    public hero12: Hero;
    public hero21: Hero;
    public hero22: Hero;
	public first_hero: eui.Image;
	public second_hero: eui.Image;
	public timer: eui.Image;
//通过遮罩来得到控制血量和蓝量长度
	public health_1:eui.Image;
	public health_2:eui.Image;
	
	public mana_1:eui.Image;
	public mana_2:eui.Image;
	
	public game_button:eui.Button;
//改变text来改动时间
	public time_label: eui.Label;

//设置skill按钮的enabled属性控制是否禁用
	public skill_11: eui.Button;//各英雄1,2号技能为单体，3号技能为aoe
	public skill_12: eui.Button;
	public skill_13: eui.Button;
	public skill_21: eui.Button;
	public skill_22: eui.Button;
	public skill_23: eui.Button;
	public constructor() {
		super();
	}

	protected 

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	protected onComplete(){

		this.first_hero.texture = RES.getRes("mage_png");
		this.second_hero.texture = RES.getRes("bowman_png");
        this.hero11 = new Hero(1,1,"mage");
		this.hero12 = new Hero(1,2,"archer");;
		this.hero21 = new Hero(2,1,"foot");
		this.hero22 = new Hero(2,2,"mage");
		var heros = [this.hero11,this.hero12,this.hero21,
		this.hero22,
		]
		var mcs= [this.hero11.mc, 
		this.hero12.mc,
		this.hero21.mc,
		this.hero22.mc,];
        heros[0].target = heros[2];
		heros[1].target = heros[3];
		heros[2].target = heros[0];
		heros[3].target = heros[1];
        for (let i = 0; i < 4; i++ ){
		this.addChild(mcs[i]);
		}
		
		//倒计时
		this.time_label.text = "60" ;
		var timer:egret.Timer = new egret.Timer(1000,60);
		timer.addEventListener(egret.TimerEvent.TIMER,onTimer,this);
		timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,onTimerComplete,this);
		timer.start();
		function onTimer(evt:egret.TimerEvent):void {
        	this.time_label.text--;
		}
		function onTimerComplete(evt:egret.TimerEvent):void {
        	
		}

		this.skill_11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_11_onTouch, this);//技能按钮监听器
		this.skill_12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_12_onTouch, this);
		this.skill_13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_13_onTouch, this);
		this.skill_21.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_21_onTouch, this);
		this.skill_22.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_22_onTouch, this);
		this.skill_23.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skill_23_onTouch, this);
		this.game_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);5
    }

	protected skill_11_onTouch(e){//单体伤害技能
		if(this.hero11.mp>=20)
		{this.hero21.hp-=20;

		this.hero11.mp-=20;}
	}

	protected skill_12_onTouch(e){//单体增益技能
		if(this.hero11.mp>=20)
		{this.hero12.phyDamage+=5;

		this.hero11.mp-=20;}
	}

	protected skill_13_onTouch(e){//群体沉默技能
		if(this.hero11.mp>=50)
		{this.hero21.mp-=40;
		this.hero22.mp-=40;

		this.hero11.mp-=50;}
	}

	protected skill_21_onTouch(e){//单体吸血技能
		if(this.hero11.mp>=20)
		{this.hero22.hp-=20;

		this.hero12.hp+=20;}
	}

	protected skill_22_onTouch(e){//单体伤害技能
		if(this.hero11.mp>=20)
		{this.hero22.hp-=40;

		this.hero12.mp-=20;}
	}

	protected skill_23_onTouch(e){//群体破防技能
		if(this.hero11.mp>=50)
		{this.hero21.hp-=30;
		this.hero22.hp-=30;
		this.hero21.phyArmor-=5;
		this.hero22.phyArmor-=5;

		this.hero12.mp-=50;}
	}

	protected tap(e){
		let s1:EndScene = new EndScene();
		SceneManager.Instance.pushScene(s1);
	}

}