import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { TextField, Button } from '@mui/material'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`

const FeedbackForm = () => {
  const formik = useFormik({
    initialValues: {
      name: null,
      email: null,
      phone: null,
      message: null,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        required
        label="Ваше имя"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="email"
        name="email"
        required
        type="email"
        label="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="phone"
        required
        name="phone"
        type="phone"
        label="Телефон"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <TextField
        id="message"
        name="message"
        required
        rows={4}
        multiline
        label="Сообщение"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <Button
        variant="contained"
        type="submit"
        color="primary"
        sx={{ width: '200px' }}
      >
        Отправить
      </Button>
    </StyledForm>
  )
}

export default FeedbackForm
