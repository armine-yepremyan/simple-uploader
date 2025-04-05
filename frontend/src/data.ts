import { faker } from "@faker-js/faker";


export const data = [
  ...Array(1000).keys()].map(key => ({
    make: faker.name.firstName(),
    model: faker.lorem.slug({ min: 1, max: 2}),
    price: faker.number.int({ max: 10000 }),
    electric: faker.datatype.boolean(),
  }));
