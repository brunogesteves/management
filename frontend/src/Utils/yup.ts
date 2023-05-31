import * as Yup from 'yup';

enum Status {
  active = 'active',
  inactive = 'inactive',
}

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Obrigatório'),
  birth: Yup.string().required('Obrigatório'),
  cpf: Yup.string().required('Obrigatório'),
  username: Yup.string().required('Obrigatório'),
  userEmail: Yup.string().email('Email Inválido').required('Obrigatório'),
  password: Yup.string()
    .required('Digite uma senha')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial'
    ),
  confirmPassword: Yup.string(),
  // .required("Por favor Confirme a senha")
  // .when("password", {
  //   is: (password: string) =>
  //     password && password.length > 0 ? true : false,
  //   then: Yup.string().oneOf([Yup.ref("password")], "Senhas diferentes"),
  // }),
});

export const LoginSchema = Yup.object().shape({
  username: Yup.string().email('Invalid Email ').required('Required'),
  password: Yup.string().required('Digit the password'),
});

export const NewPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Digite uma senha')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial'
    ),
  // confirmPassword: Yup.string()
  //   .required("Por favor Confirme a senha")
  //   .when("newPassword", {
  //     is: (password: string) =>
  //       password && password.length > 0 ? true : false,
  //     then: Yup.string().oneOf([Yup.ref("newPassword")], "Senhas diferentes"),
  //   }),
});

export const EmployeeSchema = Yup.object().shape({
  image: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  email: Yup.string().email('Not a proper email').required('Required'),
  address: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  cpf: Yup.string().required('Required'),
  birth_date: Yup.date().max(new Date(), 'Required'),
  status: Yup.mixed<Status>().oneOf(Object.values(Status), 'Required'),
  branchID: Yup.number().min(1, 'Required'),
  departmentID: Yup.number().min(1, 'Required'),
  roleID: Yup.number().min(1, 'Required'),
});

export const BranchSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  email: Yup.string().email('Not a proper email').required('Required'),
  city: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
});
