import { Data, Response } from "../shared";

export const mapResponseData = <T>(data: Response<T>) => {
  const mapped: Data<T> = {
    address: data.address,
    currentConditions: data.currentConditions,
    resolvedAddress: data.resolvedAddress,
    days: data.days,
  };
  return mapped;
};
