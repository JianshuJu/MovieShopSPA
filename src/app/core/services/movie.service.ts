import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/models/movie-card';
import { MovieDetail } from 'src/app/shared/models/movie-detail';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }
  getTop30GrossingMovies(): Observable<MovieCard[]> {

    return this.apiService.getAll('movie/toprevenue');

  }
  getMovieDetails(id: number): Observable<MovieDetail> {
    return this.apiService.getById('movie' , id);
  }

  getMoviesByGenre(genreId: number): Observable<MovieCard[]> {
    console.log("in movie service getMoviesByGenre")
    return this.apiService.getAll('movie/genre/'+ genreId);
  }
}
