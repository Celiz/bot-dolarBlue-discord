import axios from 'axios';


export async function getLiquiPrice(){
    const url = "https://dolarapi.com/v1/dolares/contadoconliqui";
    try{
        const { data: response } = await axios.get(url);
        return response;
    }
    catch(error){
        return {
            error: true,
            message: error.message,
        };
    }
}
