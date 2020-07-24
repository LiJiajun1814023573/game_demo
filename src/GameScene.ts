class GameScene extends Scene {
	public hero11: Hero;
    public hero12: Hero;
    public hero13: Hero;
    public hero21: Hero;
    public hero22: Hero;
    public hero23: Hero;
	
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
        this.hero11 = new Hero(1,1,"foot");
		this.hero12 = new Hero(1,2,"archer");
		this.hero13 = new Hero(1,3,"archer");
		this.hero21 = new Hero(2,2,"archer");
		this.hero22 = new Hero(2,1,"foot");
		this.hero23 = new Hero(2,3,"foot");
		var heros = [this.hero11,this.hero12,this.hero13,this.hero21,
		this.hero22,this.hero23,
		]
		var mcs= [this.hero11.mc, 
		this.hero12.mc,
		this.hero13.mc,
		this.hero21.mc,
		this.hero22.mc,
		this.hero23.mc];
        heros[0].target = heros[3];
		heros[1].target = heros[4];
		heros[2].target = heros[5];
		heros[3].target = heros[0];
		heros[4].target = heros[1];
		heros[5].target = heros[2];
        for (let i = 0; i < 6; i++ ){
		this.addChild(mcs[i]);
		}
        this.game_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);

    }
	protected tap(e){
		let s1:EndScene = new EndScene();
		SceneManager.Instance.pushScene(s1);
	}

}