# Angular Tutorial App

A simple Angular 8 app to display a list of servers and indicate whether the server is on or offline. Server names can be added to the list.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

This course project is to help learn about basic Angular concepts, including using components, data & property binding, the formsmodule etc.

## Screenshots

![Example screenshot](./img/server-name-and-status.png).

## Technologies

* [Angular CLI v8.0.1](https://github.com/angular/angular-cli)

* [RxJS Library v6.5.2](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.

* [Angular Augury Chrome Extension](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) v1.23.0 used for debugging.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Code Examples

* _server component with functions used to generate html template data._

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  // use a random number gen function to get a random status of on or offline
  constructor() {
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  // function to return the random server status
  getServerStatus() {
    return this.serverStatus;
  }

  // function to show online status with a green background and offline with red.
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

```

## Features

* Server names can be added via a form-control input field.

* The background color of each server in the list changes depending on the online status of the server.

## Status & To-Do List

* Status: Working.

* To-Do:

1. Look at error 'Component 'SuccessAlertComponent' is not included in a module and will not be available inside a template. Consider adding it to a NgModule declaration'

1. Document code and add functionality.

## Inspiration

All code is from [Maximilian Schwarzmüller's Angular 7 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
