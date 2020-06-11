import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined } from '@ant-design/icons';
import { userLoginFetch } from '../../actions/actions';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const initialValues = {
    password: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Пароль нужен'),

    email: Yup.string().email('Неправильная почта').required('Почту, пожалуйста'),
  });

  const onSubmit = async (values) => {
    dispatch(userLoginFetch(values));
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="form">
          <h1>Вход</h1>

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
              <Input.Password id="pwd" name="password" size="large" autoComplete="off" />
            </Form.Item>
          </div>

          <div className="formButtonsContainer">
            <SubmitButton loading={false} disabled={false} size="large" className="button">
              Войти
            </SubmitButton>
          </div>
          <span className="error">{error}</span>
        </Form>
      </Formik>
      <p>Еще не зарегистрирован?</p>
      <Link to="/signup">Зарегистрироваться</Link>
    </>
  );
};

export default Login;
