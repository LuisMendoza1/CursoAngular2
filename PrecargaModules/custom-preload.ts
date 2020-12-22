import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { loadavg } from "os";
import { of } from "rxjs/internal/observable/of";

export class CustomPreloadStrategy implements PreloadingStrategy {
    preload(route: Route, Load: () => Observable<any>): Observable<any> {
        if (route.data && route.data.preload) {
            return load();
        } else {
            return of(null);
        }
        
    }
}