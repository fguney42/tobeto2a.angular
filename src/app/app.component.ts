import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';          // RouterOutlet sınıfı içe aktarır ve angular/router modulunu kullanır//
import { FormComponent } from './components/form/form.component';

// Component'i, kullanmak istiyorsam 1.import 2.Html dosyasında form component tag'ini kullanmamız gerekir.// html dosyasına vereceğimiz tag selector'den alınır.//
// annotation,attribute,decorator(frontend)

export interface IUser{ // Model(interface)
  password : string;
  username : string;
  email: string;
}
export var  newUser : IUser = 
{
  password : '',
  username : '',
  email : '',
}
export class Customer // Export başka bir yerden erişilebilir hale getirir öğeyi // Model(class)
{
  protected protectedElement : string = "";
  private privateElement : string = "";
  public publicElement : string = "";
 // Default constructor tanımlamana gerek yok  hata veriyor zaten c#'daki gibi gerekmiyor da .
 // Constructor Scope'da erişilebilir parametreler  // constructor erişim belirteci alabilir//
  protected constructor(public id : number, public name : string,  public email : string){
    console.log("${this.id}");
  }
  // console.log("${this.id}")
   // Default public olarak kabul edilir //  
}
export class customer extends Customer // extends ile kalıtım verebiliriz.
{
  constructor()
   {
    super(1,"123","123");
  }
}
@Component({
  selector: 'app-root', // <app-root> <app-root/>
  standalone: true,
  imports: [RouterOutlet,FormComponent], // import ettiği moduller RouterOutlet sayfa değişlikliği için modul farklı (kendi oluşturduklarımız dahil)componentleri de ekleyebiliriz//
  templateUrl: './app.component.html', // Çoğul olmaz bir adet html dosyası olmalı//
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // görüntü parçalanarak işlenir.
  title : string = 'angular2a';
  exampleThisScopeElement : number = 0; // genel olarak sayısal değerleri içerisinde depolayabilir (number type) //
  example : IUser = {password : "123",email : "furkan@gmail.com",username : "furkan"};
  
   // ngModel  <input [(ngModel)]="message" />
  // <p>{{ message }}</p> // buradaki ngModel appcomponent içerisinde bir elemanı ile  ilişkilendirmek için kullanılır. // AppComponent kısmından//
  // İnterface'ler,Class'lar api'den alınan veya gonderilen veriler için kullanılır // 
  onBtnChangeClick(event : Event)
  { 
    var nameElement = document.getElementById('name')  as HTMLInputElement;
    var emailElement = document.getElementById('email')  as HTMLInputElement;
    var passwordElement = document.getElementById('password') as HTMLInputElement;
    var outputElement = document.getElementById('output');

    newUser.password = "Şifreniz : ";
    newUser.email = "emailiniz : ";
    newUser.username = "isminiz : ";
    if (outputElement)
    console.log( newUser.password + nameElement.value + newUser.email + emailElement.value + newUser.username + nameElement.value);
     return ;
}

// onChange(event:Event)
// {
//   let elemnt = event.target as HTMLInputElement; // herhangi bir event'ten veri almak için kullanılır//
//   console.log(newUser.email); // event gerçekleştirdikten sonraki veri //
//   this.inputValue = elemnt.value;
// }
}
// ngModeller genel olarak interface ve class'lardır.
 // Araştırma :  // ngModel kulllanıcıdan alınan verilerin veya kullanıcıya verilen verilerin anlık olarak senkronize olmasını sağlar//
 //  two-way-Data-binding :  bir veri modelindeki değişiklikler otomatik olarak kullanıcı arayüzünü günceller ve aynı şekilde kullanıcı arayüzündeki değişiklikler de veri modelini günceller.
