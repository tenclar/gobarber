import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import ListProviderService from './ListProviderService';

let fakeUsersRepository: FakeUsersRepository;

let listProviders: ListProviderService;

describe('ListProviderService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProviderService(fakeUsersRepository);
  });

  it('should not be able to List the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Jhon doe',
      email: 'jhon@gmail.com',
      password: '123456',
    });
    const user2 = await fakeUsersRepository.create({
      name: 'tenclar Valus',
      email: 'tenclar@gmail.com',
      password: '123456',
    });
    const loggedUser = await fakeUsersRepository.create({
      name: 'Enzo Valério',
      email: 'enzovalus@gmail.com',
      password: '123456',
    });
    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });
    expect(providers).toEqual([user1, user2]);
  });
});
