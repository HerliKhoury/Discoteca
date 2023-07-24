# Discoteca API

Gerencia um aplicativo de música onde é possível criar
playlists com suas músicas favoritas.


### Endpoints da aplicação:
| Método | Endpoint | Objetivo | Autorização Token |
|---|---|---|---|
| `POST` | `/login/` | Loga o usuário, gera Token | `Não` |
| `GET` | `/users` | Busca todos usuários cadastrados | `Não` |
| `POST` | `/users` | Cria um usuário | `Não` |
| `GET` | `/users/:id` |Busca usuário por id | `Não` |
| `PATCH` | `/users/:id` | Atualiza usuário por id | `Sim` |
| `DELETE` | `/users/:id` | Deleta usuário por id | `Sim` |
| `GET` | `/playlists` | Busca todas playlists existentes | `Não` |
| `POST` | `/playlists` | Cria uma playlist | `Sim` |
| `GET` | `/playlists/:id` | Busca playlist por id | `Não` |
| `PATCH` | `/playlists/:id` | Atualiza playlist por id | `Sim` |
| `DELETE` | `/playlists/:id` | Deleta playlist por id | `Sim` |
| `GET` | `/playlists/users/:id` | Busca todas playlists de um usuário por seu id | `Não` |
| `GET` | `/albums` | Busca todos albúns registrados | `Não` |
| `POST` | `/albums` | Cria um novo albúm | `Sim` |
| `GET` | `/albums/:id` | Busca albúm por id | `Não` |
| `DELETE` | `/albums/:id` | Deleta um albúm por id | `Não` |
| `GET` | `/tracks` | Busca todas as músicas cadastradas | `Não` |
| `POST` | `/tracks` | Cria uma ou várias músicas | `Sim` |
| `GET` | `/tracks/:id` | Busca música por id | `Não` |
| `DELETE` | `/tracks/:id` | Deleta música por id | `Sim` |
| `GET` | `/tracks/artists/:id` | Busca todas as músicas de um único artista por id | `Não` |
| `GET` | `/artists` | Busca todos artistas cadastrados | `Não` |
| `POST` | `/artists` | Cria um ou vários artistas | `Sim` |
| `GET` | `/artists/:id` | Busca artista por id | `Não` |
| `PATCH` | `/artists/:id` | Atualiza artista por id | `Sim` |
| `DELETE` | `/artists/:id` | Deleta artista por id | `Sim` |


### Diagrama de Entidade de Relacionamento

<blockquote class="imgur-embed-pub" lang="en" data-id="a/Dqnupdn"  ><a href="//imgur.com/a/Dqnupdn">Discoteca DER</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>