class GameScene extends Scene {
	public hero11: Hero;
    public hero12: Hero;
    public hero21: Hero;
    public hero22: Hero;
	public first_hero: eui.Image;
	public second_hero: eui.Image;
	public timer: eui.Image;
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
        this.game_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);

    }
	protected tap(e){
		let s1:EndScene = new EndScene();
		SceneManager.Instance.pushScene(s1);
	}

}