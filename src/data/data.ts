export enum typeReport {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface Data {
  report: {
    id: string;
    amount: number;
    create_At: Date;
    type: typeReport;
  }[];
}

export const data: Data = {
  report: [
    {
      id: '1',
      amount: 100,
      create_At: new Date(),
      type: typeReport.INCOME,
    },
    {
      id: '2',
      amount: 200,
      create_At: new Date(),
      type: typeReport.INCOME,
    },
    {
      id: '1',
      amount: 400,
      create_At: new Date(),
      type: typeReport.EXPENSE,
    },
  ],
};
