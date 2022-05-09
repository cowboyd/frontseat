import { Seed } from 'https://deno.land/x/seed@1.0.0/index.ts';

const NIILO_AGE = 12;
const SAARA_AGE = 10;

const TotalYearsOnEarth = NIILO_AGE + SAARA_AGE;

const NIILO_PROBABILITY = NIILO_AGE / TotalYearsOnEarth;
const SAARA_PROBABILITY = SAARA_AGE / TotalYearsOnEarth;

console.log('Niilo Probability', NIILO_PROBABILITY);
console.log('Saara Probability', SAARA_PROBABILITY);

let random = crypto.randomUUID();

let seed = new Seed(random);
console.log('seed', random);

let trial = seed.randomFloat();

console.log('trial', trial);

console.log("\n");

if (trial < NIILO_PROBABILITY) {
  console.log('====> Niilo');
} else {
  console.log('====> Saara');
}
