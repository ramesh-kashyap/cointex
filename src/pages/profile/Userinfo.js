import React from 'react';

const Header = () => (
  <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
    <a href="#" className="left back-btn">
      <i className="icon-left-btn"></i>
    </a>
    <a href="qr-code.html" className="right text-secondary">
      <i className="icon-barcode"></i>
    </a>
  </div>
);

const ProfileCard = ({ name, avatar, status }) => (
  <div className="bg-menuDark tf-container">
    <a href="profile.html" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
      <div className="box-account">
        <img src={avatar} alt="img" className="avt" />
        <div className="info">
          <h5>{name}</h5>
          <p className="text-small text-secondary mt-8 mb-8">Profile and settings</p>
          <span className={`tag-xs style-2 round-2 ${status === "Unverified" ? "red" : "green"}`}>{status}</span>
        </div>
      </div>
      <span className="arr-right">
        <i className="icon-arr-right"></i>
      </span>
    </a>
  </div>
);

const MenuSection = ({ title, items }) => (
  <div className="bg-menuDark tf-container">
    <div className="pt-12 pb-12 mt-4">
      <h5>{title}</h5>
      <ul className="mt-16 grid-3 gap-12">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
              <i className={`icon ${item.icon}`}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Userinfo = () => {
  const userData = {
    name: "Tony Nguyen",
    avatar: "assets/images/avt/avt2.jpg",
    status: "Unverified",
  };

  const buyCryptoItems = [
    { icon: "icon-currency", label: "Currency", link: "#cryptocurrency" },
    { icon: "icon-swap", label: "Exchange", link: "exchange-market.html" },
  ];

  const exchangeItems = [
    { icon: "icon-convert", label: "Convert", link: "#" },
    { icon: "icon-metalogo", label: "Consign", link: "#" },
    { icon: "icon-bank", label: "Deposit", link: "#" },
    { icon: "icon-fileText", label: "Futures contract", link: "#" },
    { icon: "icon-graph", label: "Ageless", link: "#" },
    { icon: "icon-grid-nine", label: "Choice", link: "#" },
    { icon: "icon-game-control", label: "Simulated trading", link: "#" },
    { icon: "icon-robot", label: "Bot", link: "#" },
    { icon: "icon-database", label: "Copy", link: "#" },
  ];

  const helpCenterItems = [
    { icon: "icon-globe", label: "Community", link: "#" },
    { icon: "icon-headset", label: "Support", link: "#" },
  ];

  return (
    <div>
      <Header />
      <div className="pt-45 pb-16">
        <ProfileCard {...userData} />
        <MenuSection title="Buy cryptocurrencies" items={buyCryptoItems} />
        <MenuSection title="Exchange" items={exchangeItems} />
        <MenuSection title="Help center" items={helpCenterItems} />
        <div className="bg-menuDark tf-container">
          <a href="#" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
            <h5>About Cointex</h5>
            <span className="arr-right">
              <i className="icon-arr-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
