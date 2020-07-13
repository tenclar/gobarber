import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AppError from '../../../shared/errors/AppError';
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

  it('should not be able  update the profile from non-existing user', async () => {
    expect(
      updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'Test',
        email: 'test@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to Change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Tenclar Valus',
      email: 'tenclarvalus@gmail.com',
      password: '123456',
    });
    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'teste@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Tenclar Silva',
        email: 'tenclarvalus@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to Update password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Tenclar Valus',
      email: 'tenclarvalus@gmail.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Tenclar Silva',
      email: 'tenclar.silva@ac.gov.br',
      old_password: '123456',
      password: '121212',
    });

    expect(updateUser.password).toBe('121212');
  });

  it('should not be able to Update password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Tenclar Valus',
      email: 'tenclarvalus@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Tenclar Silva',
        email: 'tenclar.silva@ac.gov.br',
        password: '121212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to Update password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Tenclar Valus',
      email: 'tenclarvalus@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Tenclar Silva',
        email: 'tenclar.silva@ac.gov.br',
        old_password: 'wrong-old-password',
        password: '121212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
