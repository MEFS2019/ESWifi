# ESWifi

Proyecto Cybercamp 2019


![](https://github.com/MEFS2019/ESWifi/workflows/Android%20CI/badge.svgbranch=chore%2Fenable-ci)


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
