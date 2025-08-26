import { ResultadoSimulacao } from '@/components/elementos/ResultadoSimulacao';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('ResultadoSimulacao', () => {
  it('exibe mensagem quando resultado é nulo', () => {
    const { getByText, queryByTestId } = render(<ResultadoSimulacao resultado={null} />);
    expect(getByText('Nenhuma simulação para apresentar')).toBeTruthy();
    expect(queryByTestId('memoria-calculo')).toBeNull();
  });

  it('renderiza os dados da simulação corretamente', () => {
    const resultadoMock = {
      nomeProduto: 'Produto X',
      valorEmprestimo: 10000,
      prazo: 12,
      txEfetiva: 1.5,
      valorParcela: 950,
      valorTotal: 11400,
      memoriaCalculo: [],
    };

    const { getByText, getByTestId } = render(<ResultadoSimulacao resultado={resultadoMock} />);

    expect(getByText('Produto')).toBeTruthy();
    expect(getByText('Produto X')).toBeTruthy();
    expect(getByText('Valor solicitado')).toBeTruthy();
    expect(getByText('R$ 10.000,00')).toBeTruthy();
    expect(getByText('Prazo')).toBeTruthy();
    expect(getByText('12 meses')).toBeTruthy();
    expect(getByText('Taxa efetiva mensal')).toBeTruthy();
    expect(getByText('1.5%')).toBeTruthy();
    expect(getByText('Parcela mensal')).toBeTruthy();
    expect(getByText('R$ 950,00')).toBeTruthy();
    expect(getByText('Valor total com juros')).toBeTruthy();
    expect(getByText('R$ 11.400,00')).toBeTruthy();
    expect(getByTestId('MemoriaCalculo')).toBeTruthy();
  });
});