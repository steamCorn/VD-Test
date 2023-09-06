import AllVehicleData from '../models/for_API_Response/AllVehicleData';
import { VehicleNL } from '../interfaces/Vehicle';

const URL = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=';
// const carNumber = 'GD814B';

export default async function fetchVehicle(license: string): Promise<AllVehicleData | undefined> {
  try {
    const response = await fetch(`${URL}${license}`);
    const data: [AllVehicleData] = await response.json();
    const result = data[0];

    console.log(result);

    // return result as unknown as AllVehicleData[];
    return result as AllVehicleData;
  } catch (error) {
    console.log(error);
  }
}
