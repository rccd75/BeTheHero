# BeTheHero Mobile

1) Para iniciar o projeto, foi necessário instalar o expo-cli
2) Executar o comando:
    expo init mobile (pasta deste projeto)

3) O teste do App tambem pode ser realizado atraves do Expo Snack (browser), mas com limitações 
4) Para testar no Expo Mobile, executar: yarn start
   garantir que nao esta no modo debug (export EXPO_DEBUG=true)

Premissas: 
1) O explo client deve esar instalado (npm install -g expo-cli)
2) O yarn deve estar instalado (brew install yarn)
3) Instalação do react navigation no projeto
    npm install @react-navigation/native

4) Como e um projeto usando expo, executar:
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

5) Para o aplicativo em questão, também deve ser instalado a tipo de navegação stack:
    npm install @react-navigation/stack

6) Devem ser instalados os seguinte pacotes adicionais:
    expo install expo-constants
    expo install expo-mail-composer
    npm install axios
    npm install intl



Observações:
1) Estudar a documentação contida em "https://reactnavigation.org/docs/getting-started" e "https://reactnavigation.org/docs/hello-react-navigation"
2) No api.js, o IP informado é o IP de acesso ao backend