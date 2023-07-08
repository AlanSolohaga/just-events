import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  goToWhatsapp(){
    const numeroTelefono = '+543865571470';
    const url = `https://wa.me/${numeroTelefono}`;
    window.open(url, '_blank');
    console.log("click")
  }

  goToInstagram(){
    console.log("ig")
  }

  goToFacebook(){
    const url = `https://www.facebook.com/profile.php?id=100063475064741`;
    window.open(url, '_blank');
    console.log("click")
  }
}
