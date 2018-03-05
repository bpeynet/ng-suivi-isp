import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../http.service';
import { Version } from '../version';

@Component({
  selector: 'versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {

  public versions: Observable<Version[]>;

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.versions = this.http.get('versions');
  }

}
