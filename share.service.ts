import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public userData: string | undefined;
 
  constructor() { }
}