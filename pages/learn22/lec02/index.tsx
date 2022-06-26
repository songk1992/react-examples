import React, { useState, useMemo } from 'react';
import data from './temp-data.json'; // https://jsonplaceholder.typicode.com/todos
import styles from '../../../styles/learn22/mytable.module.css';
import Pagination from '../../../components/learn22/Pagination';
import { NextPage } from 'next';

// reference https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
// reference https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-react

const rowsPerPage = 20;

const MyTable: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * rowsPerPage;
    const lastPageIndex = firstPageIndex + rowsPerPage;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className={styles.myTable}>
      <div className={styles.myTableContainer}>
        <table>
          <thead>
            <tr>
              <th>Idx</th>
              <th></th>
              <th></th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>😃</td>
                  <td>😃</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed ? '😂' : '😃'}</td>
                  <td>보기</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} totalCount={data.length} pageSize={rowsPerPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default MyTable;
// reference https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
// reference https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-react
