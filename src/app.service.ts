import { Injectable } from '@nestjs/common';
import { data } from './data/data';

@Injectable()
export class AppService {
  getIncomeReport(type: string) {
    return data.report.filter((report) => report.type === type);
  }
}
