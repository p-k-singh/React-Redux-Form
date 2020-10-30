import {createStore,combineReducers} from 'redux';
import {createForms} from 'react-redux-form';
import { InitialFeedback } from './forms';
export const ConfigureStore=() => {
    const store=createStore(
        combineReducers({
            ...createForms({
                feedback: InitialFeedback
            })
        })
    );
    return store;
}