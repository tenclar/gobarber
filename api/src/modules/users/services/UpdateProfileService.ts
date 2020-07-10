import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';

import { injectable, inject } from 'tsyringe';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  ald_password?: string;
  password?: string;
}
@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ user_id, name, email }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User not Found');
    }
    user.name = name;
    user.email = email;
    await this.usersRepository.save(user);
    return user;
  }
}

export default UpdateProfileService;
