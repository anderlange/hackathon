import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { CampoFormulario } from '../components/elementos/CampoFormulario';

describe('CampoFormulario', () => {
  it('renderiza o título e o campo de texto com o placeholder', () => {
    const mockFn = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <CampoFormulario
        titulo="Nome"
        placeholder="Digite seu nome"
        modo="text"
        tipoTeclado="default"
        change={mockFn}
      />
    );

    expect(getByText('Nome')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu nome')).toBeTruthy();
  });

  it('chama a função change ao digitar no campo', () => {
    const mockFn = jest.fn();
    const { getByPlaceholderText } = render(
      <CampoFormulario
        titulo="Email"
        placeholder="Digite seu email"
        modo="email"
        tipoTeclado="email-address"
        change={mockFn}
      />
    );

    const input = getByPlaceholderText('Digite seu email');
    fireEvent.changeText(input, 'anderson@email.com');

    expect(mockFn).toHaveBeenCalledWith('anderson@email.com');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});