import AppError from '@shared/errors/AppError';

import { injectable, inject } from 'tsyringe';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

interface IRequest {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const checkUserExists = await this.usersRepository.findByEmail(email);
    if (!checkUserExists) {
      throw new AppError('User dos not exist.');
    }
    await this.userTokensRepository.generate(checkUserExists.id);
    await this.mailProvider.sendMail(email, 'pedido de recuperacao de senha');
  }
}
export default SendForgotPasswordEmailService;
