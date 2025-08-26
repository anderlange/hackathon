import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BtnFlutuante } from '@/components/elementos/BtnFlutuante';

describe('BtnFlutuante', () => {
  it('deve renderizar o botão com o texto correto', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<BtnFlutuante setEstadoCadastro={mockFn} />);
    
    expect(getByText('Incluir produto')).toBeTruthy();
  });

  it('deve chamar setEstadoCadastro com true ao pressionar o botão', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<BtnFlutuante setEstadoCadastro={mockFn} />);
    
    const botao = getByTestId('BtnFlutuante');
    fireEvent.press(botao);

    expect(mockFn).toHaveBeenCalledWith(true);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});