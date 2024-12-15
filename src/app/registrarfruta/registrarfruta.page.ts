import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registrarfruta',
  templateUrl: './registrarfruta.page.html',
  styleUrls: ['./registrarfruta.page.scss'],
})
export class RegistrarfrutaPage implements OnInit {
  fruta = {
    nombre: '',
    descripcion: '',
    precio: '',
    imagenUrl: '' // Solo almacena la URL de la imagen como una cadena de texto
  };

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async registerFruta() {
    if (this.formValidation()) {
      let loader;
      try {
        // Mostrar indicador de carga
        loader = await this.loadingCtrl.create({
          message: "Espere por favor ....",
        });
        await loader.present();

        // Convertir precio a float y validar
        const precio = parseFloat(this.fruta.precio);
        if (isNaN(precio)) {
          throw new Error("Precio inválido");
        }

        // Guardar la fruta en Firestore
        const frutaData = {
          nombre: this.fruta.nombre,
          descripcion: this.fruta.descripcion,
          precio: precio,
          imagenUrl: this.fruta.imagenUrl // URL de la imagen
        };
        await this.firestore.collection('/frutas').add(frutaData);
        console.log("Fruta registrada exitosamente");

        // Mostrar mensaje de éxito
        this.showToast("Fruta registrada exitosamente");

        // Redirigir a la página principal o cualquier otra página
        this.router.navigate(['/home']);
      } catch (error: any) {
        console.error("Error al registrar la fruta:", error);
        this.showToast("Error al registrar la fruta: " + error.message);
      } finally {
        if (loader) {
          await loader.dismiss();
        }
      }
    } else {
      console.log("Validación fallida");
    }
  }

  formValidation() {
    if (!this.fruta.nombre || !this.fruta.descripcion || !this.fruta.precio || !this.fruta.imagenUrl) {
      this.showToast("Por favor, complete todos los campos.");
      return false;
    }
    return true;
  }

  async showToast(message: string) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = 2000;
    document.body.appendChild(toast);
    return toast.present();
  }
}
