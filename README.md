<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Hashing Passwords
- In contrast to `encryption`, `hashing` is a one-way mechanism. Once `hashing` has been done, it should be impossible to go from the output to the input.
- `Salting` is the act of adding a serie of random characters to replace before gone through the `hashing` function
```
nest g module iam
nest g service iam/hashing
nest g service iam/hashing/bcrypt --flat
```

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
