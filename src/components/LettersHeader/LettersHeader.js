import React from 'react';
import filters from '../../misc/Filters.png';
import exportIcon from '../../misc/export.png';

const LettersHeader = () => {
  const down = (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.838379 1.0083L5.84045 6.00622L10.8384 1.00415"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const plus = (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83643 1.72424L5.84058 11.7242M0.838501 6.72632L10.8385 6.72217"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div>
      <div>
        <div>Настройки</div>
        <div>Пользователи</div>
      </div>
      <div>
        <img src={filters} alt="" />
        Фильтры
        {down}
      </div>
      <div>
        Экспортировать
        <img src={exportIcon} alt="" />
      </div>
      <div>
        | Добавить пользователя
        {plus}
      </div>
    </div>
  );
};
export default LettersHeader;
