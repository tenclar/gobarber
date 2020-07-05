// import AppError from '@shared/errors/AppError';
// import User from '@modules/users/infra/typeorm/entities/User';
import { injectable, inject } from 'tsyringe';

import IUserTokensRepository from '../repositories';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  token: string;
  password: string;
}
@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {}
}
export default ResetPasswordService;
