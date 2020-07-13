import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import ProvidersMonthAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController';

const providerRouter = Router();
const providerController = new ProvidersController();
const providersMonthAvailabilityController = new ProvidersMonthAvailabilityController();
const providersDayAvailabilityController = new ProvidersDayAvailabilityController();
providerRouter.use(ensureAuthenticated);

providerRouter.get('/', providerController.index);
providerRouter.get(
  '/:id/month-availability',
  providersMonthAvailabilityController.index,
);
providerRouter.get(
  '/:id/day-availability',
  providersDayAvailabilityController.index,
);

export default providerRouter;
