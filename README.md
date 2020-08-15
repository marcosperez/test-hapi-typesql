# Ejecucion

## Requerimientos

- nodejs 12 o mayor
- pgadmin
- docker o bd local

## Instalacion de paquetes

npm install

## Iniciar base de datos

```
docker run -p 5432:5432 --name postgresdb -e POSTGRES_PASSWORD=postgres -d postgres
```

## lanzar aplicacion

```
npm start
```
