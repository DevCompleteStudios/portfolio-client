import { Injectable, signal } from '@angular/core';
import { IComent } from '../pages/home/interfaces/IComent';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IResponse } from './interfaces/IResponseDto';
import { IAddComent } from './interfaces/IAddComent';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {

  private coments = signal<IComent[]>([]);
  private url: string = `http://localhost:3000/api/coments`;
  private page = 0;
  private elementsByPage = 10;


  constructor(
    private http:HttpClient,
  ){}


  public addComent( coment: IAddComent ):Observable<IResponse<IComent>> {
    return this.http.post<IResponse<IComent>>(`${this.url}/add-coment`, coment)
      .pipe(
        tap( res => this.addComents([res.data]) )
      );
  }

  public get getComents():IComent[]{
    return this.coments();
  }

  public getMoreComents(): Observable<IResponse<IComent[]>> {
    return this.http.get<IResponse<IComent[]>>(`${this.url}/find-all?page=${this.page}&elements=${this.elementsByPage}`)
      .pipe(
        tap( data => this.addComents(data.data) ),
        tap( () => this.page++ )
      );
  }

  private addComents(newComents: IComent[]){
    this.coments.set([...this.coments(), ...newComents]);
  }

}
