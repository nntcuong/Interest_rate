import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';
import  { useState } from 'react';
const LaiDon = (props) => {
  const [initialCapital, setInitialCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalCapitalAndInterest, setTotalCapitalAndInterest] = useState('');
  const [numberOfPeriods, setNumberOfPeriods] = useState(null);

  const calculateNumberOfPeriods = () => {
    const initialCapitalValue = parseFloat(initialCapital);
    const interestRateValue = parseFloat(interestRate);
    const totalCapitalAndInterestValue = parseFloat(totalCapitalAndInterest);

    if (!isNaN(initialCapitalValue) && !isNaN(interestRateValue) && !isNaN(totalCapitalAndInterestValue)) {
      const periods = (totalCapitalAndInterestValue - initialCapitalValue) / (initialCapitalValue * (interestRateValue / 100));
      setNumberOfPeriods(periods);
    } else {
      setNumberOfPeriods(null);
    }
  };


  const [initialCapital2, setInitialCapital2] = useState('');
  const [interestRate2, setInterestRate2] = useState('');
  const [totalCapitalAndInterest2, setTotalCapitalAndInterest2] = useState('');
  const [numberOfPeriods2, setNumberOfPeriods2] = useState(null);

  const calculateNumberOfPeriods2 = () => {
    const initialCapitalValue2 = parseFloat(initialCapital2);
    const interestRateValue2 = parseFloat(interestRate2);
    const totalCapitalAndInterestValue2 = parseFloat(totalCapitalAndInterest2);

    if (!isNaN(initialCapitalValue2) && !isNaN(interestRateValue2) && !isNaN(totalCapitalAndInterestValue2)) {
      const periods = initialCapital2 * (1 + totalCapitalAndInterest2 * interestRate2/100)
      setNumberOfPeriods2(periods);
    } else {
      setNumberOfPeriods2(null);
    }
  };

  const [initialCapital3, setInitialCapital3] = useState('');
  const [interestRate3, setInterestRate3] = useState('');
  const [totalCapitalAndInterest3, setTotalCapitalAndInterest3] = useState('');
  const [numberOfPeriods3, setNumberOfPeriods3] = useState(null);

  const calculateNumberOfPeriods3 = () => {
    const initialCapitalValue3 = parseFloat(initialCapital3);
    const interestRateValue3 = parseFloat(interestRate3);
    const totalCapitalAndInterestValue3 = parseInt(totalCapitalAndInterest3);

    if (!isNaN(initialCapitalValue3) && !isNaN(interestRateValue3) && !isNaN(totalCapitalAndInterestValue3)) {
      let periods = 0;
      for (let i = 1; i <= totalCapitalAndInterestValue3; i++) {
        periods =periods+ initialCapitalValue3 * (1 + ((interestRateValue3*i)/100));
      }
      setNumberOfPeriods3(periods);
    } else {
      setNumberOfPeriods3(null);
    }
  };

  const [initialCapital4, setInitialCapital4] = useState('');
  const [interestRate4, setInterestRate4] = useState('');
  const [totalCapitalAndInterest4, setTotalCapitalAndInterest4] = useState('');
  const [numberOfPeriods4, setNumberOfPeriods4] = useState(null);

  const calculateNumberOfPeriods4 = () => {
    const initialCapitalValue4 = parseFloat(initialCapital4);
    const interestRateValue4 = parseFloat(interestRate4);
    const totalCapitalAndInterestValue4 = parseFloat(totalCapitalAndInterest4);

    if (!isNaN(initialCapitalValue4) && !isNaN(interestRateValue4) && !isNaN(totalCapitalAndInterestValue4)) {
      const periods4 =totalCapitalAndInterestValue4 /( 1 + (initialCapitalValue4 *( interestRateValue4/100)))
      setNumberOfPeriods4(periods4);
    } else {
      setNumberOfPeriods4(null);
    }
  };
  return (
    <div>

      <div className="recentCustomers2">
        <div >
          <p className="cardHeaderText"> Thông tin khách hàng</p>
        </div>
        <div className="rowFlex">
          <div className="marginLeft">
            <p className="margin">Họ và tên</p>
            <input className="input" />
          </div>
          <div className="marginLeft">
            <p className="margin">Giới tính</p>
            <select className="inputSelect" id="genderSelect">
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================ Order Details List ================= */}
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>I. Tính kỳ hạn</h2>
            <a href="#" className="btn">
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số vốn ban đầu</p>
              <input type="number" value={initialCapital} onChange={(e) => setInitialCapital(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số % lãi suất</p>
              <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập tổng vốn và lãi</p>
              <input type="number" value={totalCapitalAndInterest} onChange={(e) => setTotalCapitalAndInterest(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Số kỳ hạn là : </p>
            {numberOfPeriods !== null && (
              <p className="resultNumber">  {numberOfPeriods.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods}>Tính</button>
          </div>
        </div>

        {/* ================= New Customers ================ */}
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>II. Tính tổng</h2>
            <a href="#" className="btn">
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số vốn ban đầu</p>
              <input type="number" value={initialCapital2} onChange={(e) => setInitialCapital2(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số % lãi suất</p>
              <input type="number" value={interestRate2} onChange={(e) => setInterestRate2(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số kỳ hạn</p>
              <input type="number" value={totalCapitalAndInterest2} onChange={(e) => setTotalCapitalAndInterest2(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Tính vốn và lãi : </p>
            {numberOfPeriods2 !== null && (
              <p className="resultNumber">  {numberOfPeriods2.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods2}>Tính</button>
          </div>
        </div>

        <div className="recentOrders">
          <div className="cardHeader">
            <h2>III. Tổng tiền từng kỳ hạn</h2>
            <a href="#" className="btn">
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số vốn ban đầu</p>
              <input type="number" value={initialCapital3} onChange={(e) => setInitialCapital3(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số % lãi suất</p>
              <input type="number" value={interestRate3} onChange={(e) => setInterestRate3(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số kỳ hạn</p>
              <input type="number" value={totalCapitalAndInterest3} onChange={(e) => setTotalCapitalAndInterest3(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Tổng tiền từng kỳ hạn là : </p>
            {numberOfPeriods3 !== null && (
              <p className="resultNumber">  {numberOfPeriods3.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods3}>Tính</button>
          </div>
        </div>

        <div className="recentOrders">
          <div className="cardHeader">
            <h2>IV. Tính gốc</h2>
            <a href="#" className="btn">
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số kỳ hạn</p>
              <input type="number" value={initialCapital4} onChange={(e) => setInitialCapital4(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số % lãi suất</p>
              <input type="number" value={interestRate4} onChange={(e) => setInterestRate4(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập tổng vốn và lãi</p>
              <input type="number" value={totalCapitalAndInterest4} onChange={(e) => setTotalCapitalAndInterest4(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Số tiền vốn là : </p>
            {numberOfPeriods4!== null && (
              <p className="resultNumber">  {numberOfPeriods4.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods4}>Tính</button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default LaiDon;
