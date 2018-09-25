import { Component } from '@angular/core';
import { HttpVcenterService } from './httpvcenter.service'
import { Vcenter } from './vcenter.component'

@Component({
  selector: 'app-root',
  templateUrl: './vcenter.component.html',
  providers: [HttpVcenterService]
})
export class HttpVcenterComponent {
  vcenters: Vcenter[];
  vcenter: Vcenter;

  constructor(private httpVcenterS: HttpVcenterService) {
    this.vcenter = new Vcenter();
    this.getVcenters();
  }

  getVcenters() {
    this.httpVcenterS.getVcenters().subscribe(
      vcenters => this.vcenters = vcenters,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addVcenter() {
    this.httpVcenterS.addVcenter(this.vcenter).subscribe(
      data => data,
      error => alert(error),
      () => this.getVcenters()
    );
  }

    updateVcenter() {
      this.httpVcenterS.updateVcenter(this.vcenter).subscribe(
        data => data,
        error => alert(error),
        () => this.getVcenters()
      );
  }

  loadVcenter(vcenter: Vcenter) {
    this.vcenter = new Vcenter();

    this.vcenter.id = vcenter.id;
    this.vcenter.name = vcenter.name;
  }

}
