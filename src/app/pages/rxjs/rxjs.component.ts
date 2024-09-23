import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscribable, Subscription, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{
  public intervaSubs: Subscription | undefined;
  constructor() {

    //suscribirse al intervalo
    // es otra forma de hacerlo
    /*    this.retornaIntervalo().subscribe(console.log);*/
    this.intervaSubs = this.retornaIntervalo().subscribe(
      (valor)=>console.log(valor)
    );
    //como cancelar la suscripcion



    /*
    this.retornaObservable().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('subs:',valor),
      error => console.warn('error:',error),
      () => console.info('obs terminado')
    );*/
  }
  ngOnDestroy(): void {
    this.intervaSubs?.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    const interval$=interval(500)
    .pipe(
      take(10),
      map(valor=>valor+1),
      filter(valor=>(valor%2===0)?true:false)
    );
    return interval$;
  }

  retornaObservable(): Observable<number> {
    let i=-1;

    const obs$ = new Observable <number>( observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i===4) {
          clearInterval(intervalo);//funcion nativa de javascript
          observer.complete();
        }

        if (i===2) {
          i=0;
          observer.error('i llego al valor de 2');
        }



      }, 1000);
    });

    return obs$;
  }
}
