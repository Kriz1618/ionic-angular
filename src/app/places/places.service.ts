import { Injectable } from '@angular/core';
import { Place } from './place.module';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://live.staticflickr.com/5106/5672669410_5d3333a10e_b.jpg',
      comments: ['Wonderfull', 'Beautifull place', 'nice']
    },
    {
      id: '2',
      title: 'San Cipriano',
      imageURL: 'https://macroviajesturismo.com/wp-content/uploads/2019/08/rio-san-cipriano.jpg',
      comments: ['Awesome', 'Beautifull place', 'nice']
    },
    {
      id: '3',
      title: 'Test San Cipriano',
      imageURL: 'https://macroviajesturismo.com/wp-content/uploads/2019/08/rio-san-cipriano.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    }
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      id: this.places.length + 1 + '',
      comments: [],
    })
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
