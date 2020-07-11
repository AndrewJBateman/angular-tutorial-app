import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = Math.floor(Math.random() * 100);
  serverStatus = "offline";

  // use a random number gen function to get a random status of on or offline
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  // function to return the random server status
  getServerStatus() {
    return this.serverStatus;
  }

  // function to show online status with a green background and offline with red.
  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
