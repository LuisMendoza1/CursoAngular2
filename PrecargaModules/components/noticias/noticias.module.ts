import { NgModule } from '@angular/core';
import { NoticiasComponent } from './noticias.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: NoticiasComponent
    }
];

@NgModule({
    declarations: [
        NoticiasComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class NoticiasModule { }