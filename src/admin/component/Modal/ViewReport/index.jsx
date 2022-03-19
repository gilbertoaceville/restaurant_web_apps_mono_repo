/**
 * THIS CARD HAS SOME AMENDMENT TO BE MADE.
 * The flow of data is not clear.
 * The filter parameter is not clear also.
 *
 * I've stop the design until the flow is finalized to avoid rewriting code.
 *
 */

import React from "react";
import {
  ViewReportWrapper,
  ReportCard,
  CardHeader,
  OverLay,
} from "./viewReport.styles";
import { RiArrowDownSLine, RiPrinterLine } from "react-icons/ri";
import { GrDocumentDownload } from "react-icons/gr";
import { SelectDropdown } from "../../../../lib/components/SelectDropdown";


const Index = ({ onClick }) => {
  return (
    <ViewReportWrapper >
      <OverLay onClick={onClick}/>
      <ReportCard>
        <CardHeader>
          <div className="leftDiv">
            <div className="monthlyArrow">
              <SelectDropdown
                selectLabel="Sort By Month"
                selectOptions={Months}
                width="100%"
              />
            </div>
          </div>
          <div className="centerDiv">
            <RiPrinterLine title="Print Report" />
          </div>
          <div className="rightDiv">
            <GrDocumentDownload title="Download Report" />
          </div>
        </CardHeader>
      </ReportCard>
    </ViewReportWrapper>
  );
};

export default Index;

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
