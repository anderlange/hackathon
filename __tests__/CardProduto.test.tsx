import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { CardProduto } from '../components/elementos/CardProduto';

describe('CardProduto', () => {
  const mockMarcaProdutoSimulacao = jest.fn();
  const mockSimulacaoVisivel = jest.fn();
  const mockMarcaProdutoSimulacaoMaxParcelas = jest.fn();

  const defaultProps = {
    nome: 'Produto Teste',
    prazo: 12,
    txjuros: 9.5,
    idProduto: 42,
    marcaProdutoSimulacao: mockMarcaProdutoSimulacao,
    simulacaoVisivel: mockSimulacaoVisivel,
    marcaProdutoSimulacaoMaxParcelas: mockMarcaProdutoSimulacaoMaxParcelas,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renderiza corretamente os dados do produto', () => {
    const { getByText } = render(<CardProduto {...defaultProps} />);

    expect(getByText('Produto Teste')).toBeTruthy();
    expect(getByText('Juros anual: 9.5%')).toBeTruthy();
    expect(getByText('Prazo máximo: 12')).toBeTruthy();
    expect(getByText('Simulação')).toBeTruthy();
  });

  it('executa funções ao pressionar o botão de simulação', () => {
    const { getByText } = render(<CardProduto {...defaultProps} />);

    fireEvent.press(getByText('Simulação'));

    expect(mockMarcaProdutoSimulacao).toHaveBeenCalledWith(42);
    expect(mockMarcaProdutoSimulacaoMaxParcelas).toHaveBeenCalledWith(12);
    expect(mockSimulacaoVisivel).toHaveBeenCalledWith(true);
  });
});