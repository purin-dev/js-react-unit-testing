import {createContext} from "react";
import AmiiboApiClient from "./AmiiboApiClient";

const AmiiboApiContext = createContext(new AmiiboApiClient())

export default AmiiboApiContext