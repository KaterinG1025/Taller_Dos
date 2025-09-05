import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid, IonRow,IonCol,IonItem,IonInput,IonImg, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule,IonContent,IonHeader,IonTitle,IonToolbar,IonGrid,IonRow,IonCol,IonItem,IonInput,IonImg, IonButton,IonIcon]
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
    
  }

  login() {
    console.log('Usuario:', this.username, 'Contraseña:', this.password);
  }

  googleLogin() {
    console.log('Iniciar sesión con Google');
    
  }

}
