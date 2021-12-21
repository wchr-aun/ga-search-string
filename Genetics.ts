function newChar() {
  let c = Math.floor(Math.random() * (123 - 63) + 63);
  if (c === 63) c = 32;
  if (c === 64) c = 46;

  return String.fromCharCode(c);
}

export class Genetics {
  genes: any[];
  fitness: number;
  crossoverRate: number;
  mutationRate: number;

  constructor(num: number, crossoverRate: number, mutationRate: number) {
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < num; i++) {
      this.genes[i] = newChar();
    }
    this.crossoverRate = crossoverRate;
    this.mutationRate = mutationRate;
  }

  getPhrase(): string {
    return this.genes.join("");
  }

  calcFitness(target: string): void {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == target.charAt(i)) {
        score++;
      }
    }
    this.fitness = score / target.length;
  }

  crossover(partner: Genetics): Genetics {
    let child = new Genetics(
      this.genes.length,
      this.crossoverRate,
      this.mutationRate
    );

    let midpoint = Math.floor(Math.random() * (this.genes.length + 1));

    for (let i = 0; i < this.genes.length; i++) {
      if (Math.random() < this.crossoverRate) {
        if (i > midpoint) child.genes[i] = this.genes[i];
        else child.genes[i] = partner.genes[i];
      }
    }
    return child;
  }

  mutate(): void {
    for (let i = 0; i < this.genes.length; i++)
      if (Math.random() < this.mutationRate) this.genes[i] = newChar();
  }
}
