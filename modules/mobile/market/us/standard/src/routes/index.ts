import { Home } from '../screens/Home/Home';
import { PayFrom } from '../screens';
import { PayTo } from '../screens';
import { Amount } from '../screens/Amount/Amount';
import { When } from '../screens/When/When';
import { Review } from '../screens/Review/Review';
import { Alert } from '../screens/Alert/Alert';
import type { ComponentType } from 'react';

export type TInternalRoutes = Record<
  string,
  { name: string; component: ComponentType<any> }
>;

export const internalRoutes: TInternalRoutes = {
  Home: {
    name: 'Home',
    component: Home,
  },
  PayFrom: {
    name: 'PayFrom',
    component: PayFrom,
  },
  PayTo: {
    name: 'PayTo',
    component: PayTo,
  },
  Amount: {
    name: 'Amount',
    component: Amount,
  },
  When: {
    name: 'When',
    component: When,
  },
  Review: {
    name: 'Review',
    component: Review,
  },
  Alert: {
    name: 'Alert',
    component: Alert,
  },
};
