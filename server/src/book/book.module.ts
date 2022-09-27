import { Module } from "@nestjs/common";
import { BookModuleBase } from "./base/book.module.base";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";

@Module({
  imports: [BookModuleBase],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
