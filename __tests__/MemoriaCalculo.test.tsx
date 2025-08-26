import { render } from '@testing-library/react-native';
import React from 'react';
import { MemoriaCalculo } from '../components/elementos/MemoriaCalculo';

describe('MemoriaCalculo', () => {
  const mockDadosMemoria = [
    {
      mes: 1,
      juros: 139.78,
      amortizacao: 791.72,
      saldo: 9208.28,
    },
    {
      mes: 2,
      juros: 130.00,
      amortizacao: 800.00,
      saldo: 8408.28,
    },
  ];

  it('renderiza o título e os cabeçalhos corretamente', () => {
    const { getByText } = render(<MemoriaCalculo dadosMemoria={mockDadosMemoria} />);

    expect(getByText('Memória de cálculo:')).toBeTruthy();
    expect(getByText('Mês')).toBeTruthy();
    expect(getByText('Juros')).toBeTruthy();
    expect(getByText('Amortização')).toBeTruthy();
    expect(getByText('Saldo')).toBeTruthy();
  });

  it('renderiza as linhas da memória de cálculo com os dados corretos', () => {
    const { getByText } = render(<MemoriaCalculo dadosMemoria={mockDadosMemoria} />);

    expect(getByText('1')).toBeTruthy();
    expect(getByText('R$ 139,78')).toBeTruthy();
    expect(getByText('R$ 791,72')).toBeTruthy();
    expect(getByText('R$ 9.208,28')).toBeTruthy();

    expect(getByText('2')).toBeTruthy();
    expect(getByText('R$ 130,00')).toBeTruthy();
    expect(getByText('R$ 800,00')).toBeTruthy();
    expect(getByText('R$ 8.408,28')).toBeTruthy();
  });

  it('renderiza o número correto de linhas de dados', () => {
    const { getAllByTestId } = render(<MemoriaCalculo dadosMemoria={mockDadosMemoria} />);
    const jurosElements = getAllByTestId('LinhaMemoria');

    expect(jurosElements.length).toBe(2);
  });
});