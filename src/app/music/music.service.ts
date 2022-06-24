import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from './music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private serverApi = 'https://music-api-2022.herokuapp.com/documentation'

  constructor(private httpClient: HttpClient) { }

  getMusicList() : Observable<Music[]> {
    return this.httpClient.get<Music[]>(this.serverApi)
  }

  createMusic(music: Music) : Observable<Music> {
    return this.httpClient.post<Music>(this.serverApi, music)
  }

  updateMusic(music: Music) : Observable<Music> {
    return this.httpClient.put<Music>(this.serverApi + music.forro, music)
  }

  deleteMusic(musicId: number) : Observable<any> {
    return this.httpClient.delete(this.serverApi + musicId, {
      headers: undefined,
      context: undefined,
      observe: undefined,
      params: undefined,
      reportProgress: undefined,
      responseType: 'text'
    })
  }
}
