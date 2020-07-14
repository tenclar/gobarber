import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import ProvidersMonthAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController';
import ProvidersDayAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderDayAvailabilityController';
import ProviderAppointmentsController from '@modules/appointments/infra/http/controllers/ProviderAppointmentsController';

const providerController = new ProvidersController();
const providersMonthAvailabilityController = new ProvidersMonthAvailabilityController();
const providersDayAvailabilityController = new ProvidersDayAvailabilityController();
const providerAppointmentsController = new ProviderAppointmentsController();

const providerRouter = Router();
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

providerRouter.get(
  '/:id/day-availability',
  providerAppointmentsController.index,
);

export default providerRouter;
