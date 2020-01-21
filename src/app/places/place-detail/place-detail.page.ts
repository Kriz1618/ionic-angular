import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.module';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activateRoute: ActivatedRoute, private plasesService: PlacesService, private router: Router ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId');
      this.place = this.plasesService.getPlace(recipeId);
      console.log('21 this.place', this.place);
    })
  }

  deletePlace() {
    this.plasesService.deletePlace(this.place.id);
    this.router.navigate(['/places']);
  }

}
