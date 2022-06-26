import { FunctionComponent } from 'react';
import React from 'react';
import { usePagination, DOTS } from '../../hooks/learn22/usePagination';
import styles from '../../styles/learn22/pagination.module.css';

// reference https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
// reference https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-react

interface Props {
  onPageChange: (checked: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: FunctionComponent<Props> = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 0;
  return (
    <ul className={styles.paginationContainer}>
      <li className={currentPage === 1 ? styles.disabled : ''} onClick={onPrevious}>
        <div className='arrow-left'>&lt;</div>
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className={styles.dots}>&#8230;</li>;
          }

          return (
            <li className={pageNumber === currentPage ? styles.selected : ''} onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </li>
          );
        })}
      <li className={currentPage === lastPage ? styles.disabled : ''} onClick={onNext}>
        <div className='arrow-right'>&gt;</div>
      </li>
    </ul>
  );
};

export default Pagination;
