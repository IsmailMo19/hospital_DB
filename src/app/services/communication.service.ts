import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, of } from "rxjs";
import { Doctor } from "../../../../common/tables/Doctor";
import { HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommunicationService {
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private readonly http: HttpClient) {}

  private _listeners: any = new Subject<any>();

  private medecinsSubject = new BehaviorSubject<Doctor[]>([]);

  medecins$ = this.medecinsSubject.asObservable();

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterBy: string): void {
    this._listeners.next(filterBy);
  }

  getMedecins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/medecins`);
  }

  addMedecin(medecin: Doctor): Observable<Doctor> {
    return this.http
      .post<Doctor>(`${this.BASE_URL}/medecins/insert`, medecin)
      .pipe(catchError(this.handleError<Doctor>("addMedecin error")));
  }

  getServices(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.BASE_URL}/medecins/insert/services`)
      .pipe(catchError(this.handleError<any[]>("getServices")));
  }

  deleteMedecin(idMedecin: number): Observable<number> {
    return this.http
      .delete<number>(`${this.BASE_URL}/medecins/delete/${idMedecin}`)
      .pipe(catchError(this.handleError<number>("deleteMedecin")));
  }

  modifierMedecin(doctor: Doctor): Observable<Doctor> {
    const url = `${this.BASE_URL}/medecins/modification/${doctor.idmedecin}`;
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.put<Doctor>(url, doctor, { headers }).pipe(
      catchError((error: any) => {
        console.error("Erreur lors de la modification du médecin :", error);
        throw error;
      })
    );
  }

  updateMedecin(doctor: Doctor): Observable<Doctor> {
    const url = `${this.BASE_URL}/medecins/${doctor.idmedecin}`;
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.put<Doctor>(url, doctor, { headers }).pipe(
      catchError((error: any) => {
        console.error("Erreur lors de la modification du médecin :", error);
        throw error;
      })
    );
  }

  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }
}
