class EndScene extends Scene{
	public end_panel:eui.Panel;
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
		this.end_panel.title = "结算数据";
    }
	
}