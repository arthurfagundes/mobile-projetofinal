import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Detalhes: undefined;
    Login: undefined;
    Cadastrar: undefined;
    Esqueci: undefined;
    CadastrarNota: undefined;
    ListarNota: undefined;
    CadastrarProduto: undefined;
    CadastrarAtendimento: undefined;
    ListarAtendimento: undefined;
    CadastrarCliente: undefined;
    ListarCliente: undefined;
    AlterarCliente: {id: string};
  };
  
  
  //HomeScreen
  type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

  //LoginScreen
  type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

  //CadastrarScreen
  type CadastrarProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar'>;

  //EsqueciScreen
  type EsqueciProps = NativeStackScreenProps<RootStackParamList, 'Esqueci'>;

  //CadastrarNotaScreen
  type CadastrarNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastrarNota'>;

  //ListarNotaScreen
  type ListarNotaProps = NativeStackScreenProps<RootStackParamList, 'ListarNota'>;

  //CadastrarProdutoScreen
  type CadastrarProdutoProps = NativeStackScreenProps<RootStackParamList, 'CadastrarProduto'>;

  //CadastrarAtendimentoScreen
  type CadastrarAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'CadastrarAtendimento'>;

  //ListarAtendimentoScreen
  type ListarAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'ListarAtendimento'>;
  
  //CadastrarClienteScreen
  type CadastrarClienteProps = NativeStackScreenProps<RootStackParamList, 'CadastrarCliente'>;

  //ListarNotaScreen
  type ListarClienteProps = NativeStackScreenProps<RootStackParamList, 'ListarCliente'>;

  //AlterarClienteScreen
  type AlterarClienteProps = NativeStackScreenProps<RootStackParamList, 'AlterarCliente'>;


  export type {HomeProps, LoginProps, CadastrarProps, EsqueciProps, CadastrarNotaProps, AlterarClienteProps, ListarClienteProps, CadastrarClienteProps, ListarAtendimentoProps, CadastrarAtendimentoProps, ListarNotaProps, CadastrarProdutoProps, RootStackParamList};