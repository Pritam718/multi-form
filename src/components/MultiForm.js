import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import AccountInfo from './AccountInfo';
import Success from './Success';

const MultiForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [data,setData]=useState({
        fullName:'',
        email:'',
        dob:'',
        streetAddress:'',
        city:'',
        state:'',
        zipCode:'',
        username:'',
        password:'',
        confirmPassword:''


    });
    const [errors, setErrors] = useState({});

  const validateStep = () => {
    const stepValidation = {
      1: validatePersonalInfo,
      2: validateAddressInfo,
      3: validateAccountSetup,
    };

    return stepValidation[currentStep]();
  };

  const validatePersonalInfo = () => {
    const { fullName, email, dob } = data;
    const errors = {};

    if (!fullName || fullName.length < 3) {
      errors.fullName = 'Full Name is required (minimum 3 characters)';
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!dob) {
      errors.dob = 'Date of Birth is required';
    }

    setErrors(errors);
    
    return Object.keys(errors).length === 0;
  };

  const validateAddressInfo = () => {
    const { streetAddress, city, state, zipCode } = data;
    const errors = {};

    if (!streetAddress || streetAddress.length < 5) {
      errors.streetAddress = 'Street Address is required (minimum 5 characters)';
    }

    if (!city || city.length < 3) {
      errors.city = 'City is required (minimum 3 characters)';
    }

    if (!state) {
      errors.state = 'State is required';
    }

    if (!zipCode || !/^\d+$/.test(zipCode)) {
      errors.zipCode = 'Enter a valid zip code';
    }

    setErrors(errors);
    console.log(errors)
    return Object.keys(errors).length === 0;
  };

  const validateAccountSetup = () => {
    const { username, password, confirmPassword } = data;
    const errors = {};

    if (!username || username.length < 3) {
      errors.username = 'Username is required (minimum 3 characters)';
    }

    if (!password || password.length < 6) {
      errors.password = 'Password is required (minimum 6 characters)';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


    const handelChange = (e)=>{
        setData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    console.log(data)

    const handleNext = () => {
        if(validateStep()){
            setCurrentStep((prevStep) => prevStep + 1);
        }
          
      };
    
      const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
      };
      const handleSubmit=()=>{
        if(validateStep()){
            //alert("Data Submitted ")
            setCurrentStep(4)
            setData('')
        }
      }

      const renderStep = () => {
        switch (currentStep) {
          case 1:
            return (
              <PersonalInfo handelChange={handelChange} data={data} error={errors}/>
            );
    
          case 2:
            return (
              <AddressInfo handelChange={handelChange} data={data} error={errors}/>
            );
    
          case 3:
            return (
              <AccountInfo handelChange={handelChange} data={data} error={errors}/>
            );
          case 4:
            return(
              <Success/>
            );
          default:
            return null;
        }
      };

    
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='bg-gray-300 p-5 rounded-lg w-1/2 flex items-center justify-center'>
            <form>
                {renderStep()}
                
                <div className='flex justify-between mb-5'>
                    {currentStep > 1 && currentStep<3 && <button type="button" onClick={handlePrev} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow'>Previous</button>}
                    {currentStep < 3 && <button type="button" onClick={handleNext} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow'>Next</button>}
                    {currentStep === 3 && <button type="button" onClick={handleSubmit}className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow'>Submit</button>}
                </div>
                
            </form>
           
        </div>
    </div>
  )
}

export default MultiForm