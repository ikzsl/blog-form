import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

import { userPostFetch } from '../../actions/actions';

const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const initialValues = {
    username: '',
    password: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .max(50, 'Слишком длинно - не более 50 символов')
      .required('Имя обязательно'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,40}$/,
        'от 6 до 40 символов, как минимум одна цифра и одна заглавная буква',
      )
      .required('Пароль нужен'),

    email: Yup.string().email('Неправильная почта').required('Почту, пожалуйста'),
  });

  const onSubmit = async (values) => {
    dispatch(userPostFetch(values));
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="form">
          <h1>Регистрации</h1>
          <div>
            <label htmlFor="username">
              Имя
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="username">
              <Input
                id="username"
                name="username"
                placeholder="Иван"
                size="large"
                suffix={<UserOutlined />}
              />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="email">
              Электропочта
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="email">
              <Input
                id="email"
                name="email"
                placeholder="ivan@mail.ru"
                size="large"
                suffix={<MailOutlined />}
              />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="pwd">
              Пароль
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="password">
              <Input.Password
                id="pwd"
                name="password"
                placeholder="bu7UYvjl2nkj9WNshd"
                size="large"
                autoComplete="off"
              />
            </Form.Item>
          </div>

          <div className="formButtonsContainer">
            <SubmitButton loading={false} disabled={false} size="large" className="button">
              Зарегистрироваться
            </SubmitButton>
          </div>
          <span className="error">{error}</span>
        </Form>
      </Formik>
      <p>Уже зарегистрирован?</p>
      <Link to="/login">Войти</Link>
    </>
  );
};

export default Signup;
