import UserToken from '../infra/typeorm/entities/UserToken';

export default interface ITokensRepository {
  generate(user_id: string): Promise<UserToken>;
}
