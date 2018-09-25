import { Component } from '@angular/core';
import { Server } from './server.component';

export class Cluster {
  public id: number;
  public name: string;
  public servers: Server[];
  public vcenter: number;

  constructor() {
  }
};
