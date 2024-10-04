import Card from '@mui/material/Card';
import { useThemeContext } from '../../contexts/ThemeContext';

export default function HeaderImg() {
  const { theme } = useThemeContext();

  return (
    <Card
      sx={{
        maxWidth: '100%',
        height: { xs: '190px', sm: '285px', md: '332.5px' },
        margin: '20px',
        padding: '80px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="animated-header">
        <h1>Dev@Deakin</h1>
      </div>
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <div className="animation-container">
        <div className="lightning-container">
          <div className="lightning white"></div>
          <div className="lightning red"></div>
        </div>
        <div className="boom-container">
          <div className="shape triangle"></div>
          <div className="shape triangle big"></div>
          <div className="shape disc"></div>
          <div className="shape circle white"></div>
          <div className="shape circle big white"></div>
        </div>
        <div className="boom-container second">
          <div className="shape triangle"></div>
          <div className="shape triangle big"></div>
          <div className="shape disc"></div>
          <div className="shape circle white"></div>
          <div className="shape circle big white"></div>
        </div>
      </div>
      <style>{`
    body {
      display: flex;
      align-items: center;
      position: relative;
      background: linear-gradient(to bottom right, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%);
      min-height: 100vh;
    }

    .animation-container {
      display: block;
      position: relative;
      width: 800px;
      max-width: 100%;
      margin: 0 auto;
    }

    .lightning-container {
      position: absolute;
      top: 50%;
      left: 0;
      display: flex;
      transform: translateY(-50%);
    }

    .lightning {
      position: absolute;
      display: block;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      transform-origin: 6px 6px;
      animation-name: woosh;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.445, 0.050, 0.550, 0.950);
      animation-direction: alternate;
    }

    .lightning.white {
      background-color: ${theme.palette.common.white};
      box-shadow: 0px 50px 50px 0px rgba(255, 255, 255, 0.7);
    }

    .lightning.red {
      background-color: ${theme.palette.error.main};
      box-shadow: 0px 50px 50px 0px rgba(252, 113, 113, 0.7);
      animation-delay: 0.2s;
    }

    .boom-container {
      position: absolute;
      display: flex;
      width: 80px;
      height: 80px;
      text-align: center;
      align-items: center;
      transform: translateY(-50%);
      left: 200px;
      top: -145px;
    }

    .shape {
      display: inline-block;
      position: relative;
      opacity: 0;
      transform-origin: center center;
    }

    .shape.triangle {
      width: 0;
      height: 0;
      border-style: solid;
      transform-origin: 50% 80%;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;
      margin-left: -15px;
      border-width: 0 2.5px 5px 2.5px;
      border-color: transparent transparent ${theme.palette.success.main} transparent;
      animation-name: boom-triangle;
    }

    .shape.triangle.big {
      margin-left: -25px;
      border-width: 0 5px 10px 5px;
      border-color: transparent transparent ${theme.palette.warning.main} transparent;
      animation-name: boom-triangle-big;
    }

    .shape.disc {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: ${theme.palette.info.main};
      animation-name: boom-disc;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;
    }

    .shape.circle {
      width: 20px;
      height: 20px;
      animation-name: boom-circle;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;
      border-radius: 100%;
      margin-left: -30px;
    }

    .shape.circle.white {
      border: 1px solid ${theme.palette.common.white};
    }

    .shape.circle.big {
      width: 40px;
      height: 40px;
      margin-left: 0px;
    }

    .shape.circle.big.white {
      border: 2px solid ${theme.palette.common.white};
    }

    .shape:after {
      background-color: rgba(178, 215, 232, 0.2);
    }

    .shape.triangle, .shape.circle, .shape.circle.big, .shape.disc {
      animation-delay: .38s;
      animation-duration: 3s;
    }

    .shape.circle {
      animation-delay: 0.6s;
    }

    .boom-container.second {
      left: 485px;
      top: 155px;
    }

    .boom-container.second .shape.triangle, .boom-container.second .shape.circle, .boom-container.second .shape.circle.big, .boom-container.second .shape.disc {
      animation-delay: 1.9s;
    }

    .boom-container.second .shape.circle {
      animation-delay: 2.15s;
    }

    @keyframes woosh {
      0% {
        width: 12px;
        transform: translate(0px, 0px) rotate(-35deg);
      }
      15% {
        width: 50px;
      }
      30% {
        width: 12px;
        transform: translate(214px, -150px) rotate(-35deg);
      }
      30.1% {
        transform: translate(214px, -150px) rotate(46deg);
      }
      50% {
        width: 110px;
      }
      70% {
        width: 12px;
        transform: translate(500px, 150px) rotate(46deg);
      }
      70.1% {
        transform: translate(500px, 150px) rotate(-37deg);
      }
      85% {
        width: 50px;
      }
      100% {
        width: 12px;
        transform: translate(700px, 0) rotate(-37deg);
      }
    }

    @keyframes boom-circle {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      30% {
        opacity: 0;
        transform: scale(3);
      }
      100% {
      }
    }

    @keyframes boom-triangle-big {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      40% {
        opacity: 0;
        transform: scale(2.5) translate(50px, -50px) rotate(360deg);
      }
      100% {
      }
    }

    @keyframes boom-triangle {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      30% {
        opacity: 0;
        transform: scale(3) translate(20px, 40px) rotate(360deg);
      }
      100% {
      }
    }

    @keyframes boom-disc {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      40% {
        opacity: 0;
        transform: scale(2) translate(-70px, -30px);
      }
      100% {
      }
    }

    .bubbles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
    }

    .bubble {
      position: absolute;
      bottom: -100px;
      width: 40px;
      height: 40px;
      background-color: ${theme.palette.primary.main};
      border-radius: 50%;
      opacity: 0.6;
      animation: rise 10s infinite ease-in;
    }

    .bubble:nth-child(2) {
      width: 60px;
      height: 60px;
      left: 20%;
      animation-duration: 12s;
      background-color: ${theme.palette.secondary.main};
    }

    .bubble:nth-child(3) {
      width: 80px;
      height: 80px;
      left: 40%;
      animation-duration: 14s;
      background-color: ${theme.palette.error.main};
    }

    .bubble:nth-child(4) {
      width: 50px;
      height: 50px;
      left: 60%;
      animation-duration: 16s;
      background-color: ${theme.palette.warning.main};
    }

    .bubble:nth-child(5) {
      width: 70px;
      height: 70px;
      left: 80%;
      animation-duration: 18s;
      background-color: ${theme.palette.info.main};
    }

    .bubble:nth-child(6) {
      width: 90px;
      height: 90px;
      left: 10%;
      animation-duration: 20s;
      background-color: ${theme.palette.success.main};
    }

    .bubble:nth-child(7) {
      width: 30px;
      height: 30px;
      left: 30%;
      animation-duration: 22s;
      background-color: ${theme.palette.primary.light};
    }

    .bubble:nth-child(8) {
      width: 50px;
      height: 50px;
      left: 50%;
      animation-duration: 24s;
      background-color: ${theme.palette.secondary.light};
    }

    .bubble:nth-child(9) {
      width: 70px;
      height: 70px;
      left: 70%;
      animation-duration: 26s;
      background-color: ${theme.palette.error.light};
    }

    .bubble:nth-child(10) {
      width: 40px;
      height: 40px;
      left: 90%;
      animation-duration: 28s;
      background-color: ${theme.palette.warning.light};
    }

    @keyframes rise {
      0% {
        transform: translateY(0) scale(1);
        opacity: 0.6;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        transform: translateY(-1000px) scale(1.5);
        opacity: 0;
      }
    }

    .bubble:hover {
      animation: scatter 1s forwards;
    }

    @keyframes scatter {
      0% {
        transform: scale(1);
        opacity: 0.6;
      }
      100% {
        transform: translate(calc(var(--x) * 1px), calc(var(--y) * 1px)) scale(0.1);
        opacity: 0;
      }
    }

    .bubble {
      --x: calc((Math.random() - 0.5) * 200);
      --y: calc((Math.random() - 0.5) * 200);
    }

    .footer {
      color: ${theme.palette.common.white};
      font-size: 10px;
      position: fixed;
      bottom: 0;
      font-weight: 200;
      padding: 10px 20px;
    }

    .footer a,
    .footer a:hover,
    .footer a:focus,
    .footer a:visited {
      color: #c6c6c6;
    }
  `}</style>
    </Card>
  );
}
