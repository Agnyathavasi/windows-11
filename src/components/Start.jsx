import React from "react";
import { UncontrolledPopover, PopoverBody, Input } from "reactstrap";
import { getImage, getrecommendation } from "./imageHelper";

function Start() {
  let iconsSet = [
    {
      name: "Start",
      icon: "bi bi-microsoft",
      color: "color-blue-400",
    },
    {
      name: "search",
      icon: "bi bi-search",
    },
    {
      name: "youtube",
      icon: "bi bi-youtube",
      color: "color-red-600",
    },
    {
      name: "mail",
      icon: "bi bi-apple",
      color: "color-root-700",
    },
    {
      name: "terminal",
      icon: "bi bi-whatsapp",
      color: "color-green-400",
    },
    {
      name: "cortana",
      icon: "bi bi-discord",
      color: "color-purple-500",
    },
  ];
  let settingIcos = [
    {
      name: "more",
      icon: "bi bi-chevron-up",
    },
    {
      name: "keyboard",
      icon: "bi bi-keyboard",
    },
    {
      name: "wifi",
      icon: "bi bi-wifi",
    },
    {
      name: "megaphone",
      icon: "bi bi-volume-up",
    },
    {
      name: "battery",
      icon: "bi bi-battery-half",
    },
  ];
  return (
    <div className="start d-flex">
      <div className="icons d-flex">
        {iconsSet.map((item) => {
          if (item.name === "Start") {
            return (
              <div>
                <i
                  className={`buttons bi bi-microsoft color-blue-400 font-size-12`}
                  id="PopoverFocus"
                  type="button"
                />
                <UncontrolledPopover
                  placement="top-start"
                  target="PopoverFocus"
                  trigger="legacy"
                  id="startPopover"
                >
                  <PopoverBody className="startBody">
                    <div className="container px-4 pt-2">
                      <Input
                        placeholder="Type here to search"
                        className="inpsearch mb-2 font-size-8"
                      />
                      <div className="texts">
                        <span className="font-weight-600 font-size-10">
                          Pinned
                        </span>
                        <span className="font-size-8 allApps">
                          All apps <i class="bi bi-chevron-right"></i>
                        </span>
                      </div>
                      <div className="startApps mt-1">
                        {Object.keys(getImage()).map((item) => {
                          return (
                            <div className="start-item">
                              <img src={getImage()[item].image} alt="imgs" />
                              <div>{getImage()[item].name}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="texts mt-1">
                        <span className="font-weight-600 font-size-10">
                          Recommended
                        </span>
                        <span className="font-size-8 allApps">
                          More <i class="bi bi-chevron-right"></i>
                        </span>
                      </div>
                      <div className="recommended d-flex align-items-center">
                        {getrecommendation().map((item) => {
                          return (
                            <div className="recommended-item d-flex align-items-center">
                              <div className="recommended-item-image">
                                <img src={item.image} alt="item.name" />
                              </div>
                              <div className="recommended-item-texts">
                                <div className="recommended-item-texts-title font-size-8 font-weight-500">
                                  {item.title}
                                </div>
                                <div className="recommended-item-texts-time font-size-8 font-weight-500 color-root-600">
                                  {item.time}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="footer py-2 px-4 d-flex justify-content-space-between">
                      <div className="profile">
                        <i class="bi bi-person-circle"></i>
                      </div>
                      <div className="shutDown">
                        <i class="bi bi-power"></i>
                      </div>
                    </div>
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
            );
          } else if (item.name !== "search")
            return (
              <i
                className={`buttons ${item.icon} ${item.color} font-size-12`}
              />
            );
          else {
            return (
              <div className="searchbar font-size-8">
                <i className={`${item.icon} color-root-900`} />
                <input
                  type="text"
                  placeholder="Search"
                  className="inpfield font-weight-500"
                />
              </div>
            );
          }
        })}
      </div>
      <div className="settings color-root-900 font-size-9">
        {settingIcos.map((item) => {
          if (!["more", "wifi", "battery", "megaphone"].includes(item.name))
            return <i className={`setting-actn ${item.icon}`} />;
          else return <i className={`more ${item.icon}`} />;
        })}
        <div className="col font-size-7 px-1">
          <div className="row-6">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="row-6">{new Date().toLocaleDateString("en-GB")}</div>
        </div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Start;
