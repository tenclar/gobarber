import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SendForgotPassordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPassordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const sendForgotEmail = container.resolve(SendForgotPassordEmailService);
    await sendForgotEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
