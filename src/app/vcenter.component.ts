import { Component } from '@angular/core';
import { Cluster } from './cluster.component'

export class Vcenter{
  public id: number;
  public name: string;
  public clusters: Cluster[];

  constructor() {
  }
};
