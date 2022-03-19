import React, { useEffect, useState, useRef } from "react";
import { capitalizeWords } from "../../../../lib/factory.lib";
import { MdOutlineCall, MdMoreVert as More } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import {
  EmailPhoneWrapper,
  CardWrapper,
  CardDetailsWrapper,
  UserImageWrapper,
  UserDetailsWrapper,
  CardTextButtonWrapper,
  Status,
  DispatcherSection,
} from "./multiPurposeCard.styles";
import ViewReportModal from "../../Modal";

const index = ({
  userData,
  isCustomers,
  onClickCall,
  isDeliveries,
  isDispatcher,
  onClickCancel,
  onClickMessage,
  userDetailsStyle,
  onClickViewReport,
}) => {
  const [open, setOpen] = useState(false);
  // const [sortedData, setSortedData] = useState(userData)
  const wrapper = useRef(null);

  const handleClickOutside = ({ target }) => {
    if (wrapper.current && !wrapper.current.contains(target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const deliveryReport = () => {
    alert("hello");
  };
  const sortedArray = userData.sort((b, a) => {
    return b.isVerified - a.isVerified;
  });
  return (
    <React.Fragment>
      {sortedArray.map((item, index) => {
        return (
          <CardWrapper key={"idx" + index} ref={wrapper}>
            <CardDetailsWrapper style={userDetailsStyle}>
              <UserImageWrapper>
                <div title={item.userName}>
                  <img
                    className={"userImage"}
                    src={item.userImage.src}
                    alt="User Image"
                  />
                </div>
              </UserImageWrapper>

              <UserDetailsWrapper>
                <div className={"userName"}>
                  {capitalizeWords(item.userName)}
                </div>
                <div className={"userAddress"}>
                  {item.userAddress.toLowerCase()}
                </div>
                <div className={"userGender"}>
                  {capitalizeWords(item.userGender)}
                </div>
              </UserDetailsWrapper>
            </CardDetailsWrapper>

            <EmailPhoneWrapper>
              <div className={"subWrapper"}>
                <div className={"userEmail"}>
                  {item.userEmail.toLowerCase()}
                </div>
                <div title={`call ${item.userName}`} className={"userPhone"}>
                  <div onClick={onClickCall} className={"call"}>
                    <MdOutlineCall />
                  </div>
                  {item.userPhone}
                </div>
              </div>
            </EmailPhoneWrapper>
            <Status>
              {isDeliveries ? (
                <>
                  <div className="deliveryStatus">Delivered</div>
                  <div
                    onClick={onClickViewReport}
                    className="deliveryReport"
                    title="View Delivery Report"
                  >
                    {"View Report"}
                  </div>
                </>
              ) : isCustomers ? (
                <div className={"text"}>
                  <span title="view messages" onClick={onClickMessage}>
                    {"Message"}
                  </span>
                </div>
              ) : isDispatcher ? (
                <DispatcherSection>
                  <div className="pending-profile">
                    {item.isVerified ? (
                      <div
                        title={`${item.userName} has been verified`}
                        className="verified"
                      >
                        {"Verified"}
                      </div>
                    ) : (
                      <div className="pending">{"Pending Verification"}</div>
                    )}
                    <div title="view profile" className="profile">
                      {"View Profile"}
                    </div>
                  </div>
                  {item.isVerified ? (
                    ""
                  ) : (
                    <div
                      title={`verify ${item.userName}`}
                      className="verifyButton"
                    >
                      {"Verify"}
                    </div>
                  )}
                </DispatcherSection>
              ) : (
                ""
              )}
            </Status>

            <CardTextButtonWrapper>
              <div className={"button"}>
                {isDeliveries ? (
                  <div
                    title={`order delivered ${item.orderTime}`}
                    style={{ justifyContent: "center" }}
                    className={"time"}
                  >
                    {item.orderTime}
                  </div>
                ) : isCustomers || isDispatcher ? (
                  <div className={"callTime"}>
                    <div
                      style={{ justifyContent: "center" }}
                      className={"time"}
                      title={`Order is ${item.userKmAway}km away`}
                    >
                      {item.userKmAway}
                      {"km away"}
                    </div>
                    {isDispatcher ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          padding: "10px 0px 0px 0px",
                        }}
                        className={"callCancel"}
                      >
                        <div className={"call"}>
                          <div onClick={onClickCancel} className={"cancel"}>
                            {item.isVerified ? (
                              <div className="dropdownIconHolder">
                                <More
                                  onClick={() => setOpen(!open)}
                                  color="gray"
                                />
                                {open && (
                                  <div className="moreDropdown">
                                    <div>{"View Report"}</div>
                                    <div>{"Remove"}</div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div
                                title={`Cancel ${item.userName}'s request`}
                                className="cancelButton"
                              >
                                {"Cancel"}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={"callCancel"}>
                        <div onClick={onClickCancel} className={"cancel"}>
                          <FcCancel
                            title="Cancel Order Request"
                            backgroundColor="none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </CardTextButtonWrapper>
          </CardWrapper>
        );
      })}
    </React.Fragment>
  );
};

export default index;
