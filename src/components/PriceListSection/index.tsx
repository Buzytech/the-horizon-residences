import React from "react";
import styles from "./PriceListSection.module.css";

const priceData = [
  {
    type: "4BHK+UTILITY",
    saleable: "359.07 SQUARE METRE (3865 SQUARE FEET)",
    exclusive: "247.54 SQUARE METRE (2664.52 SQUARE FEET)",
    carpet: "188.35 SQUARE METRE (2027.38 SQUARE FEET)",
    price: "INR 5.56* CRORE",
  },
  {
    type: "4.5BHK+UTILITY",
    saleable: "407.38 SQUARE METRE (4385 SQUARE FEET)",
    exclusive: "280.90 SQUARE METRE (3023.61 SQUARE FEET)",
    carpet: "209.19 SQUARE METRE (2251.72 SQUARE FEET)",
    price: "INR 6.31* CRORE",
  },
  {
    type: "5BHK+UTILITY",
    saleable: "474.27 SQUARE METRE (5105 SQUARE FEET)",
    exclusive: "327.04 SQUARE METRE (3520.25 SQUARE FEET)",
    carpet: "2568.93 SQUARE METRE (SQUARE FEET)",
    price: "INR 7.35* CRORE",
  },
];

const PriceListSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className="horizonContainer">
        <div className={styles.priceHeading}>
          <h2 className={styles.heading}>
            PRICE LIST (EXCLUDING FULLY FURNISHED APARTMENTS)
          </h2>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>TYPOLOGY</th>
                <th>AREA TYPE</th>
                <th>SIZE</th>
                <th>ALL INCLUSIVE (₹CRORES)</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item) => (
                <React.Fragment key={item.type}>
                  <tr>
                    <td rowSpan={3}>{item.type}</td>
                    <td>SALEABLE AREA</td>
                    <td>{item.saleable}</td>
                    <td rowSpan={3}>{item.price}</td>
                  </tr>
                  <tr>
                    <td>BUILTUP AREA</td>
                    <td>{item.exclusive}</td>
                  </tr>
                  <tr>
                    <td>CARPET AREA</td>
                    <td>{item.carpet}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;
