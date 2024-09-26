import { Data, Response } from "../shared";

export const mapResponseData = <T>(data: Response<T>): Data<T> => {
  const mapped: Data<T> = {
    address: data.address,
    currentConditions: data.currentConditions,
    resolvedAddress: data.resolvedAddress,
    days: data.days,
    timezone: data.timezone,
    tzoffset: data.tzoffset,
  };
  return mapped;
};
