import { ComponentProps } from 'react';

export type PickComponentParam<Component, Key> = ComponentProps<Component>[Key];
