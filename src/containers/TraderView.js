import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { TraderViewStyle } from "./TraderViewStyle";
import traderImg from "../images/trader.png";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";
export default function TraderView() {
  const [monthData, setMonthData] = useState([]);
  const [bgColor, setBgColor] = useState([]);
  const [sortedMonth, setSortedMonth] = useState({});
  const params = useParams();
  const selector = useSelector((state) => state);
  const { payload } = selector.payload;
  const result = payload.filter((item) => item.id === +params.id);
  const {
    id,
    asset,
    name,
    description,
    roi,
    investors,
    current_assets,
    personal_assets,
    min_deposit,
    max_deposit,
    max_investors,
    pnl,
    history,
    fee,
    allowed_dropdown,
  } = result[0];

  const [selectOptions, setSelectOptions] = useState([]);
  ////Select

  const handleOption = (e) => {
    setSortedMonth(history[e]);
  };

  const upload = () => {
    var arrayOfKeys = [];
    for (const keys in history) {
      arrayOfKeys.push(keys);
    }
    setSelectOptions(arrayOfKeys);
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function loop(months) {
    var bgColors = [];
    var traders = months.map((item) => {
      if (sortedMonth[item]) {
        if (sortedMonth[item] <= 0 || sortedMonth[item] == "") {
          bgColors.push("red");
        } else {
          bgColors.push("green");
        }
        return sortedMonth[item];
      }

      return "0";
    });
    return { traders, bgColors };
  }

  useEffect(() => {
    upload();
  }, []);

  useEffect(() => {
    setMonthData(loop(months).traders);
    setBgColor(loop(months).bgColors);
  }, [sortedMonth]);

  const data = {
    labels: months,
    datasets: [
      {
        label: "",
        data: monthData,
        backgroundColor: bgColor,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 100,
            suggestedMin: -10,
          },
        },
      ],
    },
  };

  return (
    <>
      <Header />
      <TraderViewStyle>
        <div className="infoContainer">
          <div className="traderPersonalInfo">
            <img src={traderImg} alt="traderImg" />
            <div className="name">
              <h3>{name}</h3>
              <p>Выступил команду </p>
              <h5>{description}</h5>
            </div>
          </div>
          <div className="workInfo">
            <div className="workInfo_header">
              <div className="workInfo_header-data">
                <h4>ROI</h4>
                <p>{roi}</p>
              </div>
              <div>
                <h4>Investors</h4>
                <p>{investors}</p>
              </div>
            </div>
            <div className="workInfo_body">
              <div className="private-info">
                <div className="info">
                  <p>Активов под управлением</p>
                  <h6>
                    {asset} {current_assets}
                  </h6>
                </div>
                <div className="info">
                  <p>Собственные активы трейдера</p>
                  <h6>
                    {asset} {personal_assets}
                  </h6>
                </div>
                <div className="info">
                  <p>Минимальный депозит</p>
                  <h6>
                    {asset} {min_deposit}
                  </h6>
                </div>
                <div className="info">
                  <p>Максимальный депозит</p>
                  <h6>{max_deposit}</h6>
                </div>
              </div>
              <div className="private-info">
                <div className="info">
                  <p>Копирование сделок</p>
                  <h6>DA</h6>
                </div>
                <div className="info">
                  <p>Комиссия с успешных сделок</p>
                  <h6>{fee}%</h6>
                </div>
                <div className="info">
                  <p>Допустимая просадка</p>
                  <h6>{allowed_dropdown}%</h6>
                </div>
                <div className="info">
                  <p>Максимальная количество инвесторов</p>
                  <h6>{max_investors}</h6>
                </div>
              </div>
              <div className="private-info">
                <div className="dataPnl">
                  <h4>Pnl</h4>
                  {pnl.map((item) => {
                    return (
                      <div>
                        <p>
                          <span>{item[0]}</span>
                          <span>
                            {item[1] > 0 ? (
                              <span style={{ color: "green" }}>{item[1]}%</span>
                            ) : (
                              <span style={{ color: "red" }}>{item[1]}%</span>
                            )}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chartContainer">
          <div className="chart">
            <Bar data={data} options={options} />
          </div>

          <div className="selectYear">
            <h4>Выберите год </h4>
            <select
              onChange={(e) => handleOption(e.target.value)}
              name="select"
            >
              {selectOptions?.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
        </div>
        <Link to="/traders">Все трейдеры</Link>
      </TraderViewStyle>
    </>
  );
}
