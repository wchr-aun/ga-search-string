import { Population } from "./Population";

function evolution(
  target: string,
  N: number,
  crossoverRate: number,
  mutationRate: number
): string {
  let population = new Population(target, crossoverRate, mutationRate, N);

  console.log("## Evolving ##");
  while (!population.isFinished()) {
    population.naturalSelection();
    population.generate();
    population.calcFitness();
    population.evaluate();
    console.log(population.getBest());
  }
  console.log("## DONE ##");
  return population.getBest();
}

const best = evolution("WCHR.AUN", 200, 1, 0.01);
console.log(best);
