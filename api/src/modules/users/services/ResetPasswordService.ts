import AppError from '@shared/errors/AppError';
import { differenceInHours } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import IUserTokensRepository from '../repositories/IUserTokensRepository';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

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
    private usersTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.usersTokensRepository.findByToken(token);
    if (!userToken) {
      throw new AppError('User token does not exists');
    }

    const user = await this.usersRepository.findById(userToken.user_id);
    if (!user) {
      throw new AppError('User does not exists');
    }

    const tokenCreatedAt = userToken.created_at;
    // const compareDate = addHours(tokenCreatedAt, 2);
    // if (isAfter(Date.now(), compareDate))

    const dif = differenceInHours(Date.now(), tokenCreatedAt);
    if (dif > 2) {
      throw new AppError('Token Expired');
    }
    user.password = await this.hashProvider.generateHash(password);
    await this.usersRepository.save(user);
  }
}
export default ResetPasswordService;
