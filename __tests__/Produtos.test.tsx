import { Produtos } from '@/components/Produtos';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

// Mock global do fetch
global.fetch = jest.fn();

describe('Produtos', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renderiza mensagem quando não há produtos', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [],
    });

    const { getByText } = render(<Produtos />);
    await waitFor(() => {
      expect(getByText('Nenhum produto disponível')).toBeTruthy();
    });
  });

  it('renderiza lista de produtos quando disponíveis', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [
        { id: 1, nome: 'Produto A', prazomaximo: 12, txjurosanual: 5.5 },
        { id: 2, nome: 'Produto B', prazomaximo: 24, txjurosanual: 6.2 },
      ],
    });

    const { getByText } = render(<Produtos />);
    await waitFor(() => {
      expect(getByText('Produto A')).toBeTruthy();
      expect(getByText('Produto B')).toBeTruthy();
    });
  });

  it('abre o modal de cadastro ao clicar no botão flutuante', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [],
    });

    const { getByTestId } = render(<Produtos />);

    await act(async () => {
      fireEvent.press(getByTestId('BtnFlutuante'));
    });

    await waitFor(() => {
      expect(getByTestId('formularioCadastro')).toBeTruthy();
    }, { timeout: 1000 });
  });
});