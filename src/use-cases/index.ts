import { CreateUserController } from "../controller/create-user-controller";
import { MailtrapMailProvider } from "../providers/implementations/mailtrap-mail-provider";
import { MockUsersRepository } from "../repositories/implementations/mock-users-repository";
import { CreateUserUseCase } from "./create-user-use-case";

const mailtrapMailProvider = new MailtrapMailProvider()
const mockUsersRepository = new MockUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  mockUsersRepository, mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }