import androidStudio from "../imgs/startIcons/androidStudio.png";
import calculator from "../imgs/startIcons/calculator.png";
import calendar from "../imgs/startIcons/calendar.png";
import edge from "../imgs/startIcons/edge.png";
import excel from "../imgs/startIcons/excel.png";
import mail from "../imgs/startIcons/mail.png";
import netflix from "../imgs/startIcons/netflix.png";
import office from "../imgs/startIcons/office.png";
import outlook from "../imgs/startIcons/outlook.png";
import picturesFile from "../imgs/startIcons/picturesFile.png";
import photos from "../imgs/startIcons/photos.png";
import pwrppt from "../imgs/startIcons/pwrppt.png";
import recycleBin from "../imgs/startIcons/recycleBin.png";
import settings from "../imgs/startIcons/settings.png";
import store from "../imgs/startIcons/store.png";
import teams from "../imgs/startIcons/teams.png";
import thisPC from "../imgs/desktopIcons/thisPC.png"
import videosFile from "../imgs/startIcons/videosFile.png";
import vlc from "../imgs/startIcons/vlc.png";
import vscode from "../imgs/startIcons/vscode.png";
import word from "../imgs/startIcons/word.png";

import cortana from "../imgs/taskbarIcons/cortana.png";
import terminal from "../imgs/taskbarIcons/terminal.png";

export function getTaskBar() {
  return {
    mail: mail,
    cortana: cortana,
    store: store,
    terminal: terminal,
    netflix: netflix,
    vscode: vscode,
  };
}

export function getImage() {
  return {
    androidStudio: { image: androidStudio, name: "Android Studio" },
    calculator: { image: calculator, name: "Calculator" },
    calendar: { image: calendar, name: "Calendar" },
    edge: { image: edge, name: "Edge" },
    excel: { image: excel, name: "Excel" },
    mail: { image: mail, name: "Mail" },
    netflix: { image: netflix, name: "Netflix" },
    office: { image: office, name: "Office" },
    outlook: { image: outlook, name: "Outlook" },
    photos: { image: photos, name: "Photos" },
    pwrppt: { image: pwrppt, name: "Power Point" },
    recycleBin: { image: recycleBin, name: "Recycle Bin" },
    settings: { image: settings, name: "Settings" },
    store: { image: store, name: "Store" },
    teams: { image: teams, name: "Teams" },
    vlc: { image: vlc, name: "VLC" },
    vscode: { image: vscode, name: "VS Code" },
    word: { image: word, name: "Word" },
  };
}

export function getrecommendation() {
  return [
    {
      image: calendar,
      title: "Meeting : Global level",
      time: "in 10min",
    },
    {
      image: vlc,
      title: "Avengers Infinity War",
      time: "5min ago",
    },
    {
      image: videosFile,
      title: "The Amazing Spiderman",
      time: "20min ago",
    },
    {
      image: picturesFile,
      title: "Howdu Huliya",
      time: "1yr ago",
    },
    {
      image: videosFile,
      title: "Movie 3",
      time: "Recently",
    },
    {
      image: pwrppt,
      title: "Presentation",
      time: "Recently",
    },
  ];
}

export function getdesktopicons() {
  return [
    {
      image: thisPC,
      name: 'This PC'
    },
    {
      image: recycleBin,
      name: 'Recycle Bin'
    },
    {
      image: edge,
      name: 'Edge'
    },
    {
      image: store,
      name: 'Store'
    },
    {
      image: vscode,
      name: 'VS Code'
    },
  ];
}
