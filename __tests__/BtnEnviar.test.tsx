import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { BtnEnviar } from '../components/elementos/BtnEnviar';

describe('BtnEnviar', () => {
  const mockFn = jest.fn();
  it('renderiza corretamente com o texto esperado', () => {
    const { getByText } = render(<BtnEnviar titulo={'Enviar'} onEnviar={mockFn} />);
    expect(getByText('Enviar')).toBeTruthy(); // ajuste o texto conforme o que aparece no botão
  });

  it('chama a função onEnviar ao pressionar o botão', () => {
    const { getByTestId } = render(<BtnEnviar titulo={'Enviar'} onEnviar={mockFn} />);
    fireEvent.press(getByTestId('BtnEnviar'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});