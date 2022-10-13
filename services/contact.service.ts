import axios from "axios";
import config from '../airzen.config';

const create = (contact: any, onSuccess?: any, onError?: any) => {
    axios.post(config.contactURL, contact)
    .then((res)=>{
        if ( onSuccess ) onSuccess(res.data);
    })
    .catch((err) => {
      if ( onError ) onError(err);
    })
}

const ContactApi = {
    create
}

export default ContactApi;