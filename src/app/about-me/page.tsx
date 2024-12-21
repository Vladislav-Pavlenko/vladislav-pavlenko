"use client";
import { useState } from "react";
import Header from "../components/Header/Header";
import ModalMenu from "../components/ModalMenu/ModalMenu";
import styles from "./page.module.css";
import Footer from "../components/Footer/Footer";
import AboutList from "./components/AboutList/AboutList";
import AboutListItem from "./components/AboutListItem/AboutListItem";
import FolderList from "./components/FolderList/FolderList";
import FolderListItem from "./components/FolderListItem/FolderListItem";
import FileList from "./components/FileList/FileList";
import FileListItem from "./components/FileListItem/FileListItem";
import Link from "./components/Link/Link";
import OutputWindow from "./components/OutputWindow/OutputWindow";
import withReduxPersist from "./../redux/withReduxPersist";
import CodeSnippet from "./components/CodeSnippet/CodeSnippet";
function AboutMe() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      <Header setVisible={setVisible} />
      <main>
        <h1 className={styles.title}>_about-me</h1>
        <AboutList>
          {/* Personal info */}
          <AboutListItem name="personal-info">
            <FolderList>
              {/* Bio folder */}
              <FolderListItem color="red" name="bio">
                <FileList>
                  <FileListItem>biography</FileListItem>
                </FileList>
              </FolderListItem>
              {/* Interests folder */}
              <FolderListItem color="green" name="interests">
                <FileList>
                  <FileListItem>programming</FileListItem>
                </FileList>
              </FolderListItem>
              {/* Education folder */}
              <FolderListItem color="violet" name="education">
                <FileList>
                  <FileListItem>collage</FileListItem>
                  <FileListItem>GoIT</FileListItem>
                </FileList>
              </FolderListItem>
            </FolderList>
          </AboutListItem>
          {/* Professional info */}
          <AboutListItem name="professional-info">
            <FolderList>
              {/* Skills folder */}
              <FolderListItem color="red" name="skills">
                <FileList>
                  <FileListItem>tech-skills</FileListItem>
                  <FileListItem>soft-skills</FileListItem>
                </FileList>
              </FolderListItem>
              {/* Summary folder */}
              <FolderListItem color="green" name="summary">
                <FileList>
                  <Link
                    iconName="link"
                    link="/file/pavlenko-vladislav-frontend-developer.pdf"
                    download={true}
                  >
                    go-to-summary
                  </Link>
                </FileList>
              </FolderListItem>
            </FolderList>
          </AboutListItem>
          {/* Hobbies */}
          <AboutListItem name="hobbies">
            <FileList>
              <FileListItem>swimming</FileListItem>
              <FileListItem>gaming</FileListItem>
            </FileList>
          </AboutListItem>
          {/* Contacts */}
          <AboutListItem name="contacts">
            <FileList>
              <Link iconName="mail" link="mailto:vp632728@gmail.com">
                vp632728@gmail.com
              </Link>
              <Link iconName="phone" link="tel:380976817855">
                +380976817855
              </Link>
            </FileList>
          </AboutListItem>
        </AboutList>
        <OutputWindow />
        <CodeSnippet />
      </main>
      <Footer />

      <ModalMenu setVisible={setVisible} visible={visible} />
    </div>
  );
}

export default withReduxPersist(AboutMe);
