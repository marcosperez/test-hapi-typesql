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

## PGAdmin en docker

```
docker run -p 55555:80 \
-e "PGADMIN_DEFAULT_EMAIL=admin@mail.com" \
-e "PGADMIN_DEFAULT_PASSWORD=admin" \
--net local \
-d dpage/pgadmin4
```

## Crear BD desde PGAdmin

- buscar IP de postgres

```
 docker network inspect bridge
```

## lanzar aplicacion

```
npm start
```
