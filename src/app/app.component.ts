import {Component} from "@angular/core";
import {MenuController, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = 'tabsPage';


  constructor(platform: Platform,
              statusBar: StatusBar,
              private menuCtrl:MenuController,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.menuCtrl.enable(false);

    });

  }

}
