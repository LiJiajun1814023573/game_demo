class GameScene extends Scene {
	public hero1: Hero;
    public hero2: Hero;
	public game_button:eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	protected onComplete(){
        this.hero1 = new Hero(1,"foot");
        this.hero2 = new Hero(0,"foot");
        var mc1 = this.hero1.mc;
        var mc2 = this.hero2.mc;
        this.addEventListener(egret.Event.ENTER_FRAME,this.setP,this);
        this.addChild(mc1);
        this.addChild(mc2);
        this.game_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);

    }
	protected tap(e){
		let s1:EndScene = new EndScene();
		SceneManager.Instance.pushScene(s1);
	}
	public setP(){
        this.hero1.setTargetPosition(this.hero2.mc.x,this.hero2.mc.y);
        this.hero2.setTargetPosition(this.hero1.mc.x,this.hero1.mc.y);
    }
}