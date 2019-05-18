import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'lista-trenes', loadChildren: './lista-trenes/lista-trenes.module#ListaTrenesPageModule' },
  { path: 'searchbar', loadChildren: './searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'tickets', loadChildren: './tickets/tickets.module#TicketsPageModule' },
  { path: 'ticket-info', loadChildren: './ticket-info/ticket-info.module#TicketInfoPageModule' },  { path: 'contactanos', loadChildren: './contactanos/contactanos.module#ContactanosPageModule' },
  { path: 'listahoteles', loadChildren: './listahoteles/listahoteles.module#ListahotelesPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
