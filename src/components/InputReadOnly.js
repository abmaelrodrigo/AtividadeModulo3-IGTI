import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  render() {
    const {
      valueBaseINSS,
      valueDiscountINSS,
      valueBaseIRPF,
      valueDiscountIRPF,
      valueNetSalary,
    } = this.props;

    function handleDicounts(value) {
      return ((value * 100) / valueBaseINSS).toFixed(2);
    }
    function handleFormat(moneyValue) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(moneyValue);
    }
    return (
      <div>
        <div>
          <h6>Base INSS</h6>
          {handleFormat(valueBaseINSS)}
        </div>
        <div>
          <h6>Desconto INSS</h6>
          {handleFormat(valueDiscountINSS)}
          <span>{` (${handleDicounts(valueDiscountINSS)})%`}</span>
        </div>
        <div>
          <h6>Base IRPF</h6>
          {handleFormat(valueBaseIRPF)}
        </div>
        <div>
          <h6>Desconto IRPF</h6>
          {handleFormat(valueDiscountIRPF)}
          <span>{` (${handleDicounts(valueDiscountIRPF)})%`}</span>
        </div>
        <div>
          <h6>Salário líquido</h6>
          {handleFormat(valueNetSalary)}
          <span>{` (${handleDicounts(valueNetSalary)})%`}</span>
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
