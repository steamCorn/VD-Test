import AllVehicleData from '../models/for_API_Response/AllVehicleData';
import IFormSubmit from '../interfaces/IFormSubmit';

const URL = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=';

export async function fetchVehicle(license: string): Promise<AllVehicleData | undefined> {
  try {
    const response = await fetch(`${URL}${license}`);
    const data: [AllVehicleData] = await response.json();
    const result = data[0];
    return result as AllVehicleData;
  } catch (error) {
    console.log(error);
  }
}

export async function sendDataAsQueryParamsUrl(formData: IFormSubmit): Promise<void> {
  const formDataJSON = JSON.stringify(formData);
  try {
    const searchParams = new URLSearchParams(formDataJSON).toString();
    const response = await fetch(`api-url${searchParams}`);
    // Result
    console.log(response.url);
  } catch (error) {
    console.log(error);
  }
}
