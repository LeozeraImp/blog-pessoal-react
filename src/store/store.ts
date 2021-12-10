import {createStore} from "redux";
import { tokenReducer } from "./tokens/tokensReduces";

const store = createStore(tokenReducer);

export default store;