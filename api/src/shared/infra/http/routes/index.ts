import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/passowords.routes';

const routes = Router();
routes.use('/sessions', sessionsRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/password', passwordRouter);
routes.use('/users', usersRouter);
export default routes;
