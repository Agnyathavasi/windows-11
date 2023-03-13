import {
  Wifi,
  ArrowForwardIos,
  Bluetooth,
  AirplanemodeActive,
  DarkMode,
  AccessibilityNew,
  LightMode,
  VolumeUp,
} from "@mui/icons-material";
import React from "react";
import {
  UncontrolledPopover,
  PopoverBody,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { getImage, getrecommendation, getTaskBar } from "./imageHelper";

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
      name: "cortana",
      icon: "bi bi-discord",
      color: "color-purple-500",
    },
    {
      name: "store",
      icon: "bi bi-discord",
      color: "color-purple-500",
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
      name: "netflix",
      icon: "bi bi-youtube",
      color: "color-red-600",
    },
    {
      name: "vscode",
      icon: "bi bi-youtube",
      color: "color-red-600",
    },
  ];
  let settingIcos = [
    {
      name: "more",
      icon: "bi bi-chevron-up",
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
                  className={`bi bi-microsoft color-blue-400 font-size-12`}
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
                          All apps <i className="bi bi-chevron-right"></i>
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
                          More <i className="bi bi-chevron-right"></i>
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
                    <div className="footer py-2 px-4 font-size-14 d-flex align-items-center justify-content-space-between">
                      <div className="profile d-flex align-items-center">
                        <i className="bi bi-person-circle"></i>
                        <span className="pl-1 font-size-9">
                          Vishwajith H Shastry
                        </span>
                      </div>
                      <div className="shutDown cursor-pointer">
                        <i id="shudDownFocus" className="bi bi-power"></i>
                        <UncontrolledPopover
                          placement="top"
                          target="shudDownFocus"
                          trigger="legacy"
                          id="shutDownPopover"
                        >
                          <PopoverBody className="color-root-900 p-0">
                            <ListGroup>
                              <ListGroupItem className="cursor-pointer">
                                <i className="bi bi-moon-fill font-size-10"></i>{" "}
                                Sleep
                              </ListGroupItem>
                              <ListGroupItem className="cursor-pointer">
                                <i className="bi bi-arrow-counterclockwise font-size-10"></i>{" "}
                                Restart
                              </ListGroupItem>
                              <ListGroupItem className="cursor-pointer">
                                <i className="bi bi-power font-size-10"></i>{" "}
                                Shut Down
                              </ListGroupItem>
                            </ListGroup>
                          </PopoverBody>
                        </UncontrolledPopover>
                      </div>
                    </div>
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
            );
          } else if (item.name !== "search")
            return (
              <div className="buttons">
                <img src={getTaskBar()[item.name]} alt={item.name} />
              </div>
            );
          else {
            return (
              <div className="searchbar ml-1 font-size-8">
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
        <div
          id="settingsPanel"
          className="d-flex align-items-center settings-hover"
        >
          {settingIcos.map((item) => {
            return (
              <div>
                <i className={`more ${item.icon}`} />
              </div>
            );
          })}
        </div>
        <UncontrolledPopover
          placement="top"
          target="settingsPanel"
          trigger="legacy"
          id="settingsPopover"
        >
          <PopoverBody>
            <div className="actn-bar">
              <div className="cardLayout">
                <div className="seticons">
                  <span className="first">
                    <Wifi className="font-size-9" />
                  </span>
                  <span className="second">
                    <ArrowForwardIos className="font-size-9" />
                  </span>
                </div>
                <span className="font-size-7">Wifi</span>
              </div>
              <div className="cardLayout">
                <div className="seticons">
                  <span className="single">
                    <Bluetooth className="font-size-9" />
                  </span>
                </div>
                <span className="font-size-7">Bluetooth</span>
              </div>
              <div className="cardLayout">
                <div className="seticons">
                  <span className="single">
                    <AirplanemodeActive className="font-size-9" />
                  </span>
                </div>
                <span className="font-size-7">Airplane Mode</span>
              </div>
              <div className="cardLayout">
                <div className="seticons">
                  <span className="single">
                    <i class="bi bi-battery-charging font-size-9"></i>
                  </span>
                </div>
                <span className="font-size-7">Battery Saver</span>
              </div>
              <div className="cardLayout">
                <div className="seticons">
                  <span className="single">
                    <DarkMode className="font-size-9 " />
                  </span>
                </div>
                <span className="font-size-7">Focus Assist</span>
              </div>
              <div className="cardLayout">
                <div className="seticons">
                  <span className="first">
                    <AccessibilityNew className="font-size-9" />
                  </span>
                  <span className="second">
                    <ArrowForwardIos className="font-size-9" />
                  </span>
                </div>
                <span className="font-size-7">Accessibility</span>
              </div>
            </div>
            <div className="input-ranges p-3">
              <div className="item d-flex justify-content-space-evenly align-items-center">
                <span>
                  <LightMode className="color-root-900 font-size-12" />
                </span>
                <input type="range" />
              </div>
            </div>
            <div className="input-ranges p-3">
              <div className="item d-flex justify-content-space-evenly align-items-center">
                <span>
                  <VolumeUp className="color-root-900 font-size-12" />
                </span>
                <input type="range" />
              </div>
            </div>
            <div className="footer d-flex justify-content-space-between align-items-center mt-1 px-3 py-2">
              <div className="font-size-8 d-flex align-items-center">
                <i class="bi bi-battery-charging font-size-12 px-1"></i>100%
              </div>
              <div className="font-size-9">
                <i class="bi bi-pencil px-2"></i>
                <i class="bi bi-gear"></i>
              </div>
            </div>
          </PopoverBody>
        </UncontrolledPopover>
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
