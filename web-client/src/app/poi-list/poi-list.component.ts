import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend-service.service';

@Component({
  selector: 'app-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {

  public poiList: any = null;
  public searchString: string = '';

  constructor(private backendService: BackendService) { }

  async ngOnInit() {
    this.poiList = await this.backendService.GetPOIs();
  }

  async onKey(event: any) {
    if(event.which == 13)    
      this.poiList = await this.backendService.FilterByTitle(this.searchString);        
  }

  public goTo(id: string){
    console.log(id);
  }
}
