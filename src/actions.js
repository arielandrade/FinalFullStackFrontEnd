import * as actionID from './action-list';

export function initState() {
return dispatch=>{

    fetch("http://172.50.0.231:8080/", {
          mode: 'cors',
          method: "GET"
        
        }).then(response=>{
            return response.json()
            }).then(response=>{
                console.log(response)
            dispatch({
                type:"REQUEST_POST_SUCCEED",
                data:response
            });
            })
            
            .catch(err=>{
                console.log("no funciono",err)
            })
        }

}
    

function baseDispatch(action, argument) {
    console.log(action);
  return dispatch => {
    dispatch({
      type: action,
      argument: argument,
    });
  };
}

export const inputSubmit = x => {
    return dispatch => {
    
        var data = new FormData();

        data.append("data", x.image);
        console.log("before fetch");

        //debug start
        (new Promise((resolve, reject) => {
            resolve({
                ok: true, 
                Id: '123', 
                json: function() { 
                    return {Id: '123'}
                }
            })
        }))
        /*debug end
        //posta start
        fetch("http://172.50.1.33:3000/post", {
          mode: 'cors',
          method: "POST",
          body: data
        })
        //posta end
        */.then(function (res) {
          console.log(res);
          if (res.ok) {
            console.log("fetch ok");
            x.history.push("/");
          } else if (res.status === 401) {
            console.log("error 401");
            alert("Oops! ");
          }
        }, function (e) {
          console.log("error: ", e);
          alert("Error submitting form: ", e);
          console.log(e);
        });   
    }
}

export const inputImageChange = x => baseDispatch(actionID.INPUT_IMAGE_CHANGE, x);
export const inputTextChange = x => baseDispatch(actionID.INPUT_TEXT_CHANGE, x);

export const editRequestData = x => baseDispatch(actionID.EDIT_REQUEST_DATA, x);
export const editSetData = x => baseDispatch(actionID.EDIT_SET_DATA, x);
export const editGetData = x => baseDispatch(actionID.EDIT_GET_DATA, x);
export const editConfirm = x => baseDispatch(actionID.EDIT_CONFIRM, x);
export const editCancel = x => baseDispatch(actionID.EDIT_CANCEL, x);
export const editTitleChange = x => baseDispatch(actionID.EDIT_TITLE_CHANGE, x);
export const editDescriptionChange = x => baseDispatch(actionID.EDIT_DESCRIPTION_CHANGE, x);

export const postVoteUp = x => baseDispatch(actionID.ITEM_VOTE_UP, x);
export const postVoteDown = x => baseDispatch(actionID.ITEM_VOTE_DOWN, x);
export const postDelete = x => baseDispatch(actionID.ITEM_DELETE, x);

export const listSortByNewest = x => baseDispatch(actionID.LIST_SORT_NEWEST, x);
export const listSortByVotes = x => baseDispatch(actionID.LIST_SORT_VOTES, x);

export const commentChange = x => baseDispatch(actionID.COMMENT_CHANGE, x);
export const commentSubmit = x => baseDispatch(actionID.COMMENT_SUBMIT, x);

export const commentListSetData = x => baseDispatch(actionID.COMMENT_LIST_SET_DATA, x);