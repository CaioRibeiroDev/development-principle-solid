import { User } from "../entities/User";
import { IMailProvider } from "../providers/mail-provider";
import { IUsersRepository } from "../repositories/users-repository";
import { ICreateUserRequestDTO } from "./create-user-dto";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}
  
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) throw new Error('User already exists')
    
    const user = new User(data)
  
    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe do meu app',
        email: 'equipe@example.com',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você ja pode fazer login em nossa plataforma</p>'
    })
  }
}