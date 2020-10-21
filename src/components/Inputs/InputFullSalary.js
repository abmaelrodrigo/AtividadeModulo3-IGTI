import React, { Component } from 'react';
import { getPercentage } from '../Helper/GetPercentage';
import ProgressBarSalary from '../Salary/ProgressBarSalary';
import { calculateSalaryFrom } from '../Salary/salary';
import InputReadOnly from './InputReadOnly';

export default class InputFullSalary extends Component {
  constructor() {
    super();

    this.state = {
      input: 1000,
      baseINSS: calculateSalaryFrom(1000).baseINSS,
      baseIRPF: calculateSalaryFrom(1000).baseIRPF,
      discountINSS: calculateSalaryFrom(1000).discountINSS,
      discountIRPF: calculateSalaryFrom(1000).discountIRPF,
      netSalary: calculateSalaryFrom(1000).netSalary,
    };
    //console.log('in' + this.input);
  }

  handleChanges = (event) => {
    //console.log(event.target.value);
    const input = event.target.value;

    //console.log(oi());
    // console.log(calculateSalaryFrom(input));
    const baseINSS = calculateSalaryFrom(input).baseINSS;
    const baseIRPF = calculateSalaryFrom(input).baseIRPF;
    const discountINSS = calculateSalaryFrom(input).discountINSS;
    const discountIRPF = calculateSalaryFrom(input).discountIRPF;
    const netSalary = calculateSalaryFrom(input).netSalary;
    const bar1 = getPercentage(discountINSS, baseINSS);
    const bar2 = getPercentage(discountIRPF, baseINSS);
    const bar3 = getPercentage(netSalary, baseINSS);

    this.setState({
      input,
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
      bar1,
      bar2,
      bar3,
    });
  };

  render() {
    const {
      input,
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
      bar1,
      bar2,
      bar3,
    } = this.state;
    return (
      <div
        style={{
          margin: '50px',
        }}
      >
        <div>
          <h5>Salário bruto</h5>
          <input
            type="number"
            placeholder="Barra 1"
            onChange={this.handleChanges}
            value={input}
          />
        </div>

        <div>
          <InputReadOnly
            valueBaseINSS={baseINSS}
            valueDiscountINSS={discountINSS}
            valueBaseIRPF={baseIRPF}
            valueDiscountIRPF={discountIRPF}
            valueNetSalary={netSalary}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '50px',
          }}
        >
          <ProgressBarSalary value={bar1} color="#e67e22" />
          <ProgressBarSalary value={bar2} color="#c0392b" />
          <ProgressBarSalary value={bar3} color="#16a085" />
        </div>
      </div>
    );
  }
}
