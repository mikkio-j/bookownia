import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  margin: 0;
  width: 100%;
`;

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Dochód',
          data: [60, 40, 28, 51, 42, 109, 100, 143, 126, 60],
        },
      ],
      options: {
        markers: {
          colors: ['#F44336', '#E91E63', '#9C27B0'],
        },
        chart: {
          height: 450,
          type: 'area',
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#F44336', '#E91E63', '#9C27B0'],
          },
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2020-01-01T00:00:00.000Z',
            '2020-02-01T01:30:00.000Z',
            '2020-03-01T02:30:00.000Z',
            '2020-04-01T03:30:00.000Z',
            '2020-05-01T04:30:00.000Z',
            '2020-06-01T05:30:00.000Z',
            '2020-07-01T06:30:00.000Z',
            '2020-08-01T04:30:00.000Z',
            '2020-09-01T05:30:00.000Z',
            '2020-10-01T06:30:00.000Z',
          ],
          labels: {
            show: true,
            style: {
              colors: '#ffffff',
              fontSize: '12px',
              fontFamily: 'Roboto',
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: '#ffffff',
              fontSize: '12px',
              fontFamily: 'Roboto',
              fontWeight: 400,
            },
          },
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };
  }

  render() {
    const { options, series } = this.state;
    return (
      <ChartWrapper id="chart">
        <Chart options={options} series={series} type="area" height={350} />
      </ChartWrapper>
    );
  }
}

export default ApexChart;
