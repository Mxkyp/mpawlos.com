---
  title: Docker Compose
---
<!-- Backlinks -->
[](./Docker.md)
<!-- Backlinks -->

## Simply 
A docker compose file specifies the desired *state/configuration* of the microservice app.

## Usage and commands
Configuration in **compose.yml**.

### creation and shutdown
(1) docker compose up - build the app
(2) docker compose down - shut it down

### scaling 
(1) **docker compose up --scale (SERVICE)=(NUMBER)** - creates number instances of the service container. Only for the given session.
