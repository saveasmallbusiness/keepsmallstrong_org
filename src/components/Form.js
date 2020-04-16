import React, { useState } from 'react';
import { Input, Label, Textarea, Field } from '@zendeskgarden/react-forms';
import { useForm } from 'react-hook-form';

import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

import forms from '../data/forms'

const { GATSBY_FORM_CAPTURE_ENDPOINT } = process.env

const requiredMsg = 'This field is required';

const Form = ({ formId }) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async data => {
    let success = false;
    try {
      const capture = await fetch(GATSBY_FORM_CAPTURE_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({
          data,
          formId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      
      if (capture.status === 200) {
        setSubmitted(true);
        success = true;
        reset();
      } else {
        setError(
          'submit',
          'submitError',
          `Sorry, There was an issue submitting the form. Please try again or reach out directly to help@keepsmallstrong.org`
        );
      }
    } catch (error) {
      setError(
        'submit',
        'submitError',
        `Sorry, There was an issue submitting the form. Please try again or reach out directly to help@keepsmallstrong.org. [${error.message}]`
      );
    }
    
    if (typeof dataLayer !== 'undefined' || typeof window !== 'undefined') {
      const trackingLayer = typeof dataLayer !== 'undefined' && dataLayer ? dataLayer : window.dataLayer;
      if (trackingLayer) {
        trackingLayer.push({
          event: 'generate_lead',
          ['Event Category']: 'form_submit',
          ['Event Action']: 'form_id',
          ['Event Label']: formId,
          ['Event Value']: success,
        })
      }
    }
  };

  const handleDropDownChange = (name, value) => {
    setValue(name, value)
  }

  const getErrorMessage = (field, { type, message }) => {
    const fallback = 'Invalid value'
    if (message) {
      return message
    }
    if (type === 'pattern') {
      return field.patternMessage || fallback
    }
    return fallback
  }

  const showThankYou = (
    <div className='msg-confirm'>
      <p className="mb-4">
        Like any great endeavor, this too starts small.<br/>
        But together, we can save thousands of small businesses from closing their doors.<br/>
        And ensure that small stands as strong as ever.
      </p>
      <p>
        #KeepSmallStrong
      </p>
      <p className="py-8">
      <Button type='button' onClick={() => setSubmitted(false)}>
        Send another message?
      </Button>
      </p>
    </div>
  );

  const renderFormField = (field) => {
    const {
      id,
      title,
      inputType,
      fieldType,
      fields,
      placeholder,
      required,
      pattern,
      options,
    } = field
    switch (inputType) {
      case 'text': {
        return (
          <div className="mb-4" key={id}>
            <label htmlFor={id} className="my-4">
              <Field>
                <Label>{title}{required && ' *'}</Label>
                <Input
                  type={fieldType || 'text'}
                  name={id}
                  id={id}
                  ref={register({
                    ...required && { required: requiredMsg },
                    ...pattern && { pattern, message: "Nope" },
                  })}
                  placeholder={placeholder}
                  disabled={isSubmitting}
                />
              </Field>
              {errors[id] && <div className='pt-2 pb-4 text-red-600 text-sm font-bold'>{getErrorMessage(field, errors[id])}</div>}
            </label>
          </div>
        )
      }
      case 'textArea': {
        return (
          <div className="mb-4" key={id}>
            <label htmlFor={id} className="my-4">
              <Field>
                <Label>{title}{required && ' *'}</Label>
                <Textarea
                  ref={register({
                    ...required && { required: requiredMsg }
                  })}
                  name={id}
                  id={id}
                  rows='9'
                  placeholder={placeholder}
                  disabled={isSubmitting}
                />
              </Field>
              {errors[id] && <div className='py-1 text-red-600 text-sm font-bold'>{errors[id].message}</div>}
            </label>
          </div>
        )
      }
      case 'dropdown': {
        return (
          <div className="mb-4" key={id}>
            <label htmlFor={id} className="my-4">
              <Field>
                <Label>{title}{required && ' *'}</Label>
                <Dropdown
                  name={id}
                  options={options}
                  registerRef={(ref) => register(
                    { name: id },
                    { ...required && { required: requiredMsg } }
                  )}
                  onChange={handleDropDownChange}
                />
              </Field>
              {errors[id] && <div className='py-1 text-red-600 text-sm font-bold'>{errors[id].message}</div>}
            </label>
          </div>
        )
      }
      case 'group': {
        return (
          <div className="md:grid md:grid-cols-2 md:gap-4" key={id}>
            {
              fields.map((innderField) => {
                return renderFormField(innderField)
              })
            }
          </div>
        )
      }
      default: {
        return <div key={id}></div>
      }
    }
  }

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method='post'>
      {
        forms[formId].fields.map((field) => {
          return renderFormField(field)
        })
      }
      <div className="py-8 text-center md:text-left">
        <div className='submit-wrapper'>
          <Button type='submit' disabled={isSubmitting}>
            {forms[formId].buttonText || 'Send'}
          </Button>
          <div className="block pt-4">
            {isSubmitting && (
              <span className='text-grey-300 text-sm font-bold'>
                Proccessing...
              </span>
            )}
            {errors && errors.submit && (
              <span className='text-red-600 text-sm font-bold'>
                {errors.submit.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <>
      <h2 className='text-3xl lg:text-4xl font-headline font-light uppercase'>{forms[formId].title}</h2>
      <div className='py-4'>
        {submitted ? showThankYou : showForm}
      </div>
    </>
  );
}

export default Form
