import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage {
  email: string = '';
  password: string = ''; // Mantén la contraseña como string

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Validar entrada solo numérica
  validateNumericInput(event: any) {
    const input = event.target.value;
    // Eliminar caracteres no numéricos
    this.password = input.replace(/[^0-9]/g, '');
  }

  register() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log('Cuenta creada con éxito:', user);
        this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
      })
      .catch(error => {
        console.error('Error al crear la cuenta:', error);
        alert('Error al crear la cuenta: ' + error.message); // Muestra un mensaje de error
      });
  }
}
