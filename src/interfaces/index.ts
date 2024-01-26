export interface TLItem {
  id: string,
  eventTitle: string,
  eventDescription: string,
  isPeriod: boolean,
  startYear: string,
  startMonth: string,
  startDay: string,
  startTime: string,
  endYear: string,
  endMonth: string,
  endDay: string,
  endTime: string,
  tagsInString: string,
  tagsInArray: string[],
};

export interface State {
  TLItems: TLItem[]
};
