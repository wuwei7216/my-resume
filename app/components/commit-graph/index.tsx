import React from "react";
import { datasetList, dayList, monthList } from "@/app/data/dataset";
import styles from "./index.module.scss";
import { cn } from "@/app/utils";

const CommitGraph = () => {
  return (
    <div className={cn(styles.commitGraphWrap)}>
      <table className={cn(styles.contributionCalendarTable)}>
        <caption className={cn(styles.srOnly)} />
        <thead>
          <tr className={styles.trInThead}>
            <td className={styles.tdInThead} />
            {monthList.map<React.ReactNode>((item, i) => (
              <td className={styles.contributionCalendarLabel} colSpan={item.colSpan} key={i}>
                <span className={styles.contributionCalendarValue}>{item.value}</span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {datasetList.map<React.ReactNode>((row, i) => (
            <tr key={`tr-${i}`}>
              {dayList.map<React.ReactNode>((day, j) =>
                i === j ? (
                  <td className={styles.contributionCalendarLabel} key={`td-${j}`}>
                    <span className={styles.contributionCalendarDay}>{j % 2 ? day : null}</span>
                  </td>
                ) : null,
              )}
              {row.map<React.ReactNode>((col, k) => (
                <td
                  key={`td-${k}`}
                  data-date={col.date}
                  data-level={col.level}
                  className={styles.contributionCalendarDay}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableFooter}>
        <span>Less</span>
        {[0, 1, 2, 3, 4].map<React.ReactNode>(level => (
          <div
            key={level}
            data-level={level}
            className={cn(styles.contributionCalendarDay, styles.level)}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default CommitGraph;
