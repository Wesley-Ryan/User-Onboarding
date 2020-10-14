import React from 'react';

const onBoardForm = () => {
    return ( 
        <div>
            <form className='form-container'>
                <label>Name:
                    <input />
                </label>
                <label>Email: 
                    <input />
                </label>
                <label>Password:
                    <input />
                </label>
                <label>
                <input id='checkbox' type='checkbox' /> Agree to Terms
                </label>
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default onBoardForm;

// 
// Email
// Password
// Terms of Service (checkbox)