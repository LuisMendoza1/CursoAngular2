import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { CustomPreloadStrategy } from './custom-preload'; */
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
    {
        path: 'contacto',
        loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
    },
    {
        path: 'noticias',
        loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasModule)
    },
    {
        path: 'informacion',
        loadChildren: () => import('./informacion/informacion.module').then(m => m.InformacionModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: QuicklinkStrategy
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }