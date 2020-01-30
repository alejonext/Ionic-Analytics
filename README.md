# Ionic Analytics

Este es un proyecto, *EJEMPLO* de como activar Analytics Google con aplicacion Ionic!

Requisitos
* Acceso a [firebase](https://console.firebase.google.com)
* Acceso a [Analytics](https://analytics.google.com/analytics/web/)
* Acceso a este repo

## Configuracion del proyecto de Google Analytics y Firebase

* Crear la aplicacion en Firebase tanto para Android como iOS
* Descargar el archivo de configracion segun plataforma

> Nota: Se puede y lo mejor es usar el mismo Proyecto de Firebase para las notificaciones Push. recuerde que al crear el proyecto le pedira que se configure la conexion con Google Analytics.

## Instalar paquetes

Requisitos
* NPM/Nodejs
* Tener acceso a una consola/terminal

Abrir la consola en la carpeta del proyecto, y ejecutar las siguientes lineas *una por una*.

```bash
$ npm install
$ npm install -g @ionic/cli cordova
$ ionic cordova plugin add cordova-plugin-analytics 
$ npm install @ionic-native/analytics-firebase
```

> Nota: Si no se hace este paso el proyecto no compliara.

## Configuracion del proyecto de ionic

* Colocar cada archivo en `resources/[Nombre de la plataforma]/[archivo]`, asi como se encuenta en este proyecto.
* En el archivo `config.xml`, debera agregar las lienas demarcadas `++` (sin lo signos), como las que se encuentra en la parte inferior, a si mismo podra ver el ejemplo en el este archivo, para [android](https://github.com/alejonext/Ionic-Analytics/blob/master/config.xml#L24) y [iOS](https://github.com/alejonext/Ionic-Analytics/blob/master/config.xml#L47).

```xml
<platform name="android">
  <!-- Mas datos... -->
++ <resource-file src="resources/android/google-services.json" target="app/google-services.json" />
  <!-- Mas datos... -->
</platform>
<platform name="ios">
  <!-- Mas datos... -->
++ <resource-file src="src/env/GoogleService-Info.plist" />
  <!-- Mas datos... -->
</platform>
```

## Conectar con Ionic/Angular

* En el archivo `src/app/app.module.ts`, agregar la conexion

Al incio del archivo debera agregar esta liena, [asi](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/app.module.ts#L9)

```ts
import { AnalyticsFirebase } from '@ionic-native/analytics-firebase/ngx';
```

Al final debera agregar agregar la libreria, [asi](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/app.module.ts#L30)

```ts
// Mas Codigo...
  providers: [/* Mas importaciones */, AnalyticsFirebase]
```

> Nota: Tener cuidado cada elemento debe estar separado de una coma, es un Array en JavaScript

* Iniciar su uso en `src/app/app.component.ts` o `src/app/pages/[Nombre de mi pagina].pages.ts`. Dentro de cada compomente existe una clase, y un contructor de esta, cada construtor tiene unos argumentos, se agregara al final de estos argumentos.

Al incio del archivo debera agregar esta liena, [asi](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/app.component.ts#L4)

```ts
import { AnalyticsFirebase } from '@ionic-native/analytics-firebase/ngx';
```

Para usar se debe [asi](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/app.component.ts#L56)

```ts
export class MyPage implements OnInit {
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    public analyticsFirebase: AnalyticsFirebase //<-- Aqui
  ) {}
```

Con esto quedara disponible para el uso en cada uno de los compomentes o paginas.

### Enviando eventos!

Resueltos los pasos anteriores, procedemos a enviar eventos! Tendremos que usar el paquete agreado de la siguiente forma


### Para un evento simple

Para enviar un evento se puede sin/con parametros

* Sin, un [ejemplo](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/pages/support/support.ts#L38)

```ts
this.analyticsFirebase.logEvent('no_tutorial');
```

* Con, un [ejemplo](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/pages/about/about.ts#L24)

```ts
this.analyticsFirebase.logEvent('no_tutorial', {
  params : '2020-01-01'
});
```

### Para un evento de acceso de una Screen

Se lanza el evento cada vez que cambiendo de pantalla, de esta [forma](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/pages/schedule/schedule.ts#L46)

```ts
this.analyticsFirebase.setCurrentScreen('Home');
```

### Para determinar el UserId

Esto se usa para llevar analiticas de acuerdo uso de la aplicacion por usuario, en este caso (Del ejemplo) se [usa aqui](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/providers/user-data.ts#L37)

```ts
this.analyticsFirebase.setUserId('USER-ID');
```

En el caso que se requiera agragar mayor cantidad de informacion o datos del usuario, tales como sexo, edad, etc.. [Se usa asi](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/providers/user-data.ts#L53)

```ts
this.analyticsFirebase.setUserProperty('Nombre del dato', 'Dato');
```

### Remover todos los datos insertados

Este se usa cuando el usuario cierra sesion, [un ejemplo](https://github.com/alejonext/Ionic-Analytics/blob/master/src/app/providers/user-data.ts#L49)

```ts
this.analyticsFirebase.resetAnalyticsData();
```

# Mas documentacion

* [Ionic Analytics Firebase](https://ionicframework.com/docs/native/analytics-firebase)
* [Google Analytics Firebase Plugin](https://github.com/appfeel/analytics-google)
