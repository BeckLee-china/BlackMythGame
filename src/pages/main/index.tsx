import React, { FC, useEffect, useState } from "react";
import { MENU } from "./config";
import styles from "./index.module.scss";
import { Menu } from "antd";

export const MainPage: FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const audio = document.querySelector("audio");
        if (audio) {
            audio.volume = 0.3;
        }
    }, []);

    const onPlay = () => {
        const audio = document.querySelector("audio");
        if (audio) {
            audio.play();
            audio.volume = 0.3;
        }
        setIsClicked(true);
    };

    return (
        <div className={styles.wrapper} onClick={onPlay} onKeyDown={onPlay}>
            {/*<video*/}
            {/*    className={styles["background-video"]}*/}
            {/*    src={process.env.PUBLIC_URL + "/background.mp4"}*/}
            {/*    autoPlay*/}
            {/*    muted*/}
            {/*    loop*/}
            {/*/>*/}
            <Image
                className={styles["background-video"]}
                src={process.env.PUBLIC_URL + "/start.jpg"}
            />
            <audio src={process.env.PUBLIC_URL + "/main.mp3"} autoPlay></audio>

            {/* 新添加的顶部链接 */}
            <a href="https://blackmonkey.top" className={styles.topLink} target="_blank" rel="noopener noreferrer">
                黑猴网（https://blackmonkey.top/）
            </a>

            <div
                className={styles.pause}
                onClick={(e) => {
                    e.stopPropagation();
                    document.querySelector("audio")?.pause();
                }}
            >
                关闭声音
            </div>
            {!isClicked ? (
                <div className={styles.tips}>
                    <img src={process.env.PUBLIC_URL + "/logo_wukong.png"} alt="title"/>
                    <div>按下任意按键开始游戏</div>
                </div>
            ) : (
                <div className={styles.menu}>
                    <Menu items={MENU}/>
                </div>
            )}
        </div>
    );
};