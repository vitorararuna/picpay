import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,  /*ScrollView na Horizontal */
  showsHorizontalScrollIndicator: false, /* Esconde a barra de scrool que fica abaixo */
  contentContainerStyle: {  /* Estilos do componente pai que está dentro do ScrollView */
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 130px;
  padding-bottom: 10px;
  border-bottom-width: 0.5px;
  border-color: #999;
`;

export const Title = styled.Text`
  width: 100%;
  background: #1e222b;
  color: #fff;
  text-align: left;
  padding: 15px 15px 0 15px;
  margin: 0;
`;

export const Option = styled.TouchableOpacity` /*Cada option vai ser um botão, por isso TouchableOpacity  */
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`;
