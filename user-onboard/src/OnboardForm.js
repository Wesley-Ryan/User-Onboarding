import React from 'react';

const OnboardForm = (props) => {
    const {values, setValues, submit} = props

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        //if type is a checkbox use the checked property else use value property
        setValues({ ...values, [name]: valueToUse })
      }


    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    Username: 
                    <input name='username'
                     type='text'
                     value={values.username}
                     onChange={onChange} 
                     />
                </label>
                <label>
                    Password: 
                    <input name ='password'
                    type='password'
                    value={values.password}
                    onChange={onChange}
                     />
                </label>
                <label id='url'>
                     URL: 
                    <input name='url'
                    type='text'
                    value={values.url}
                    onChange={onChange}
                     />
                </label>
                <input id='checkbox'
                 type='checkbox'
                 name='termsOfService'
                 onChange={onChange}
                  /> Agree to Terms
                <button disabled={!values.termsOfService}>Submit</button>
            </form>
        </div>
      );
}
 
export default OnboardForm;

