import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieCard } from 'src/app/shared/models/movie-card';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {
  movies: MovieCard[] = [];
  genreId: number | undefined;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        // this.id = Number(!params.get('id'));
        this.genreId = this.route.snapshot.params['id'];
        this.getMovieByGenres();
      }
    );
  }

  private getMovieByGenres() {
    this.movieService.getMoviesByGenre(this.genreId!).subscribe(
      movies => this.movies = movies
    )
    console.log(this.movies);
  }

}
