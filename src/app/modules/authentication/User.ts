export class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private token: string;
    private newToken: boolean;

    constructor(firstName: string, lastName: string, email: string, token: string, newToken: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.token = token;
        this.newToken = newToken;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getEmail(): string {
        return this.email;
    }

    public getToken(): string {
        return this.token;
    }

    public getNewToken(): boolean {
        return this.newToken;
    }
}