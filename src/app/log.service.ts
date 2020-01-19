export class LogService{
    private loggedIn = true
    public log(message){
        if(this.loggedIn){
            console.log(message)
        }
    }
}