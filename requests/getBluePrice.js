import axios from 'axios';


export async function getBluePrice(){
    const url = "https://dolarapi.com/v1/dolares/blue";
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


