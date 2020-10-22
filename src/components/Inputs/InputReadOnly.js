import React, { Component } from 'react';
import { getPercentage } from '../Helper/GetPercentage';
import './inputs.css';

export default class InputReadOnly extends Component {
  render() {
    const {
      valueBaseINSS,
      valueDiscountINSS,
      valueBaseIRPF,
      valueDiscountIRPF,
      valueNetSalary,
    } = this.props;

    function handleFormat(moneyValue) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(moneyValue);
    }

    return (
      <div
        style={{
          margin: '50px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h6>Base INSS</h6>
          <input
            type="text"
            style={{ fontWeight: 'bold' }}
            value={handleFormat(valueBaseINSS)}
          />
        </div>
        <div>
          <h6>Desconto INSS</h6>
          <input
            type="text"
            style={{ color: '#e67e22', fontWeight: 'bold' }}
            value={`${handleFormat(valueDiscountINSS)} (${getPercentage(
              valueDiscountINSS,
              valueBaseINSS
            )}%)`}
          ></input>
        </div>
        <div>
          <h6>Base IRPF</h6>
          <input
            type="text"
            style={{ fontWeight: 'bold' }}
            value={handleFormat(valueBaseIRPF)}
          />
        </div>
        <div>
          <h6>Desconto IRPF</h6>
          <input
            type="text"
            style={{ color: '#c0392b', fontWeight: 'bold' }}
            value={`${handleFormat(valueDiscountIRPF)} (${getPercentage(
              valueDiscountIRPF,
              valueBaseINSS
            )}%)`}
          ></input>
        </div>
        <div>
          <h6>Salário líquido</h6>

          <input
            type="text"
            style={{ color: '#16a085', fontWeight: 'bold' }}
            value={`${handleFormat(valueNetSalary)} (${getPercentage(
              valueNetSalary,
              valueBaseINSS
            )}%)`}
          ></input>
        </div>
      </div>
    );
  }
}
