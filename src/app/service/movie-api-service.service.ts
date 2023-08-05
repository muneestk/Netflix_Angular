import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  //banner api data

  bannerApiData():Observable<any>
  {
  return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  // trendingmoviedata
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }

  //search movie
  getSearchMovie(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)

  }

  //movie details
  getMovieDetails(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}&query=${data.movieName}`)

  }

  //movie video
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
 
  }

  //movie cast 
  getMovieCast(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)

  }

  //action

  fetchActionMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
 
  }

  //adventure

  fetchAdventureMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
 
  }
  //animation

  fetchAnimationMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
 
  }

  //comedy

  fetchComedyMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
 
  }

  //documentry

  fetchDocumentryMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
 
  }

  //science fiction

  fetchScienceFictionMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
 
  }

  //thriller

  fetchThrillerMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
 
  }





}
