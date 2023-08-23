import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomInterceptor } from './custom.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SummaryController } from './summary/summary.controller';
import { SummaryModule } from './summary/summary.module';
import { MailerModule } from './mailer/mailer.module';
import { MailService } from './mail/mail.service';

@Module({
  imports: [SummaryModule, MailerModule],
  controllers: [AppController, SummaryController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomInterceptor,
    },
    MailService,
  ],
})
export class AppModule {}
