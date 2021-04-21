import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieDetail } from 'src/app/shared/models/movie-detail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetail | undefined;
  id: number = 0;
  isAuthenticated = true;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService, private movieService: MovieService) { }

  ngOnInit(): void {
    // console.log("In movie-details component");
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    this.route.paramMap.subscribe(
      params => {
        // this.id = Number(!params.get('id'));
        this.id = this.route.snapshot.params['id'];
        this.getMovieDetails();
      }
    );
  }

  private getMovieDetails() {
    if (this.id) {
      this.movieService.getMovieDetails(this.id)
        .subscribe(m => {
          this.movie = m;
        });
    }
    console.log("the id got by paramMap: " + this.id);
  }

}
