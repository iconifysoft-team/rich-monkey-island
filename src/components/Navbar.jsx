import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/imgs/logo.png";

const NewNavbar = () => {
  const [humbergerActive, setHumbergerActive] = useState(false);

  const handleActive = () => {
    setHumbergerActive(!humbergerActive);
  };
  const { wallet } = useWallet();
  return (
    <>
      <div className="nav_wrapper">
        <div className="custom-container">
          <div className="custom_navbar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="">
              <WalletMultiButton className="wallet-btn" />
              {wallet && <WalletDisconnectButton />}
              <div className="btn btn-secondary" onClick={handleActive}>
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside
        onClick={handleActive}
        id="navbar"
        className={humbergerActive ? "active" : ""}
      >
        <div onClick={(e) => e.stopPropagation()} className="navbar_wrapper">
          <div onClick={handleActive} className="btn btn-warning">
            <i className="fas fa-times"></i>
          </div>
          <nav>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="buyRichMonkey"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              Buy Rich Monkey
            </Link>
            <Link
              activeClass="active"
              to="rarity"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              Rarity (Soon)
            </Link>
            <Link
              activeClass="active"
              to="roadMap"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              Roadmap
            </Link>
            <Link
              activeClass="active"
              to="unitedWeAre"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              United We Are
            </Link>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              team
            </Link>
            <Link
              activeClass="active"
              to="provenance"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              Provenance (Soon)
            </Link>
            <Link
              activeClass="active"
              to="members"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={handleActive}
              className="menuBar"
            >
              Members Only (Soon)
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default NewNavbar;
