import React from 'react';

const OnboardForm = () => {
    return (
        <div className='container'>
            <form>
                <label>
                    Username: 
                    <input />
                </label>
                <label>
                    Password: 
                    <input />
                </label>
                <input id='checkbox' type='checkbox' /> Agree to Terms
                <button>Submit</button>
            </form>
        </div>
      );
}
 
export default OnboardForm;

