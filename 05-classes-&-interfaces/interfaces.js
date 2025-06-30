var user;
user = {
    email: "test@example.com",
    password: "abc",
    login: function () {
        console.log("Logging in");
    },
    logout: function () {
        console.log("Logging out");
    },
};
// user.login(user.email, user.password);
// user.login()
// interface SumFn {
//   (a: number, b: number): number;
// }
// let sum: SumFn;
// sum = (a, b) => a + b;
var AuthenticableUser = /** @class */ (function () {
    function AuthenticableUser(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    AuthenticableUser.prototype.login = function () { };
    AuthenticableUser.prototype.logout = function () { };
    return AuthenticableUser;
}());
var a = new AuthenticableUser("Dil", "ab", "12");
console.log(a.email);
