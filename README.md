# DDEG - Dungeons & Dragons Encounter Generator - API

## Summary
API for [DDEG - Dungeons & Dragons Encounter Generator](https://github.com/hayleyashby7/DDEG)

Deployed to https://ddeg-api.cyclic.cloud/ 


## Tech Stack

### Server
- Node.js (Express)
- TypeScript
- Prisma ORM

### Database
- PostgreSQL database hosted on Supabase

### Testing
- Jest
- Supertest

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

