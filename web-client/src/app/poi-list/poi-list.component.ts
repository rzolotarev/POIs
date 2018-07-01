import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend-service.service';

@Component({
  selector: 'app-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {

  public poiList: any = null;
  constructor(private backendService: BackendService) { }

  async ngOnInit() {
    this.poiList = await this.backendService.GetPOIs();
  }

}
