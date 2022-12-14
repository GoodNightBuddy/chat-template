interface IRoutePath {
  ROOT: string;
  SIGN_UP: string;
  SIGN_IN: string;
  CHATS: string;
  ANY: string;
  ID: string;
}

const RoutePath: IRoutePath = {
  ROOT: '/',
  SIGN_UP: 'sign-up/',
  SIGN_IN: 'sign-in/',
  CHATS: 'chats/',
  ANY: '*',
  ID: ':id/'
  
}

export default RoutePath