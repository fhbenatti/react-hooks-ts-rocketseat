import React, {useRef, useImperativeHandle, useReducer} from 'react'
import Form, {FormRef} from './Form'

export const AppHandle: React.FC = () => {
  const formRef = useRef<FormRef>(null)

  function handleSubmit() {
    formRef.current?.submit()
  }

  return <Form ref={formRef} />
}
