import {createAction, props } from '@ngrx/store';

export const inc = createAction('incremento');
export const dec = createAction('decremento');
export const random = createAction('random');
export const saltar = createAction('saltar', props<{ num: number }>());
