import { DiscordIcon, GitHubIcon,} from "nextra/icons";
import { FaTwitter,FaTelegramPlane } from 'react-icons/fa';


function Github() {
  return (
    <a
      href="https://github.com/0xobelisk/obelisk-engine"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Turbo GitHub repo"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <GitHubIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://discord.gg/b3q9CM7H"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Turbo Discord server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

function X() {
  return (
      <a
          href="https://twitter.com/0xObeliskLabs"
          className="hidden p-2 text-current sm:flex hover:opacity-75"
          title="Twitter X Discord server"
          target="_blank"
          rel="noreferrer"
      >
        <FaTwitter />
      </a>
  );
}

function Telegram() {
  return (
      <a
          href="https://t.me/+0_98p03Fbv1hNzY1"
          className="hidden p-2 text-current sm:flex hover:opacity-75"
          title="Telegram Discord server"
          target="_blank"
          rel="noreferrer"
      >
        <FaTelegramPlane />
      </a>
  );
}

export { Github, Discord,X,Telegram };
