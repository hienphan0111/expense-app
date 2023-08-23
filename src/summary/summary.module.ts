import { Module } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Module({
  providers: [SummaryService],
})
export class SummaryModule {}
