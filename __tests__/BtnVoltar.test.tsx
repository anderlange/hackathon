import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { BtnVoltar } from '../components/elementos/BtnVoltar';

describe('BtnVoltar', () => {
  const mockFn = jest.fn();
  it('renderiza o botão com o texto "Voltar"', () => {
    const { getByText } = render(<BtnVoltar alteraEstado={mockFn} />);
    expect(getByText('< Voltar')).toBeTruthy();
  });

  it('chama a função alteraEstado ao pressionar o botão', () => {
    const { getByTestId } = render(<BtnVoltar alteraEstado={mockFn} />);
    fireEvent.press(getByTestId('BtnVoltar'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});