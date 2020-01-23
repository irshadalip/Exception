export class AuthService {
    private isLoggedIn = false;
    isAuthenticated() {
        return this.isLoggedIn;
    }
    login() {
        this.isLoggedIn = true
    }
    logout() {
        this.isLoggedIn = false
    }
}