class PopLayerManager{
    public static readonly instance: PopLayerManager = new PopLayerManager();
    
    public static getInstance(){
        return PopLayerManager.instance;
    }
    
}