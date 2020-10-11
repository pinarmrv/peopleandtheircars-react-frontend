import {baseURL, personURL, carURL} from '../config';
import axios from 'axios';

export default class APIs {

    constructor() {
    }

    static async getCarDetailsByPlateNumber(plateNumber){
        try {
            let url = carURL + '/' + plateNumber
            const response = await axios.get(url);

            return response.data;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async getCarDetailsByPersonalID(personalID){
        try {
            let url = personURL + '/' + personalID + '/car'
            const response = await axios.get(url);

            return response.data;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async getPeopleByColorCar(color){
        try {
            let url = baseURL + '/getPersonsByCar'
            const response =  await axios.get(url,{ params: { color: color } });

            return response.data;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async getPeopleOlderThanAge(age){
        try {
            let url = baseURL + '/getPersonsOlderThan'
            const response = await axios.get(url,{ params: { age: age } });

            return response.data;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async getPeopleWithInsurance(){
        try {
            let url = baseURL + '/getPersonsWithInsurance'
            const response = await axios.get(url);

            return response.data;
        }
        catch (e) {
            console.log(e);
        }
    }





}