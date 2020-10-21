import React, { Component } from 'react';
import { getPercentage } from '../Helper/GetPercentage';

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
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h6>Base INSS</h6>
          <input type="text" value={handleFormat(valueBaseINSS)} />
        </div>
        <div>
          <h6>Desconto INSS</h6>
          <input
            type="text"
            value={`${handleFormat(valueDiscountINSS)} ${getPercentage(
              valueDiscountINSS,
              valueBaseINSS
            )}%`}
          ></input>
        </div>
        <div>
          <h6>Base IRPF</h6>
          <input type="text" value={handleFormat(valueBaseIRPF)} />
        </div>
        <div>
          <h6>Desconto IRPF</h6>
          <input
            type="text"
            value={`${handleFormat(valueDiscountIRPF)} ${getPercentage(
              valueDiscountIRPF,
              valueBaseINSS
            )}%`}
          ></input>
        </div>
        <div>
          <h6>Salário líquido</h6>
          <input
            type="text"
            value={`${handleFormat(valueNetSalary)} ${getPercentage(
              valueNetSalary,
              valueBaseINSS
            )}%`}
          ></input>
        </div>
      </div>
    );
  }
}

/* valueBaseINSS={baseINSS}
            valueDiscountINSS={discountINSS}
            valueBaseIRPF={baseIRPF}
            valueDiscountIRPF={discountIRPF}
            valueNetSalary={netSalary} */
