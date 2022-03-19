import styled from "styled-components";

export const BarChartMain = styled.section`
  background: ${({ barChartBk }) => barChartBk || "#fff"};
  position: relative;

  .container {
    width: 95%;
    margin: auto;
  }

  .canvas {
    padding-bottom: 20px;
  }
`;

export const LineChartMain = styled.section`
  background: ${({ barChartBk }) => barChartBk || "#fff"};
  position: relative;
  .scrolling {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
export const LineChartWrap = styled("div")`
  padding: 20px;
  background: white;
  .canvas {
    min-width: 700px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
      display: grid;
      justify-content: stretch;
      grid-gap: 15px;
    }
    .title {
      h2 {
        color: #8798ad;
        font-size: 1rem;
        font-weight: bold;
      }
    }
    .sub-title {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-left: 10px;
      flex: 1;
      flex-wrap: wrap;
      @media (max-width: 1300px) {
        display: grid;
        justify-content: stretch;
        grid-gap: 15px;
        margin: 0;
        grid-template-columns: 1fr;
        align-items: start;
        border: 1px solid #dbdbdb;
        padding: 20px;
      }

      .dropdown-container {
        .sort {
          margin-left: 30px;
        }
        @media (max-width: 1300px) {
          display: grid;
          grid-gap: 15px;
          justify-content: stretch;
          width: 80%;
          margin: auto;
          .sort {
            margin: 0;
            width: 100% !important;

            & > section {
              min-width: 100%;
            }
            .click {
              justify-content: space-between;
              padding: 0.5rem 0.75rem;
            }
          }

          .dropdownModalBox {
            margin: 0;
            width: 100% !important;
            min-width: 100%;
            & > section {
              min-width: 100%;
            }
            .click {
              justify-content: space-between;
              padding: 0.5rem 0.75rem;
            }
          }
        }
        @media (max-width: 800px) {
          width: 100%;
        }
      }

      .label-and-vieww-type {
        padding: 5px 0 5px 50px;
        @media (max-width: 1300px) {
          display: grid;
          padding: 0;
          justify-content: stretch;
          grid-gap: 15px;
          order: -1;
        }

        .select-view-type-container {
          display: inline-grid;
          grid-gap: 5px;
          grid-template-columns: auto auto auto;
          .trueChartType {
            background: #8e9093;
            svg {
              fill: white;
            }
            &:hover {
              background: #a3a5a6 !important;
              svg {
                fill: #fff !important;
              }
            }
          }
          .select-view-type-list-item {
            list-style-type: none;
            padding: 2px 4px;
            border-radius: 3px;
            height: max-content;
            display: flex;
            justify-content: center;
            cursor: pointer;
            @media (max-width: 1300px) {
              border: 1px solid #dbdbdb;
              padding: 8px 3px;
            }
            svg {
              display: list-item;
              height: 18px;
              width: 18px;
            }
            &:hover {
              background: #eeeff2;
            }
          }
          @media (max-width: 800px) {
            width: 100%;
          }
        }
        .label-container {
          
          & > span {
            color: #8798ad;
            font-weight: 400;
            margin-left: 40px;
            position: relative;
            width: max-content;
            &:before {
              content: "";
              height: 7px;
              width: 7px;
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              left: -20px;
              border-radius: 50%;
            }
          }
          @media (max-width: 1300px) {
            width: 100%;
            justify-content: flex-end;
            order: -1;
          }
        }
        @media (max-width: 800px) {
          display: grid;
          grid-gap: 15px;
          align-items: stretch;
          justify-content: stretch;
        }
      }
    }
  }
  .container table {
    thead tr th {
      padding: 0.8em 1em;
      min-width: 50px;
    }
    tbody tr td {
      padding: 0.8em 1em;
      min-width: 50px;
    }
  }
`;

export const Label = styled.span`
  &:before {
    background: ${({ color }) => (color ? color : "#ff6600")};
  }
`;

export const ChartTableStyles = styled.span`
  tbody tr {
    border-left-width: 10px !important;
    border-left-style: solid !important;
  }
  @media (max-width: 900px) {
    tbody tr {
      border-left-width: 4px !important;
    }
  }
  tbody tr:nth-child(1) {
    border-left-color: ${({ colors }) =>
      colors ? `  ${colors[0]} !important` : "none"};
  }
  tbody tr:nth-child(3) {
    border-left-color: ${({ colors }) =>
      colors ? `  ${colors[1]} !important` : "none"};
  }
  tbody tr:nth-child(5) {
    border-left-color: ${({ colors }) =>
      colors ? ` ${colors[2]} !important` : "none"};
  }
  tbody tr:nth-child(7) {
    border-left-color: ${({ colors }) =>
      colors ? `  ${colors[3]} !important` : "none"};
  }
`;
