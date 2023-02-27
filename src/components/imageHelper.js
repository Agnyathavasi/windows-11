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
import videosFile from "../imgs/startIcons/videosFile.png";
import vlc from "../imgs/startIcons/vlc.png";
import vscode from "../imgs/startIcons/vscode.png";
import word from "../imgs/startIcons/word.png";

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
      image: videosFile,
      title: "Movie 1",
      time: "Recently",
    },
    {
      image: picturesFile,
      title: "Image 1",
      time: "Recently",
    },
    {
      image: videosFile,
      title: "Movie 2",
      time: "Recently",
    },
    {
      image: picturesFile,
      title: "Image 2",
      time: "Recently",
    },
    {
      image: videosFile,
      title: "Movie 3",
      time: "Recently",
    },
    {
      image: picturesFile,
      title: "Image 3",
      time: "Recently",
    },
  ];
}
