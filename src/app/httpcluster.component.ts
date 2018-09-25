import { Component } from '@angular/core';
import { HttpClusterService } from './httpcluster.service'
import { Cluster } from './cluster.component'

@Component({
  selector: 'app-root',
  templateUrl: './cluster.component.html',
  providers: [HttpClusterService]
})
export class HttpClusterComponent {
  clusters: Cluster[];
  cluster: Cluster;

  constructor(private httpClusterS: HttpClusterService) {
    this.cluster = new Cluster();
    this.getClusters();
  }

  getClusters() {
    this.httpClusterS.getClusters().subscribe(
      clusters => this.clusters = clusters,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addClusters() {
    this.httpClusterS.addCluster(this.cluster).subscribe(
      data => data,
      error => alert(error),
      () => this.getClusters()
    );
  }

    updateCluster() {
      this.httpClusterS.updateCluster(this.cluster).subscribe(
        data => data,
        error => alert(error),
        () => this.getClusters()
      );
  }

  loadCluster(cluster: Cluster) {
    this.cluster = new Cluster();
    this.cluster.id = cluster.id;
    this.cluster.name = cluster.name;
    //this.cluster.vcenter = vcenter.cluster;
  }

}
