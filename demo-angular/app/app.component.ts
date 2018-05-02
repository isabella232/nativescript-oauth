import { Component } from "@angular/core";
import * as tnsOAuthModule from 'nativescript-oauth';
import * as dialogs from 'ui/dialogs';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public onTapLogin() {
        tnsOAuthModule.loginAuthCode()
            .then(() => {
                console.log("AuthCode: " + tnsOAuthModule.authCode());
            })
            .catch((er) => {
                console.error('error logging in');
                console.dir(er);
            });

        // tnsOAuthModule.ensureValidToken()
        //     .then((token: string) => {
        //         console.log('Token: ' + token);
        //     })
        //     .catch((er) => {
        //         console.error('error logging in');
        //         console.dir(er);
        //     });
    }

    public onTapLogout() {
        tnsOAuthModule.logout()
            .then(() => console.log('logged out'))
            .catch((er) => {
                console.error('error logging out');
                console.dir(er);
            });
    }

    public authcallback() {
        console.log('yay callback');
    }
}
