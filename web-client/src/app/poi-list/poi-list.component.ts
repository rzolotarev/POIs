import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {

  public poiList: any = null;
  public searchString: string = '';

  constructor(private backendService: BackendService, private router: Router) { }

  async ngOnInit() {
    this.poiList = await this.backendService.GetPOIs();
  }

  async onKey(event: any) {
    if(event.which == 13)    
      this.poiList = await this.backendService.FilterByTitle(this.searchString);        
  }

  public goTo(poi: any) {    
    this.router.navigate([`/${poi.type}/`, poi._id]);    
  }
}
