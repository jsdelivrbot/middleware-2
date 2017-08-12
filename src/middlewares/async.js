export default function({ dispatch }){
    return next => action => {
        if(!action.payload || !action.payload.then){
            return next(action);
        }

        // make sure the action's promise resolves
        action.payload
          .then( response => {
            const newAction = {...action, payload: response };
            dispatch(newAction);
          })
    };
}
