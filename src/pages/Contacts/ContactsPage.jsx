import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Chat from "../../components/Chat/Chat";
import s from "./contacts.module.scss";
import { ReactComponent as FacebookIcon } from "../../assets/Contacts/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/Contacts/twitter.svg";
import { ReactComponent as InstaIcon } from "../../assets/Contacts/instagram.svg";

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.intro}>
        <h1>Контакты</h1>
      </div>

      <div className={s.contactsInner}>
        <div className={s.chatWrapper}>
          <h2>Наш живой чат</h2>
          <Chat />
        </div>

        <div className={s.contactMeans}>
          <h2>Средства связи</h2>
          <div className={s.item}>
            <span>Телефон: </span> <span>8(800) 555-35-35</span>
          </div>
          <div className={s.item}>
            <span>Почта:</span> <span>zakanyurt@main.ru</span>{" "}
          </div>
          <div className={s.item}>
            <span>Адрес:</span> <span>Окраинная ул., 1, село Закан-Юрт</span>{" "}
          </div>
          <div className={s.item}>
            <div className={s.iconsWrapper}>
              <FacebookIcon fill="current" className={s.icon} />
              <TwitterIcon fill="current" className={s.icon} />
              <InstaIcon fill="current" className={s.icon} />
            </div>
          </div>
        </div>
      </div>

      <div className={s.yMapWrapper}>
        <YMaps className={s.yMap}>
          <Map
            className={s.yMapInner}
            style={{ height: "100%" }}
            defaultState={{
              center: [43.27105, 45.402641],
              zoom: 14.5,
            }}
          >
            <Placemark geometry={[43.27105, 45.402641]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default ContactsPage;
