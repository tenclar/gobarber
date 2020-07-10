// import AppError from '../../../shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to Update Profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Tenclar Valus',
      email: 'tenclarvalus@gmail.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Tenclar Silva',
      email: 'tenclar.silva@ac.gov.br',
    });

    expect(updateUser.name).toBe('Tenclar Silva');
    expect(updateUser.email).toBe('tenclar.silva@ac.gov.br');
  });
});
