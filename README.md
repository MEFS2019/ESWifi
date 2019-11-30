# ESWifi

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

## About

ESWifi is a solution for domestic routers to easily make them secure, no technical skills needed.

## Getting started

### For users

Currently is available for Android app and iOS. We are working on a desktop app for Windows and Unix. You can get it [here](https://github.com/MEFS2019/ESWifi/packages).

### For developers

You can contribute with simple scripts, which are loaded into the application. These are the [standard](https://github.com/MEFS2019/ESWifi/wiki/3.-Add-new-firmware), we will be happy to receive your pull requests :)

#### Requirements

- Npm 6.4.1+.
- Android Studio or Xcode, depending on what platform do you want to compile.
- Java 8+.

#### How to install

```
git clone https://github.com/MEFS2019/ESWifi

cd ESWifi

npm install

```


#### Useful scripts to test the app

- `npm run start`: Serves the app with hot reload enabled. Useful for development.
- `npm run build`: Creates a production-ready build.
- `npm run build:sync`: Same as build, but also copies the built files to the native projects and adds any new native dependencies.
- `npm run open:[ios/android]`: Opens the native project in its corresponding IDE (Android Studio/Xcode).

### Documentation

For more information about the proyect, visit the [Wiki](https://github.com/MEFS2019/ESWifi/wiki/home).

### Features

#### OpenWRT

- [x] Change Wifi Password
- [x] Change Admin Password
- [x] Change SSID
- [x] NO WPS
- [x] Secure Cypher Algorithm
- [ ] Limit IPs
- [ ] Upload firmware
- [ ] Filter MAC
- [ ] Lower Power WiFi
- [ ] Visitors WiFi

#### Orange

- [ ] Change Wifi Password
- [x] Change Admin Password
- [ ] Change SSID
- [x] NO WPS
- [x] Secure Cypher Algorithm
- [ ] Limit IPs
- [ ] Upload firmware
- [ ] Filter MAC
- [ ] Lower Power WiFi
- [ ] Visitors WiFi

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Authors

* **Miguel Hernández Boza** ([@Miguel000](https://github.com/Miguel000))
* **Esperanza Bringas** ([@maesbrisa](https://github.com/maesbrisa))
* **Fernando Sanchiz** ([@ferquinz](https://github.com/ferquinz))
* **Santiago Espada** ([@SantiEspada](https://github.com/SantiEspada))
