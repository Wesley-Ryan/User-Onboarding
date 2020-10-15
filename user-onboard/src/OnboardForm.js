import React from 'react';

const OnboardForm = (props) => {
    const {values, setValues} = props

    const onChange = event => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
      }


    return (
        <div>
            <form>
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
                  /> Agree to Terms
                <button disabled={values.termsOfService}>Submit</button>
            </form>
        </div>
      );
}
 
export default OnboardForm;

