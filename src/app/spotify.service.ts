import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQAv7iaPhyFkIn2JZ6tQYa2qoVPY-SprRZ6AEmXB7OVSWgAyoyaesFlURfHc9SmhucEG2pD3KWCn3zjvf8q1_a-3SqSgU6iNtIipN1SBj0nZRdEWQpkL-_lWgGCrNepEX_wK56B7GsEBoa81i_1LpewLJ6C1mjuqleyWVrFR9b8V"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
