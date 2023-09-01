import {faker} from "@faker-js/faker";

export function generateDescription() {
    return faker.lorem.sentences(3);
}

export function generateFutureDate() {
    return faker.date.future().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
}

export function generatePastDate() {
    return faker.date.past().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
}

export function generateTag() {
    return faker.hacker.verb();
}