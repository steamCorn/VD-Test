// import { URLSearchParams } from 'url';
import AllVehicleData from '../models/for_API_Response/AllVehicleData';
import IFormDataSubmitForm from '../interfaces/IFormDataSubmitForm';

const URL = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=';
// const carNumber = 'GD814B';

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

export async function sendDataAsQueryParamsUrl(formData: IFormDataSubmitForm): Promise<void> {
  try {
    console.log('sendDataAsQueryParamsUrl', formData);
    // const searchParams = new URLSearchParams(formData);
    // console.log('searchParams', searchParams);

    const response = await fetch(`api-url${formData}`);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
