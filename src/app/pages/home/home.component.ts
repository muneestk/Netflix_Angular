import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  constructor(private service:MovieApiServiceService){}

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  scienceFictionMovieResult:any=[];
  thrillerMovieResult:any=[];



  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.adventureMovie();
    this.actionMovie();
    this.comedyMovie();
    this.animationMovie();
    this.scienceFictionMovie();
    this.thrillerMovie()
    this.documentaryMovieResult();
  }

  //bannerdata

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results
      
    })
  }

  trendingData()
  {
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'treandingresult#');
      this.trendingMovieResult = result.results
    })
  }

  //action
  actionMovie(){
    this.service.fetchActionMovie().subscribe((result)=>{
      console.log(result,'actonMovies#');
      this.actionMovieResult = result.results;
      
    })
  }

  //animation
  animationMovie(){
    this.service.fetchAnimationMovie().subscribe((result)=>{
      console.log(result,'animationMovies#');
      this.animationMovieResult = result.results;
      
    })
  }

  //adventure
  adventureMovie(){
    this.service.fetchAdventureMovie().subscribe((result)=>{
      console.log(result,'adventureMovies#');
      this.adventureMovieResult = result.results;
      
    })
  }

  //comedy
  comedyMovie(){
    this.service.fetchComedyMovie().subscribe((result)=>{
      console.log(result,'animationMovies#');
      this.comedyMovieResult = result.results;
      
    })
  }

  //documentry
  documentryMovie(){
    this.service.fetchDocumentryMovie().subscribe((result)=>{
      console.log(result,'documentryMovies#');
      this.documentaryMovieResult = result.results;
      
    })
  }


  //science fiction
  scienceFictionMovie(){
    this.service.fetchScienceFictionMovie().subscribe((result)=>{
      console.log(result,'sciencefictionMovies#');
      this.scienceFictionMovieResult = result.results;
      
    })
  }


  //thriller
  thrillerMovie(){
    this.service.fetchThrillerMovie().subscribe((result)=>{
      console.log(result,'sciencefictionMovies#');
      this.thrillerMovieResult = result.results;
      
    })
  }
}
