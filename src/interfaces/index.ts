export interface TLItem {
  eventTitle: string,
  eventDescription: string,
  isPeriod: boolean,
  startTime: string,
  endTime: string,
  tags: string[],
};

export interface State {
  TLItems: TLItem[]
};
