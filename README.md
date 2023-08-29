# DDEG - Dungeons & Dragons Encounter Generator - API

## Summary
API for [DDEG - Dungeons & Dragons Encounter Generator](https://github.com/hayleyashby7/DDEG)

Deployed to https://ddeg-api.cyclic.cloud/ 


## Tech Stack

### Server
- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
- [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
- [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)

### Database
- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
- [![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

### Testing
- [![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://jestjs.io/)


## Endpoints

### Encounter
```
POST /api/encounter
```
This takes an encounter request payload of
```
{
  character: number;
  level: number;
  difficulty: enum of ['Easy', 'Medium', 'Hard', 'Deadly'];
}
```
and currently returns either:
- An array of D&D monsters with a challenge rating appropriate to the requested encounter.
- An array of all D&D monsters and a null challenge rating when the challenge rating cannot be calculated.
```
{
    challengeRating: string | null;
    monsters: Monster[];
}
```

### Monsters

```
GET /api/monsters
```
 *This end point is considered legacy and is likely to be phased out.*

This takes a query parameter of `challenge_rating` and returns an array of D&D monsters with the matching challenge rating.

## Notes
Monster stats were initially sourced from [Open5e API](https://open5e.com/) under the Open Gaming License Version 1.0a

API key available on request.

