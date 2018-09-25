import { Component } from '@angular/core';
import { HttpServerService } from './httpserver.service'
import { HttpClusterService } from './httpcluster.service'
import { Server } from './server.component'
import { Cluster } from './cluster.component'

@Component({
  selector: 'app-root',
  templateUrl: './server.component.html',
  providers: [HttpServerService, HttpClusterService]
})
export class HttpServerComponent {
  servers: Server[];
  clusters: Cluster[];
  server: Server;
  cluster: Cluster;

  constructor(private httpServerS: HttpServerService, private httpClusterS: HttpClusterService) {
    this.server = new Server();
    this.cluster = new Cluster();
    this.getServers();
    this.getClusters();
  }

  getServers() {
    this.httpServerS.getServers().subscribe(
      servers => this.servers = servers,
      error => alert(error),
      () => console.log('terminou servers')
    );
  }


  getClusters(){
    this.httpClusterS.getClusters().subscribe(
      clusters => this.clusters = clusters,
      error => alert(error),
      () =>console.log('terminou cluster')
    )
  }

  getCluster(id: number){
    console.log(id);
    console.log(this.clusters.filter(cluster => cluster.id == id)[0]);
  }


  addServer() {
    this.httpServerS.addServer(this.server).subscribe(
      data => data,
      error => alert(error),
      () => this.getServers()
    );
  }

    updateServer() {
      this.httpServerS.updateServer(this.server).subscribe(
        data => data,
        error => alert(error),
        () => this.getServers()
      );
  }

  loadServer(server: Server) {
    this.server = new Server();
    this.server.id = server.id;
    this.server.name = server.name;
    this.server.ip = server.ip;
    this.server.operatingSystem = server.operatingSystem;
    this.server.system = server.system;
    this.server.subSystem = server.subSystem;
    this.server.cluster = server.cluster;
  }

}
