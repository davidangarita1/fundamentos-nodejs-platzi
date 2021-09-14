# Curso de Fundamentos de NodeJS Platzi

## Variables de entorno nodeJs
Podemos acceder a variables de entorno desde nuestro codigo en nodeJs de la siguiente forma:
```javascript
let nombre_variable = process.env.NOMBRE || 'Sin nombre';
```

Hemos almacenado una variable de entorno en nuestra variable 'nombre_variable', Ahora desde la consola le asignamos valor y ejecutamos node asi:

```
$	NOMBRE=Ejemplo node index.js
```

## Herramientas recomendadas para trabajar con node en modo desarrollo
### Nodemon
Sirve para configurar un watcher que este pendiente de los cambios de nuestro codigo y nos muestre en consola sin tener que ejecutarlo cada vez, se utiliza en modo desarrollo, para instalar localmente en tu proyecto ejecuta:
```
$	npm install nodemon -D
```

o tambien para instalarlo globalmente en tu sistema operativo:
```
$	npm install -g nodemon
```

Para utilizar nodemon ejecutamos:
```
$ nodemon mi_proyecto.js
```

### PM2
Es similar a nodemon pero mas avanzada y se usa para producción, para instalar localmente en tu proyecto ejecuta:
```
$	npm install pm2 -D
```

o tambien para instalarlo globalmente en tu sistema operativo:
```
$	npm install -g pm2
```

Para utilizar PM2 basico ejecutamos:
```
$	pm2 start mi_proyecto.js
```

Para ver la ejecución de PM2 ejecutamos el comando:
```
$	pm2 status
```

Para ver los logs de PM2:
```
$	pm2 logs
```

Para parar todos los procesos de pm2:
```
$	pm2 stop
```