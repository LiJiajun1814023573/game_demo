class StartScene extends Scene {
	public start_button:eui.Button;
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
        
        this.start_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);

    }
	protected tap(e){
		let s1:GameScene = new GameScene();
		SceneManager.Instance.changeScene(s1);
	}
}