import { LngLat } from "../interfaces/geolocation.interface";
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LocationErrorDialogComponent } from "src/app/location-error-dialog/location-error-dialog.component";
import { Subscription, map, Observable } from "rxjs";
import { Breakpoints } from "../shared.constants";
import { BreakpointObserver } from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root',
})
export class DefineCurrentLocationService implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private isMobile: boolean = false;
  private isMobile$: Observable<boolean> = this.breakpointObserver
  .observe([Breakpoints.Mobile])
  .pipe(map((result) => result.matches));

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.isMobile$.subscribe(isMobile => this.isMobile = isMobile)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  defineCurrentLocation(): Promise<LngLat> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }

  openLocationErrorDialog(): void {
    this.dialog.open(LocationErrorDialogComponent, {
      disableClose: true,
      width: this.isMobile ? 'max-content' : '320px',
    });
  }
}
