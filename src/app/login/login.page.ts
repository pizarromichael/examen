import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   email: string = ''; // Inicialización en el modelo
  password: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth, private alertController: AlertController) { }

  ngOnInit() {
  }

  navigateToRegister() {
    this.router.navigate(['/registrar']); // Ruta a la página "registrar"
  }

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Usuario autenticado:', userCredential.user);
      if (userCredential.user) {
        // Verificar si el usuario tiene una cuenta activa y redirigirlo si es así
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.presentAlert('Datos incorrectos', 'Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.');
      this.clearFields(); // Limpiar campos después de mostrar el alert
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  clearFields() {
    this.email = '';
    this.password = '';
  }
  registrarse(){
  this.router.navigate(['/crearcuenta']);

}
}
