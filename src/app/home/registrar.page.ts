import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  frutas$: Observable<any[]>;

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    public loadingCtrl: LoadingController
  ) {
    this.frutas$ = new Observable<any[]>(); // Inicialización de frutas$
  }

  ngOnInit() {
    this.loadFrutas();
  }

  loadFrutas() {
    this.frutas$ = this.firestore.collection('frutas').valueChanges(); // Cargar las frutas desde Firestore como un observable
  }

  navigateToRegistrarFruta() {
    // Redirigir a la página de registro de frutas
    this.router.navigate(['/registrarfruta']);
  }
}
