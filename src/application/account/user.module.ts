import { Module } from "@nestjs/common";
import { UserRepository } from "src/domain/account/repositories/user.repository";
import { UserService } from "src/domain/account/services/user.service";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { UserController } from "./controllers/user.controller";


@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}