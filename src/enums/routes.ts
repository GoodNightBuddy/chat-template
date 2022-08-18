interface IRoutePath {
  ROOT: string;
  SIGN_UP: string;
  SIGN_IN: string;
  ANY: string;
}

const RoutePath: IRoutePath = {
  ROOT: '/',
  SIGN_UP: 'sign-up',
  SIGN_IN: 'sign-in',
  ANY: '*'
  
}

export default RoutePath