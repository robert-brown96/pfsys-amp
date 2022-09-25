import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { BookModule } from "./book/book.module";
import { CurrencyModule } from "./currency/currency.module";
import { TransactionModule } from "./transaction/transaction.module";
import { AccountTypeModule } from "./accountType/accountType.module";
import { AccountModule } from "./account/account.module";
import { TransactionLineModule } from "./transactionLine/transactionLine.module";
import { JobModule } from "./job/job.module";
import { JobTypeModule } from "./jobType/jobType.module";
import { TransactionScheduleModule } from "./transactionSchedule/transactionSchedule.module";
import { ScheduleEntryModule } from "./scheduleEntry/scheduleEntry.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    BookModule,
    CurrencyModule,
    TransactionModule,
    AccountTypeModule,
    AccountModule,
    TransactionLineModule,
    JobModule,
    JobTypeModule,
    TransactionScheduleModule,
    ScheduleEntryModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
