import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { typeReport } from './data/data';
import { AppService } from './app.service';
@Controller('report')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':type')
  getAllIncomReports(@Param('type') type: string) {
    const typeIncome =
      type === 'income' ? typeReport.INCOME : typeReport.EXPENSE;

    return this.appService.getIncomeReport(typeIncome);
  }

  @Post()
  createIncomeReport(@Body() body: { amount: number }) {
    console.log(body);
    return {};
  }

  @Post(':id')
  createIncomeReportId() {
    return {};
  }
}
