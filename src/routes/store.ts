import { writable, type Writable } from 'svelte/store'

export const selectedCountryKey: Writable<string> = writable('ca')
