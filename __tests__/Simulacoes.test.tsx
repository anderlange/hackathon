import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Simulacoes } from '../components/Simulacoes';

// Mock global do fetch
global.fetch = jest.fn();

describe('Simulacoes', () => {
  const mockSetVisivel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('não renderiza o modal quando visivel é false', () => {
    const { queryByTestId } = render(
      <Simulacoes idProduto={1} visivel={false} setVisivel={mockSetVisivel} maximoParcelas={10} />
    );
    expect(queryByTestId('resultado')).toBeNull();
  });

  it('renderiza corretamente quando visivel é true', () => {
    const { getByText, getByTestId } = render(
      <Simulacoes idProduto={1} visivel={true} setVisivel={mockSetVisivel} maximoParcelas={10} />
    );

    expect(getByTestId('resultado')).toBeTruthy();
  });

  it('fecha o modal ao pressionar BtnVoltar', () => {
    const { getByTestId } = render(
      <Simulacoes idProduto={1} visivel={true} setVisivel={mockSetVisivel} maximoParcelas={10} />
    );

    fireEvent.press(getByTestId('BtnVoltar'));
    expect(mockSetVisivel).toHaveBeenCalledWith(false);
  });

  it('executa simulação ao pressionar o botão', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        nomeProduto: 'Produto Simulado',
      }),
    });

    const { getByText } = render(
      <Simulacoes idProduto={1} visivel={true} setVisivel={mockSetVisivel} maximoParcelas={10} />
    );

    fireEvent.press(getByText('Simular'));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://192.168.1.24:3000/simulacoes', expect.any(Object));
    });
  });
});