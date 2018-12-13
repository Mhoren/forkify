import axios from 'axios';
import {key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        //fetch można zamiast axios ale powoduje więcej błędów i trzeba zamienić json w obiekt
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}


