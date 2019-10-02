import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then(m => m.ProdukPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tambah-produk',
    loadChildren: () => import('./tambah-produk/tambah-produk.module').then(m => m.TambahProdukPageModule)
  },
  {
    path: 'keranjang',
    loadChildren: () => import('./keranjang/keranjang.module').then(m => m.KeranjangPageModule)
  }
  //{ path: 'tambah-produk', loadChildren: './tambah-produk/tambah-produk.module#TambahProdukPageModule' },
  //{ path: 'keranjang', loadChildren: './keranjang/keranjang.module#KeranjangPageModule' },
  //{ path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
