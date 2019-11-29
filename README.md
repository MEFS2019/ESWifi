# ESWifi

Proyecto Cybercamp 2019

Snyk: [![Known Vulnerabilities](https://snyk.io/test/github/MEFS2019/ESWifi/badge.svg?targetFile=android/app/build.gradle)](https://snyk.io/test/github/MEFS2019/ESWifi?targetFile=android/app/build.gradle)

Greenkeeper: [![Greenkeeper badge](https://badges.greenkeeper.io/MEFS2019/ESWifi.svg)](https://greenkeeper.io/)

Actions:
![](https://github.com/MEFS2019/ESWifi/workflows/Android%20CI/badge.svg)
![](https://github.com/MEFS2019/ESWifi/workflows/APK%20lint%20analysis/badge.svg)

Lgtm: [![Total alerts](https://img.shields.io/lgtm/alerts/g/MEFS2019/ESWifi.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/MEFS2019/ESWifi/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/MEFS2019/ESWifi.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/MEFS2019/ESWifi/context:javascript)

Sonarcloud: [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=alert_status)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=bugs)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=code_smells)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=security_rating)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=sqale_index)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=ncloc)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=MEFS2019_ESWifi&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=MEFS2019_ESWifi)







## Useful scripts

- `start`: Serves the app with hot reload enabled. Useful for development.
- `build`: Creates a production-ready build.
- `build:sync`: Same as build, but also copies the built files to the native projects and adds any new native dependencies.
- `open:[ios/android]`: Opens the native project in its corresponding IDE (Android Studio/Xcode).

## Propuesta enviada

MEF - ESWifi: configuración de Wi-Fis para usuario final sin conocimientos técnicos.

Queremos que cualquier persona pueda tener configurada de manera segura su punto de acceso WiFi sin necesidad de ser técnico y con la mínima interacción posible con el portal de administración. Para realizar esta configuración se seguirán las buenas practicas proporcionadas por [INCIBE](https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia-de-seguridad-en-redes-wifi.pdf)

Uno de los problemas principales es la poca homogeneidad entre proveedores de servicio. Los más conocidos son:
- Movistar
- MasMovil
- Vodafone
- Orange
- Yoigo

Para esté hackathon trataremos de realizar las pruebas en dos entornos distintos, uno de ellos utilizando un router flasheando con un sistema OpenSource como es [OpenWRT](https://openwrt.org/) y por otro lado utilizaremos uno de proveedor de Orange (Livebox Fibra). La idea es que no sea dependiente del proveedor y la aplicación sea capaz de realizar las configuraciones de todas ellas.

# Hito 1

Montar la infraestructura y la fase de diseño y flujo de la configuración.

![Componentes](/Imagenes/Inicio.jpg)

Utilizaremos para el desarrollo de la aplicación [Ionic](https://ionicframework.com/) y [Capacitor](https://capacitor.ionicframework.com/)

La funcionalidad inicial será la de poder conectarnos a la wifi del usuario mediante las credenciales que nos proporcione. Una vez veamos que son correctas, comprobaremos la robustez de la contraseña.

Para comprobar la robustez podemos utilizar algún servicio que compruebe si aparece en un fuga de datos como puede ser [HaveIBeenPwen](https://haveibeenpwned.com/API/v3#PwnedPasswords) o comprobando manualmente si sigue unas mínimas reglas de seguridad, como las que proporciona [OSI](https://www.osi.es/es/contrasenas#robustas).

Debemos asegurarnos que la contraseña tenga:

- longitud mínima de ocho caracteres
- mayúsculas
- minúsculas
- números
- símbolos
