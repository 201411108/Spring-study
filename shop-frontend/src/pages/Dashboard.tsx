import { createQuery } from '@tanstack/solid-query';
import { Component, For, useContext } from 'solid-js';
import AxiosContext from '../contexts/AxiosContext';

const Dashboard: Component = () => {
  const axios = useContext(AxiosContext);
  const { data } = createQuery(
    () => ['문자열 받기 예제'],
    () => axios.get('/test/ex01')
  );

  const { data: ex02Data } = createQuery(
    () => ['문자열 받기 예제2'],
    () =>
      axios.get<{
        id: number;
        itemDetail: string;
        itemName: string;
        price: number;
        regTime: Date;
        updateTime?: Date;
        sellStatCd?: string;
      }>('/test/ex02')
  );

  const { data: ex03Data } = createQuery(
    () => ['문자열 받기 예제3'],
    () =>
      axios.get<{
        itemDtoList: {
          id: number;
          itemDetail: string;
          itemName: string;
          price: number;
          regTime: Date;
          updateTime?: Date;
          sellStatCd?: string;
        }[];
      }>('/test/ex03')
  );
  data: {
    itemName: '테스트 상품5';
  }

  const { data: ex04Data } = createQuery(
    () => ['문자열 받기 예제4'],
    () => axios.get(`/test/ex04/10000`)
  );

  return (
    <div>
      <div>
        예제 1 : <span>{data?.data}</span>
      </div>
      <div>
        예제 2 : <span>{JSON.stringify(ex02Data?.data)}</span>
      </div>
      <div>
        예제 3 :
        <For each={ex03Data?.data.itemDtoList}>
          {(itemDto) => <span>{JSON.stringify(itemDto)}</span>}
        </For>
      </div>
    </div>
  );
};

export default Dashboard;
